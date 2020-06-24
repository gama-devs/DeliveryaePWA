import React from 'react'
import { withRouter } from 'react-router-dom'
import bgpizza from '../../assets/loginbg.png'
import bgfolha from '../../assets/bgfolhas.png'
import imgLogo from '../../assets/logo.png'

const LoginBG = (props) => {
	return (
		<div style={{ top: 0, left: 0, position: 'absolute' }}>
			<img alt="Logo" style={{
					width: '50%',
					position: 'absolute',
					left: '25%',
					top: '9vh'
				}} 
				src={imgLogo} 
			/>
			<img
				alt=""
				style={{
					height: '100vh',
					width: '100vw',
					position: 'relative',
				}}
				src={bgpizza}
			/>
			<img
				alt=""
				style={{
					height: '100%',
					width: '100%',
					position: 'absolute',
					top: 0,
					left: 0,
				}}
				src={bgfolha}
			/>
			<div
				style={{
					height: '100%',
					width: '100%',
					position: 'absolute',
					top: 0,
					left: 0,
				}}
			>
				{props.children}
			</div>
		</div>
	)
}
export default withRouter(LoginBG)
