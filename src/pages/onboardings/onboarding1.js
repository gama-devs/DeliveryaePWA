import React from 'react'
import Button from '@material-ui/core/Button'
import { useBtnStyles } from '../../styles/button-styles'
import { OnboardingCardStyles } from '../../styles/card-styles'
import CloseIcon from '@material-ui/icons/Close'
import history from '../../util/history-util'
import {
	BrowserView,
	MobileView,
	isBrowser,
	isMobile,
} from 'react-device-detect'

export const Onboarding1 = (props) => {
	const { imginside, title2, title1 } = OnboardingCardStyles()
	const { btnGroup, btnProx } = useBtnStyles()

	return (
		<div
			style={{
				backgroundColor: `#FFFFFF`,
				height: '100vh',
				padding: '0.1px',
			}}
		>
			<div
				style={{
					cursor: 'pointer',
					alignContent: 'center',
					textAlign: 'center',
				}}
			>
				<CloseIcon
					onClick={() => {
						history.push('/checkaddres')
					}}
					style={{ marginRight: '40vh', marginTop: '10%' }}
				/>
			</div>
			<div style={{ alignContent: 'center', textAlign: 'center' }}>
				<img
					alt="Imagem dentro do card"
					className={imginside}
					src={props.img}
				/>
			</div>

			<div className={title1}>{props.title1()}</div>
			<div className={title2}>{props.title2()}</div>
			<div className={btnGroup}>
				<div>
					<Button
						style={{ borderRadius: '12px', backgroundColor: '#FF805D' }}
						onClick={() => {
							props.func()
						}}
					>
						<div className={btnProx}>
							{props.btntext}
							{props.btnicon()}
						</div>
					</Button>
				</div>
			</div>

			<br />
		</div>
	)
}
