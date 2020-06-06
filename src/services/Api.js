import axios from 'axios'

export const Api = axios.create({
	baseURL: 'http://50.16.146.1/api/',
	headers: {
		'content-type': 'application/json',
		Accept: 'application/json',
	},
})

export default Api
