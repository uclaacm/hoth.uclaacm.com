import makeStyles from '@material-ui/core/styles/makeStyles';

export const useUppercase = makeStyles({
	root: {
		textTransform: 'uppercase',
		'& i': {
			textTransform: 'none',
			fontStyle: 'normal'
		}
	}
});
