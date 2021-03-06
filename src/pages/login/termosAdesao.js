import React from 'react'

import { withRouter } from 'react-router-dom'
import { Button } from 'reactstrap'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'

const TermosAdesao = (props) => {
	return (
		<div style={{height: '100vh'}}>
			<div
				style={{
					backgroundColor: '#E5E5E5',
					display: 'flex',
					alignItems: 'center',
					height: '20vh',
					paddingBottom: '5vh'
				}}
			>
				<Button
					onClick={() => {
						props.handlepagestate('confirmsms')
					}}
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						textAlign: 'center',
						borderStyle: 'none',
						boxShadow: '0 0 0',
						backgroundColor: '#FFF',
						borderRadius: '12px',
						marginLeft: '3vh',
						height: '5vh',
						width: '5vh',
					}}
				>
					<ChevronLeftIcon style={{ color: '#FF805D', height: '3vh', width: 'auto' }} />
				</Button>
				<div
					style={{
						textAlign: 'center',
						fontSize: '20px',
						fontWeight: 'bold',
						color: '#FF805D',
						padding: '5vh 0',
						flex: '1',
    					marginRight: '8vh'
					}}
				>
					Termos de uso
				</div>
			</div>

			<div
				style={{
					textAlign: 'left',
					borderRadius: '32px',
					backgroundColor: '#fff',
					padding: '5vh 5vw',
					overflow: 'scroll',
					marginTop: '-5vh',
					position: 'fixed',
					bottom: 0,
					left: 0,
					height: '85%'
				}}
			>
				<div style={{ flex: 1 }}>
					/* Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
					commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
					et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
					felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
					consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
					nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
					venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
					Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
					vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat
					vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra
					quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius
					laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
					augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
					rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam
					semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc,
					blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio
					et ante tincidunt tempus. Donec vitae sapien ut libero venenatis
					faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus
					tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales
					sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit
					cursus nunc. */
				</div>
			</div>
		</div>
	)
}

export default withRouter(TermosAdesao)
