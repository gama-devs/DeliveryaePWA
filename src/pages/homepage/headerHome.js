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
				justifyContent: 'space-between',
				height: '8vh',
				marginTop: '2vh',
				backgroundColor: '#FFF',
				display: 'flex',
				flexDirection: 'row',
				margin: '3vh 3vw 1.5vh'
			}}
		>
			<div>
				<img
					alt="logo"
					src={pizzalogo}
					style={{height: '6vh', flex: 1 }}
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
			</div>
			<div style={{
				display: 'flex',
				alignItems: 'center'
			}}>
				<SearchIcon
					onClick={() => {
						history.push('/searchaddres')
					}}
					style={{
						marginRight: '5vw',
						flex: 1,
						color: '#413131',
						fontSize: '2em',
					}}
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
						borderRadius: '12px',
						height: '5vh',
						width: '5vh',
						backgroundColor: '#FF805D',
					}}
				>
					<PersonOutlineIcon style={{ color: '#FFF' }} />
				</div>
			</div>
		</div>
	)
}
export default withRouter(HeaderHome)
