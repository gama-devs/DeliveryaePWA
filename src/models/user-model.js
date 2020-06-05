import { checkLocalStorage, setInLocalStorage } from '../util/localstorage-util'
import { action, createStore, useStoreActions } from 'easy-peasy'
const initialState = {
	favoriteLyrics: checkLocalStorage('addresspicked', []),
	isLyricsNotFound: false,
	isLyricsLoading: false,
	lyrics: '',
	artist: '',
	song: '',
	address: { str: '', fullresp: '', lat: '', long: '', cep: '' },
}

// lift the observable stream into a variable
// so that we can unsubscribe from another functionw within the model

export const userModel = createStore({
	user: {
		...initialState,
		setaddress: action((state, payload) => {
			state.address = payload
		}),
	},
})
