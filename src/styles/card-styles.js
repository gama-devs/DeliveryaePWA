import { makeStyles } from '@material-ui/styles'

export const OnboardingCardStyles = makeStyles({
	baseCard: {
		borderRadius: '200px',
		height: '100vh',
	},
	imginside: {
		alignContent: 'center',
		width: '356px',
		height: '370px',
		marginLeft: '2vh',
	},
	logoCheckAddress: {
		alignContent: 'center',
		width: '35vw',
		height: 'auto',
		marginTop: '5vh',
	},
	imgCheckAddress: {
		alignContent: 'center',
		width: '25vh',
		height: 'auto',
	},
	title2: {
		textAlign: 'center',
		fontSize: '16px',
		fontFamily: 'roboto',
		lineHeight: '23px',
		margin: '0px 20px 50px 20px',
		color: '#868484',
	},
	title1: {
		lineHeight: '1.5em',
		fontSize: '1.3em',
		textAlign: 'center',
		margin: '2vh 0 auto 0',
		fontWeight: '600'
	},
})
