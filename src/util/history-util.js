import { toQueryParams } from './http-util'
let createHistory = require('history').createBrowserHistory

const history = createHistory()
const shove = history.push

history.push = (params) => {
	if (typeof params === 'string') {
		shove(params)
	} else {
		const { query } = params
		shove({
			...params,
			search: toQueryParams(query || {}),
		})
	}
}

export default history
