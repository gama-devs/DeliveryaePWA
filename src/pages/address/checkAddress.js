import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import BaseCheck from './basecheck'
import DoneIcon from '@material-ui/icons/Done'
import { Field } from 'react-final-form'
import { useStoreActions } from 'easy-peasy'
import { InputField } from '../../components/input-field-component'
import { OnboardingCardStyles } from '../../styles/card-styles'
import { Input, Row, Col } from 'reactstrap'
import history from '../../util/history-util'
import { FormHelperText } from '@material-ui/core'

const checkAddress = () => {
	const setaddresbase = useStoreActions((actions) => actions.user.setaddress)
	const { baseCard, title1 } = OnboardingCardStyles()

	const [endereco, setendereco] = useState('')

	return (
		<div
			style={{
				backgroundColor: `#FFFFFF`
			}}
		>
			<BaseCheck />
			<div
				style={{
					borderRadius: '32px 32px 0px 0px',
					backgroundColor: `#FF805D`,
					height: '25vh',
					position: 'fixed',
					width: '100vw',
					bottom: 0,
					left: 0
				}}
			>
				<div
					style={{
						padding: '3vh 0',
						textAlign: 'center',
						fontSize: '1em',
						color: '#FFF',
						fontWeight: '600'
					}}
				>
					Informe o endereço de entrega.
				</div>
				<Row>
					<Col>
						<div 
							style={{
								display: 'flex',
								alignItems: 'center',
								backgroundColor: 'white',
								padding: '0.5em 0.3em',
								margin: '0 5vh',
								borderRadius: '12px'
							}}>
							<Input
							
								onChange={(e) => {
									setendereco(e.target.value)
								}}
								value={endereco.str}
								placeholder="Endereço de entrega"
								style={{ border: 'none', fontSize: '16px' }}
							/>
							<div style={{color: "#fff"}}>
								<DoneIcon
									onClick={() => {
										setaddresbase({
											str: endereco,
											fullresp: '',
											lat: '',
											long: '',
											cep: '',
										})
										history.push('/searchaddres')
									}}
									style={{
										borderRadius: '12px',
										backgroundColor: '#413131',
										padding: '0.4em',
										width: '40px',
										height: '40px',
										marginRight: '0.1em',
										color: '#fff'
									}} 
								/>
							</div>
						</div>
					</Col>
				</Row>
			</div>
		</div>
	)
}
export default withRouter(checkAddress)
