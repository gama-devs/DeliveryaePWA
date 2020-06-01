import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import BaseCheck from './basecheck'
import { Field } from 'react-final-form'
import { InputField } from '../../components/input-field-component'
import { OnboardingCardStyles } from '../../styles/card-styles'

const checkAddress = () => {
	const { baseCard, title1 } = OnboardingCardStyles()

	const [boleano, setbol] = useState(false)
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
					height: '30vh',
				}}
			>
				<div
					style={{
						padding: '5vh 0vh 10vh 0vh',
						textAlign: 'center',
						fontSize: '16px',
						color: '#FFF',
					}}
				>
					Iforme o endereço de entrega
				</div>
				<div>
					<form
						style={{ borderRadius: '10px' }}
						onSubmit={() => {
							console.log('sim')
						}}
					>
						<Field
							style={{ paddingbackgroundColor: '#FFFF', borderRadius: '10px' }}
							component={InputField}
							placeholder="Endereço de Entrega"
							name="Endereço de Entrega"
							type="text"
						/>
					</form>
				</div>
			</div>
		</div>
	)
}
export default withRouter(checkAddress)
