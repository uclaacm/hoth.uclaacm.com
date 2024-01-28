/**
 * Returns an object containing the date and time for the given timestamp.
 * Takes the timestamp to convert to date and time as parameter.
 * Returns an object containing the date and time as strings, or null if an error occurs.
 */
function getDateTime(timestamp) {
	try {
		const d = new Date(timestamp);
		const date = d.toLocaleDateString('en-US');
		const time = d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
		return { date, time };
	} catch {
		return null;
	}
}

/**
 * Returns the day of the week as a string for the given numeric day of the week.
 * Takes the numeric day of the week (0 for Sunday, 1 for Monday, etc.) as parameter.
 * Returns the name of the day of the week as a string, or null if an error occurs.
 */
function getDayOfWeek(day) {
	try {
		const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		return dayOfWeek[day];
	} catch {
		return null;
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

export { getDateTime, getDayOfWeek, getTimeZoneWithFormat };

