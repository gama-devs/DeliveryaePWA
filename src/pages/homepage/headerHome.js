import React from 'react'
import pizzalogo from '../../assets/logo.png'
import SearchIcon from '@material-ui/icons/Search'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline'
import { withRouter } from 'react-router-dom'
import history from '../../util/history-util'
const HeaderHome = () => {
	return (
		<div
			style={{
				alignItems: 'center',
				height: '8vh',
				marginTop: '2vh',
				backgroundColor: '#FFF',
				display: 'flex',
				flexDirection: 'row',
			}}
		>
			<img
				alt="logo"
				src={pizzalogo}
				style={{ paddingLeft: '3vw', height: '6vh', flex: 1 }}
			></img>
			<div
				onClick={() => {
					localStorage.removeItem('authtoken')
					history.push('/login')
				}}
				style={{ marginLeft: '30vw', fontSize: '3px', flex: 5 }}
			>
				<div>logoff</div>{' '}
			</div>

			<SearchIcon
				onClick={() => {
					history.push('/searchaddres')
				}}
				style={{ flex: 1, color: '#FF805D' }}
			/>
			<div
				onClick={() => {
					if (localStorage.getItem('authtoken')) {
						history.push('/profile')
					} else {
						history.push('/login')
					}
				}}
				style={{
					cursor: 'pointer',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					borderRadius: '6px',
					height: '5vh',
					width: '5vh',
					backgroundColor: '#FF805D',
				}}
			>
				{' '}
				<PersonOutlineIcon style={{ color: '#FFF' }} />
			</div>
		</div>
	)
}
export default withRouter(HeaderHome)
