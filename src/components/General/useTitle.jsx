import { useEffect } from 'react';

const useTitle = title => {
	useEffect(() => {
		document.title = `Hack on the Hill${title}`;
	}, []);
};

export default useTitle;
