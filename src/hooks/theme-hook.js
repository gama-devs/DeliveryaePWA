// import { useDebugValue } from 'react';
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
