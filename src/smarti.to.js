var smarti = this['smarti'] || { scope: this };

smarti.to = function (format) {
	if (format) {
		var args = arguments;
		return format.replace(/\{(\d+):?([^\}]*)\}|^[^{}]+$/g, function (f, i, p) {
			var v = args[parseInt(i || 0) + 1];
			if (v == null) return '';
			if (i == null) p = f;
			if (p && v != '') {
				v = smarti.parse(v);
				if (typeof v == 'number') return smarti._to.nto(v, p);
				if (v.getMonth) return smarti._to.dto(v, p);
			}
			return v;
		});
	}
	else return arguments[1] || '';
}

smarti.parse = function (value) {
	if (typeof value != 'string' || value == '') return value;
	if (value.indexOf('/Date(') == 0) {
		var v = new Date(parseInt(value.substr(6)));
		return new Date(v.getTime() + v.getTimezoneOffset() * 60000);
	}
	if ((m = value.match(/^\d{4}-\d{2}-\d{2}[T ]?(\d{2}:\d{2}:\d{2})?(\.\d+)?/)) != null) {
		var v = new Date(m[0] + "Z");
		return new Date(v.getTime() + v.getTimezoneOffset() * 60000);
	}
	if (smarti._to.ntest(value)) {
		value = value.replace(new RegExp(smarti.culture.number.group, 'g'), '');
		if (value.indexOf(smarti.culture.number.decimal) > 0) {
			if (smarti.culture.number.decimal != '.') value = value.replace(smarti.culture.number.decimal, '.');
			return parseFloat(value);
		}
		else return parseInt(value);
	}
	throw 'smarti.parse: unrecognized string: ' + value;
}

smarti._to = {
	ntest: function (v) {
		return new RegExp('^-?[\\d\\' + smarti.culture.number.group + ']+\\' + smarti.culture.number.decimal + '?\\d*$', '').test(v);
	},
	nto: function (n, f) {
		f = smarti.culture.number.patterns[f] || f;
		var parts = f.split('.');
		var decimals = 0;
		var showGroup = parts[0].indexOf(',') >= 0;
		var zeroPad = (parts[0].match(/0/g) || []).length;
		var negative = n < 0;

		if (parts.length == 2) {
			var curd = (n.toString().split('.')[1] || '').length;
			var mind = (parts[1].match(/0/g) || []).length;
			var maxd = (mind + (parts[1].match(/#/g) || []).length) || curd;
			decimals = curd <= mind ? mind : (curd <= maxd ? curd : maxd);
		}

		var value = Math.abs(n).toFixed(decimals).split('.');
		while (value[0].length < zeroPad) { value[0] = '0' + value[0]; }
		if (showGroup) value[0] = value[0].replace(/\B(?=(\d{3})+(?!\d))/g, smarti.culture.number.group);
		return (negative ? '-' : '') + value.join(smarti.culture.number.decimal);
	},
	dto: function (d, f) {
		var h = d.getHours();
		var ampm = smarti.culture.date.ampm ? (h > 11 ? smarti.culture.date.pm : smarti.culture.date.am) : '';
		h = smarti.culture.date.ampm ? (h > 12 ? h - 12 : (h == 0 ? 12 : h)) : h;
		f = smarti.culture.date.patterns[f] || f;
		f = f.replace(/dd|d|MMMM|MMM|MM|M|yyyy|yy|hh|h|mm|m|ss|s|tt|t|aaa|aa|a/g, function (s) {
			if (s == 'dd') { var v = d.getDate(); return v < 10 ? '0' + v : v; }
			if (s == 'd') return d.getDate();
			if (s == 'MMMM') return smarti.culture.date.MMMM[d.getMonth()];
			if (s == 'MMM') return smarti.culture.date.MMM[d.getMonth()];
			if (s == 'MM') { var v = d.getMonth() + 1; return v < 10 ? '0' + v : v; }
			if (s == 'M') return d.getMonth() + 1;
			if (s == 'yyyy') return d.getFullYear();
			if (s == 'yy') return d.getFullYear().toString().substr(2, 2);
			if (s == 'hh') return h < 10 ? '0' + h : h;
			if (s == 'h') return h;
			if (s == 'mm') { var v = d.getMinutes(); return v < 10 ? '0' + v : v; }
			if (s == 'm') return d.getMinutes();
			if (s == 'ss') { var v = d.getSeconds(); return v < 10 ? '0' + v : v; }
			if (s == 's') return d.getSeconds();
			if (s == 'tt') return ampm;
			if (s == 't') return ampm.substr(0, 1);
			if (s == 'aaa') return smarti.culture.date.aaa[d.getDay()];
			if (s == 'aa') return smarti.culture.date.aa[d.getDay()];
			if (s == 'a') return smarti.culture.date.a[d.getDay()];
		});
		return f;
	}
}
