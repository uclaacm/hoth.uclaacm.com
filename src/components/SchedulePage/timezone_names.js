function getTimeZoneWithFormat(format) {
	try {
		const formatter = new Intl.DateTimeFormat('en-US', { timeZoneName: format });
		return formatter.formatToParts(new Date()).slice(-1)[0] || '';
	} catch {
		return '';
	}
}
export const currentTimeZoneShort = getTimeZoneWithFormat('short');
export const currentTimeZoneLong = getTimeZoneWithFormat('long');
