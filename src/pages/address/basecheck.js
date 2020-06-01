import React from 'react'
import { withRouter } from 'react-router-dom'

import { OnboardingCardStyles } from '../../styles/card-styles'

import { Button } from 'reactstrap'
import imggps from '../../assets/img-gps.png'
import imgLogo from '../../assets/logo.png'
const BaseCheck = () => {
	const { imgCheckAddress, logoCheckAddress, title1 } = OnboardingCardStyles()

	return (
		<div>
			<div style={{ alignContent: 'center', textAlign: 'center' }}>
				<img alt="Logo" className={logoCheckAddress} src={imgLogo} />
			</div>
			<div style={{ alignContent: 'center', textAlign: 'center' }}>
				<img alt="Celular com GPS" className={imgCheckAddress} src={imggps} />
			</div>

			<div className={title1}>
				Precisamos verificar
				<br />
				se atendemos sua região
			</div>
		</div>
	)
}
export default withRouter(BaseCheck)
