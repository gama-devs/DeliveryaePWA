import React, { Component } from 'react'

import { Card } from 'reactstrap'

export class Sobre extends Component {
	constructor(props) {
		super(props)
		this.state = {
			profid: '',
			exludingid: '',
			modalexclusion: false,
			loadingprofissionals: true,
			profissionals: [],
			fowarding: null,
			redirect: false,
			redappoints: false,
		}
	}

	async componentDidMount() {
		console.log('assim tbm vai')

		// await this.loadPartnerIds()
	}
	render() {
		return (
			<div>
				<h1> asd</h1>
				<h1> asd</h1>
				<h1> asd</h1>
				<h1> asd</h1>
				<Card>sim como adivinhou</Card>
				<h1> asd</h1>
				<h1> asd</h1>
				<h1> asd</h1>
				<h1> asd</h1>
				<h1> asd</h1>
				<h1> asd</h1>
				<h1> asd</h1>
				<h1> asd</h1>
			</div>
		)
	}
}
