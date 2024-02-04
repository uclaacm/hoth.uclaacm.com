module.exports = {
	hooks: {
		// you can skip git hooks with --no-verify flag
		// but make sure you know what you are doing
		'pre-commit': 'echo "nonono"',
		'pre-push': './.husky/pre-push'
	}
};