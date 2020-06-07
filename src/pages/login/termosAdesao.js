import React from 'react'

import { withRouter } from 'react-router-dom'
import { Button } from 'reactstrap'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'

const TermosAdesao = (props) => {
	return (
		<div>
			<div
				style={{
					display: 'flex',
					height: '25vh',
					backgroundColor: '#E5E5E5',
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<div style={{ flex: 1 }}>
					<Button
						onClick={() => {
							props.handlepagestate('confirmsms')
						}}
						style={{
							marginLeft: '5vw',
							marginBottom: '3vh',
							borderStyle: 'none',
							backgroundColor: '#FFF',
							borderRadius: '8px',
							height: '7vh',
							width: '7vh',
						}}
					>
						<ArrowBackIosIcon style={{ color: '#FF805D' }} />
					</Button>
				</div>
				<div
					style={{
						textAlign: 'center',
						flex: 5,
						fontSize: '20px',
						fontWeight: 'bold',
						color: '#FF805D',
					}}
				>
					<div style={{ marginBottom: '3vh', marginRight: '6vw' }}>
						Termos de uso
					</div>
				</div>
			</div>

			<div
				style={{
					textAlign: 'center',
					flex: 1,
					display: 'flex',
					height: '70vh',
					marginTop: '-5vh',
					borderRadius: '32px',
					backgroundColor: '#fff',
				}}
			>
				<div style={{ flex: 1, maxWidth: '85vw' }}>
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
