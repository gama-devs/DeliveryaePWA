import React from 'react'
import { withRouter } from 'react-router-dom'
import bgpizza from '../../assets/loginbg.png'
import bgfolha from '../../assets/bgfolhas.png'

const LoginBG = (props) => {
	return (
		<div style={{ top: 0, left: 0, position: 'relative' }}>
			<img
				alt=""
				style={{
					height: '100vh',
					width: '100vw',
					position: 'relative',
					top: '0',
					left: '0',
				}}
				src={bgpizza}
			/>
			<img
				alt=""
				style={{
					height: '100vh',
					width: '100vw',
					position: 'absolute',
					top: '0',
					left: '0',
				}}
				src={bgfolha}
			/>
			<div
				style={{
					height: '100vh',
					width: '100vw',
					position: 'absolute',
					top: '0',
					left: '0',
				}}
			>
				{props.children}
			</div>
		</div>
	)
}
export default withRouter(LoginBG)
