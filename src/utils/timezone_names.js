// format must be 'long' or 'short'
export function getTimeZoneWithFormat(date, format) {
	try {
		const formatter = new Intl.DateTimeFormat('en-US', { timeZoneName: format });
		return formatter.formatToParts(date).find(part => {
			return part.type === 'timeZoneName';
		}).value || '';
	} catch {
		return '';
	}
}

