export function getDateTime(timestamp) {
	try {
		const d = new Date(timestamp);
		const date = d.toLocaleDateString('en-US');
		const time = d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
		return `${date}, ${time}`;
	} catch {
		return '';
	}
}
