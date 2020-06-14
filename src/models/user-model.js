import { checkLocalStorage, setInLocalStorage } from '../util/localstorage-util'
import { action, createStore, useStoreActions } from 'easy-peasy'
const initialState = {
	favoriteLyrics: checkLocalStorage('addresspicked', []),
	currentseeall: [],
	currentfootmenu: 0,
	currentitem: [],
	authtoken: '',
	bag: [],
	savedaddresses: [],
	address: {
		nome: '',
		description: '',
		str: '',
		fullresp: '',
		numero: '',
		complement: '',
		lat: '',
		long: '',
		zip_code: '',
		address: '',
	},
}

// lift the observable stream into a variable
// so that we can unsubscribe from another functionw within the model

export const userModel = createStore({
	user: {
		...initialState,
		setcurrentseeall: action((state, payload) => {
			state.currentseeall = payload
		}),
		setcurrentitem: action((state, payload) => {
			state.currentitem = payload
		}),
		setcurrentfootmenu: action((state, payload) => {
			state.currentfootmenu = payload
		}),
		setaddress: action((state, payload) => {
			state.address = payload
		}),
		setauthtoken: action((state, payload) => {
			state.authtoken = payload
		}),
		saveonthebag: action((state, payload) => {
			state.bag = [...state.bag, payload]
		}),
		clearcurrentaddress: action((state, payload) => {
			state.address = initialState.address
		}),
		saveanotheraddress: action((state, payload) => {
			state.savedaddresses = [...state.savedaddresses, payload]
		}),
	},
})
