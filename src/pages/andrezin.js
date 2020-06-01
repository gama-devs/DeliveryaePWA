import React, { Component, useState } from 'react'

import { Card } from 'reactstrap'
import { Onboarding1 } from './onboardings/onboarding1'
import pizza from '../assets/pizzza.png'
import entregador from '../assets/entregadorpizza.svg'
import mulher from '../assets/mulhercelular.svg'
import { Button } from 'reactstrap'

export const Andrezin = () => {
	const [index, setindex] = useState(0)

	const maluco = () => {
		setindex((prev) => {
			return prev + 1
		})
	}
	return (
		<div>
			<Button
				onClick={() => {
					maluco()
				}}
			>
				sim
			</Button>
			{index}
			<Onboarding1
				title1={() => {
					return (
						<div>
							Sua pizza favorita <br /> onde sempre deveria estar, na palma da
							sua mão.
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
			<Onboarding1
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
			<Onboarding1
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
		</div>
	)
}
