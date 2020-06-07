import React from 'react'
import { withRouter } from 'react-router-dom'
import { Input } from 'reactstrap'
import cadeadoimg from '../../assets/cadeadoimg.png'
const ConfirmTempPassword = (props) => {
	return (
		<div
			style={{
				textAlign: 'center',
				flex: 1,
				top: 0,
				left: 0,
				position: 'relative',
				display: 'flex',
				height: '25vh',
				borderRadius: '32px 32px 0px 0px',
				backgroundColor: '#1BD09A',
				flexDirection: 'column',

				alignItems: 'center',
			}}
		>
			<div
				style={{
					flex: 1,
					marginTop: '3vh',
					fontSize: '14px',
					fontWeight: 'bold',
					color: '#FFF',
				}}
			>
				Nova Senha cadastrada
				<br /> com sucesso!
			</div>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					height: '8vh',
					width: '8vh',
					alignItems: 'center',
					backgroundColor: '#FFF',
					borderRadius: '12px',
					marginBottom: '3vh',
				}}
			>
				<img alt="cadeado" src={cadeadoimg} />
			</div>
		</div>
	)
}
export default withRouter(ConfirmTempPassword)
