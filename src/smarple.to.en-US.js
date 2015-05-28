Number.culture = {
	delimiters: {
		group: ',',
		decimal: '.'
	},
	patterns: {
		n: ',.######',
		n0: ',',
		n2: ',.00',
		n3: ',.000'
	}
}

Date.culture = {
	ampm: true,
	am: 'AM',
	pm: 'PM',
	patterns: {
		d: 'M/d/yyyy',
		t: 'h:mm:ss tt',
		dt: 'M/d/yyyy h:mm:ss tt'
	},
	a: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
	aa: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
	aaa: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
	MMM: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
	MMMM: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
}
