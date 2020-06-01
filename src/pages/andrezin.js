import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { Onboarding1 } from './onboardings/onboarding1'
import pizza from '../assets/pizzza.png'
import entregador from '../assets/entregadorpizza.svg'
import mulher from '../assets/mulhercelular.svg'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import history from '../util/history-util'
const Andrezin = () => {
	const [index, setindex] = useState(0)
	const [xbutton, setx] = useState(false)

	useEffect(() => {}, [xbutton])

	const maluco = () => {
		setx((prev) => {
			return !prev
		})
		setindex((prev) => {
			let i = prev + 1
			if (i > 2) {
				history.push('/checkaddres')
			}
			return i
		})
	}
	return (
		<div>
			{/* <Button
				onClick={() => {
					maluco()
				}}
			>
				sim
			</Button> */}
			{index === 0 && (
				<Onboarding1
					btntext={'Próximo'}
					btnicon={() => {
						return (
							<KeyboardArrowRightIcon
								style={{ fontSize: '20px', marginBottom: '-6px' }}
							/>
						)
					}}
					title1={() => {
						return (
							<div>
								Sua pizza favorita <br /> onde sempre deveria estar,
								<br /> na palma da sua mão.
							</div>
						)
					}}
					title2={() => {
						return (
							<div>
								Um aplicativo para você aproveitar <br />
								ao máximo o sabor e qualidade <br /> das nossas pizzas.
							</div>
						)
					}}
					img={pizza}
					func={maluco}
				/>
			)}
			{index === 1 && (
				<Onboarding1
					btntext={'Próximo'}
					btnicon={() => {
						return (
							<KeyboardArrowRightIcon
								style={{ fontSize: '20px', marginBottom: '-6px' }}
							/>
						)
					}}
					title1={() => {
						return (
							<div>
								Receba nossa pizza quentinha <br />
								no conforto da sua casa.
							</div>
						)
					}}
					title2={() => {
						return (
							<div>
								Escolha quando e onde quer
								<br /> receber nossa pizza e aproveite
								<br /> esse momento.
							</div>
						)
					}}
					img={entregador}
					func={maluco}
				/>
			)}
			{index === 2 && (
				<Onboarding1
					btntext={'Ir para pizza'}
					btnicon={() => {
						return (
							<InsertEmoticonIcon
								style={{
									fontSize: '20px',
									marginBottom: '-6px',
									marginLeft: '5px',
								}}
							/>
						)
					}}
					title1={() => {
						return (
							<div>
								Compre e ganhe pontos
								<br /> para trocar por produtos.
							</div>
						)
					}}
					title2={() => {
						return (
							<div>
								Um aplicativo para você aproveitar <br />
								ao máximo o sabor e qualidade
								<br /> das nossas pizzas.
							</div>
						)
					}}
					img={mulher}
					func={maluco}
				/>
			)}
		</div>
	)
}
export default withRouter(Andrezin)
