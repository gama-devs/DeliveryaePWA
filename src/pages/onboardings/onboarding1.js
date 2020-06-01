import React, { useState } from 'react'
import { useStore, useAction } from 'easy-peasy'
import { Form, Field } from 'react-final-form'
import { withRouter } from 'react-router-dom'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import { InputField } from '../../components/input-field-component'
import { Lyrics } from '../../components/lyrics-component'
import { useThemeSelection } from '../../hooks/theme-hook'
import { useBtnStyles } from '../../styles/button-styles'
import { OnboardingCardStyles } from '../../styles/card-styles'
import { Row } from 'reactstrap'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'

export const Onboarding1 = (props) => {
	const { currentThemeSelection } = useThemeSelection()
	const { baseCard, title, imginside, title2, title1 } = OnboardingCardStyles()
	const { btnGroup, btnProx } = useBtnStyles()
	const [lhul, setlhul] = useState(0)

	return (
		<div
			style={{
				backgroundColor: `#FFFFFF`,
				height: '100vh',
				padding: '0.1px',
			}}
		>
			<div style={{ alignContent: 'center', textAlign: 'center' }}>
				<img className={imginside} src={props.img} />
			</div>

			<div className={title1}>{props.title1()}</div>
			<div className={title2}>{props.title2()}</div>
			<div className={btnGroup}>
				<div>
					<Button
						style={{ borderRadius: '12px', backgroundColor: '#FF805D' }}
						onClick={() => {
							props.func()
							console.log('sim como descobriu')
						}}
					>
						<div className={btnProx}>
							Próximo{' '}
							<KeyboardArrowRightIcon
								style={{ fontSize: '20px', marginBottom: '-6px' }}
							/>
						</div>
					</Button>
				</div>
			</div>

			<br />
		</div>
	)
}
