import React, { useRef, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { Input } from 'reactstrap'
import history from '../../util/history-util'
const ConfirmSms = (props) => {
	const [codigo0, setcodigo0] = useState('')
	const [codigo1, setcodigo1] = useState('')
	const [codigo2, setcodigo2] = useState('')
	const [codigo3, setcodigo3] = useState('')

	const useFocus = () => {
		const htmlElRef = useRef(null)
		const setFocus = () => {
			htmlElRef.current && htmlElRef.current.focus()
		}
		const [inputRef, setInputFocus] = useFocus()
		return [htmlElRef, setFocus]
	}
	let handlesave = async () => {
		// console.log('hehe')
		history.push('/home')
	}

	return (
		<div
			style={{
				textAlign: 'center',
				flex: 1,
				top: 0,
				left: 0,
				position: 'relative',
				height: '40vh',
				borderRadius: '20px',
				backgroundColor: '#fff',
			}}
		>
			<div
				style={{
					flex: 1,
					marginTop: '3vh',
					fontSize: '14px',
					fontWeight: 'bold',
					color: '#FF805D',
				}}
			>
				Informe o código enviado
			</div>
			<div
				style={{
					marginTop: '3vh',
					justifyContent: 'center',
					display: 'flex',
					flexDirection: 'row',
				}}
			>
				<div
					style={{
						display: 'flex',
						height: '8vh',
						width: '8vh',
						justifyContent: 'center',
						alignItems: 'center',
						borderRadius: '12px',
						backgroundColor: '#EDF1F7',
					}}
				>
					<Input
						onChange={(e) => {
							setcodigo0(e.target.value)
						}}
						style={{
							borderRadius: '12px',
							height: '7vh',
							width: '7vh',
							fontSize: '20px',
							backgroundColor: '#EDF1F7',
							marginLeft: '1vw',
							borderStyle: 'none',
						}}
					/>
				</div>

				<div
					style={{
						display: 'flex',
						height: '8vh',
						width: '8vh',
						justifyContent: 'center',
						alignItems: 'center',
						borderRadius: '12px',
						backgroundColor: '#EDF1F7',
						marginLeft: '4vw',
					}}
				>
					<Input
						onChange={(e) => {
							setcodigo1(e.target.value)
						}}
						style={{
							borderRadius: '12px',
							height: '7vh',
							width: '7vh',
							fontSize: '20px',
							backgroundColor: '#EDF1F7',
							marginLeft: '1vw',
							borderStyle: 'none',
						}}
					/>
				</div>

				<div
					style={{
						display: 'flex',
						height: '8vh',
						width: '8vh',
						justifyContent: 'center',
						alignItems: 'center',
						borderRadius: '12px',
						backgroundColor: '#EDF1F7',
						marginLeft: '4vw',
					}}
				>
					<Input
						onChange={(e) => {
							setcodigo2(e.target.value)
						}}
						style={{
							borderRadius: '12px',
							height: '7vh',
							width: '7vh',
							fontSize: '20px',
							backgroundColor: '#EDF1F7',
							marginLeft: '1vw',
							borderStyle: 'none',
						}}
					/>
				</div>

				<div
					style={{
						display: 'flex',
						height: '8vh',
						width: '8vh',
						justifyContent: 'center',
						alignItems: 'center',
						borderRadius: '12px',
						backgroundColor: '#EDF1F7',
						marginLeft: '4vw',
					}}
				>
					<Input
						onChange={(e) => {
							setcodigo3(e.target.value)
						}}
						style={{
							borderRadius: '12px',
							height: '7vh',
							width: '7vh',
							fontSize: '20px',
							backgroundColor: '#EDF1F7',
							marginLeft: '1vw',
							borderStyle: 'none',
						}}
					/>
				</div>
			</div>
			<div
				style={{
					justifyContent: 'center',
					display: 'flex',
					flexDirection: 'row',
					color: '#000',
					fontSize: '12px',
					marginTop: '4vh',
					fontWeight: 'bold',
				}}
			>
				<div> {'Não recebeu?'}</div>
				<div style={{ cursor: 'pointer', textDecoration: 'underline' }}>
					{' '}
					{'Reenviar código'}
				</div>
			</div>

			<div
				style={{
					justifyContent: 'center',
					display: 'flex',
					flexDirection: 'row',
					color: '#000',
					fontSize: '12px',
					marginTop: '4vh',
					fontWeight: 'bold',
				}}
			>
				<div>
					{' '}
					Ao se cadastrar você automaticamente
					<br />
					concorda com os
					<div
						onClick={() => {
							props.handlepagestate('termos')
						}}
						style={{ cursor: 'pointer', textDecoration: 'underline' }}
					>
						{' '}
						{'Termos de Uso'}
					</div>
				</div>
			</div>

			<div
				onClick={() => {
					handlesave()
				}}
				style={{
					cursor: 'pointer',
					alignItems: 'center',
					justifyContent: 'center',
					textAlign: 'center',
					flex: 1,
					width: '100vw',
					borderRadius: '32px 32px 0px 0px',
					marginTop: '3vh',
					height: '12vh',
					display: 'flex',
					backgroundColor: '#FF805D',
				}}
			>
				<h4
					style={{
						color: '#FFF',
						fontWeight: 'bold',
						fontSize: '15px',
					}}
				>
					Confirmar cadastro
				</h4>
			</div>
		</div>
	)
}
export default withRouter(ConfirmSms)
