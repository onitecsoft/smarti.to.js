Number.prototype.to = function (format) {
	format = Number.culture.patterns[format] || format;
	var parts = format.split('.');
	var decimals = 0;
	var showGroup = parts[0].indexOf(',') >= 0;
	var zeroPad = (parts[0].match(/0/g) || []).length;
	var negative = this < 0;

	if (parts.length == 2) {
		var mind = (parts[1].match(/0/g) || []).length;
		var maxd = mind + (parts[1].match(/#/g) || []).length;
		var curd = (this.toString().split('.')[1] || '').length;
		decimals = curd <= mind ? mind : (curd <= maxd ? curd : maxd);
	}

	var value = Math.abs(this).toFixed(decimals).split('.');
	while (value[0].length < zeroPad) { value[0] = '0' + value[0]; }
	if (showGroup) value[0] = value[0].replace(/\B(?=(\d{3})+(?!\d))/g, Number.culture.delimiters.group);
	return (negative ? '-' : '') + value.join(Number.culture.delimiters.decimal);
};

Date.prototype.to = function (format) {
	var value = this;
	var h = this.getHours();
	var ampm = Date.culture.ampm ? (h > 11 ? Date.culture.pm : Date.culture.am) : '';
	h = Date.culture.ampm ? (h > 12 ? h - 12 : (h == 0 ? 12 : h)) : h;

	format = Date.culture.patterns[format] || format;
	format = format.replace(/dd|d|MMMM|MMM|MM|M|yyyy|yy|hh|h|mm|m|ss|s|tt|t|aaa|aa|a/g, function (s) {
		if (s == 'dd') return value.getDate().to('00');
		else if (s == 'd') return value.getDate();
		else if (s == 'MMMM') return Date.culture.MMMM[value.getMonth() + 1];
		else if (s == 'MMM') return Date.culture.MMM[value.getMonth() + 1];
		else if (s == 'MM') return (value.getMonth() + 1).to('00');
		else if (s == 'M') return value.getMonth() + 1;
		else if (s == 'yyyy') return value.getFullYear();
		else if (s == 'yy') return value.getFullYear().toString().substr(2, 2);
		else if (s == 'hh') return h.to('00');
		else if (s == 'h') return h;
		else if (s == 'mm') return value.getMinutes().to('00');
		else if (s == 'm') return value.getMinutes();
		else if (s == 'ss') return value.getSeconds().to('00');
		else if (s == 's') return value.getSeconds();
		else if (s == 'tt') return ampm;
		else if (s == 't') return ampm.substr(0, 1);
		else if (s == 'aaa') return Date.culture.aaa[value.getDay()];
		else if (s == 'aa') return Date.culture.aa[value.getDay()];
		else if (s == 'a') return Date.culture.a[value.getDay()];
	});

	return format;
};

String.prototype.to = function (format) {
	if (this.indexOf('/Date(') == 0) {
		var value = new Date(parseInt(this.substr(6)));
		value = new Date(value.getTime() + value.getTimezoneOffset() * 60000);
		return value.to(format);
	}
	else {
		var utc = this.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}[\.\d]*/);
		if (utc != null) {
			var value = new Date(utc[0] + "Z");
			value = new Date(value.getTime() + value.getTimezoneOffset() * 60000);
			return value.to(format);
		}
	}
	return this;
}
