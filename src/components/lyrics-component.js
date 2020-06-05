// import React from 'react'
// import { useStore, useStoreActions } from 'easy-peasy'
// import FavoriteIcon from '@material-ui/icons/Favorite'
// import IconButton from '@material-ui/core/IconButton'
// import Icon from '@material-ui/core/Icon'
// import Card from '@material-ui/core/Card'

// import { useBtnStyles } from '../styles/button-styles'
// import { OnboardingCardStyles } from '../styles/card-styles'

// export const Lyrics = () => {
// 	const { artist, song, lyrics } = useStore((state) => state.music)
// 	const { addToFavoriteLyrics, updateCurrentLyrics } = useStoreActions(
// 		(dispatch) => ({
// 			addToFavoriteLyrics: dispatch.music.addToFavoriteLyrics,
// 			updateCurrentLyrics: dispatch.music.updateCurrentLyrics,
// 		})
// 	)
// 	const { baseCard, title } = OnboardingCardStyles()
// 	const { btnGroup } = useBtnStyles()
// 	return (
// 		<Card style={{ marginTop: '1rem' }} className={baseCard}>
// 			<h2 className={title}>Lyrics</h2>
// 			<div style={{ padding: '1rem', paddingTop: '0' }}>
// 				<p>{lyrics}</p>
// 				<hr style={{ color: '#3c359966' }} />
// 			</div>
// 			<div className={btnGroup} style={{ paddingBottom: '1rem' }}>
// 				<IconButton onClick={() => updateCurrentLyrics('')}>
// 					<Icon color="primary">thumb_down</Icon>
// 				</IconButton>
// 				<IconButton
// 					onClick={() =>
// 						addToFavoriteLyrics({
// 							artist,
// 							song,
// 							lyrics,
// 							lyricsExpanded: false,
// 						})
// 					}
// 				>
// 					<FavoriteIcon color="secondary" />
// 				</IconButton>
// 			</div>import { useDebugValue } from 'react';
// import { useStore, useStoreActions } from 'easy-peasy';

// export const useThemeSelection = () => {
//   const { currentThemeSelection } = useStore(state => state.settings);
//   const { updateSelectedTheme } = useStoreActions(dispatch => ({
//     updateSelectedTheme: dispatch.settings.updateSelectedTheme
//   }));

//   const handleThemeToggle = () =>
//     currentThemeSelection === 'lite'
//       ? updateSelectedTheme('dark')
//       : updateSelectedTheme('lite');

//   useDebugValue(currentThemeSelection);

//   return {
//     currentThemeSelection,
//     handleThemeToggle
//   };
// };

// 		</Card>
// 	)
// }
