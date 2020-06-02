import { checkLocalStorage, setInLocalStorage } from '../util/localstorage-util'

const initialState = {
	favoriteLyrics: checkLocalStorage('addresspicked', []),
	isLyricsNotFound: false,
	isLyricsLoading: false,
	lyrics: '',
	artist: '',
	song: '',
	address: 'papaia',
}

// lift the observable stream into a variable
// so that we can unsubscribe from another functionw within the model

export const userModel = {
	user: {
		...initialState,
		addToFavoriteLyrics: (state, payload) => {
			let favoriteLyricsWithAddition = [...state.favoriteLyrics, payload]
			state.favoriteLyrics = favoriteLyricsWithAddition
			setInLocalStorage('favoriteLyrics', favoriteLyricsWithAddition)
		},
		setaddress: (state, payload) => {
			state.address = payload
		},
		updateIsLyricsNotFound: (state, payload) => {
			state.isLyricsNotFound = payload
		},
		updateCurrentArtist: (state, payload) => {
			state.artist = payload
		},
		updateCurrentSong: (state, payload) => {
			state.song = payload
		},
		updateCurrentLyrics: (state, payload) => {
			state.lyrics = payload
		},
		toggleVisibility: (state, payload) => {
			const { index, visible } = payload
			const updatedCollection = state.favoriteLyrics.map((element, i) =>
				i === index ? { ...element, lyricsExpanded: visible } : element
			)
			state.favoriteLyrics = updatedCollection
		},
	},
}
