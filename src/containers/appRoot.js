if (process.env.NODE_ENV === 'production') {
	module.exports = require('./appRoot.prod')
} else {
	module.exports = require('./appRoot.dev')
}