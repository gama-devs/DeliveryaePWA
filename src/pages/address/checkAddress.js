import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import BaseCheck from './basecheck'
import DoneIcon from '@material-ui/icons/Done'
import { Field } from 'react-final-form'
import { useAction } from 'easy-peasy'
import { InputField } from '../../components/input-field-component'
import { OnboardingCardStyles } from '../../styles/card-styles'
import { Input, Row, Col } from 'reactstrap'
import history from '../../util/history-util'

const checkAddress = () => {
	const setaddresbase = useAction((state) => state.user.setaddress)
	const { baseCard, title1 } = OnboardingCardStyles()

	const [endereco, setendereco] = useState('')

	return (
		<div
			style={{
				backgroundColor: `#FFFFFF`,
			}}
		>
			<BaseCheck />
			<div
				style={{
					marginTop: '20vh',
					borderRadius: '20px 20px 0px 0px',
					backgroundColor: `#FF805D`,
					height: '25vh',
				}}
			>
				<div
					style={{
						padding: '5vh 0vh 6vh 0vh',
						textAlign: 'center',
						fontSize: '16px',
						color: '#FFF',
					}}
				>
					Informe o endereço de entrega
				</div>
				<Row style={{ textAlign: 'center', alignContent: 'center' }}>
					<Input
						onChange={(e) => {
							setendereco(e.target.value)
						}}
						value={endereco}
						placeholder="Endereço de entrega"
						style={{ padding: '1.1vh 3vh 1.1vh 3vh' }}
					/>
					<div
						onClick={() => {
							setaddresbase(endereco)
							history.push('/searchaddres')
						}}
						style={{
							cursor: 'pointer',
							position: 'absolute',
							borderRadius: '5px',
							backgroundColor: '#000',
							height: '4.5vh',
							width: '4.5vh',
							margin: '-5vh -100px 3vh 35vh',
							color: '#fff',
						}}
					>
						<text>
							<DoneIcon style={{ marginBottom: '-2vh' }} />
						</text>
					</div>
				</Row>
			</div>
		</div>
	)
}
export default withRouter(checkAddress)