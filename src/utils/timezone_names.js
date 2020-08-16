function getTimeZoneWithFormat(format) {
	try {
		const formatter = new Intl.DateTimeFormat('en-US', { timeZoneName: format });
		return formatter.formatToParts(new Date()).find(part => {
			return part.type === 'timeZoneName';
		}).value || '';
	} catch {
		return '';
	}
}
export const currentTimeZoneShort = getTimeZoneWithFormat('short');
export const currentTimeZoneLong = getTimeZoneWithFormat('long');
