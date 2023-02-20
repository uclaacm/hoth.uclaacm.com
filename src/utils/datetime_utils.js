function getDateTime(timestamp) {
	try {
		const d = new Date(timestamp);
		const date = d.toLocaleDateString('en-US');
		const time = d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
		return { date, time };
	} catch {
		return '';
	}
}

// format must be 'long' or 'short'
function getTimeZoneWithFormat(date, format) {
	try {
		const formatter = new Intl.DateTimeFormat('en-US', { timeZoneName: format });
		return formatter.formatToParts(date).find(part => {
			return part.type === 'timeZoneName';
		}).value || '';
	} catch {
		return '';
	}
}

export { getDateTime, getTimeZoneWithFormat };

