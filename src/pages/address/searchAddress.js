import React, { useEffect, useState } from 'react'
import { useStore, useAction } from 'easy-peasy'
import { Form, Field } from 'react-final-form'
import { withRouter } from 'react-router-dom'
import { Row, Col } from 'reactstrap'

const searchAddress = () => {
	useEffect(() => {
		console.log('address')
	}, [])
	const fulluser = useStore((state) => state.user)
	return (
		<div>
			<div
				style={{
					backgroundColor: '#F8F6F8',
					paddingBottom: '20vh',
				}}
			>
				<Row style={{ textAlign: 'center' }}>
					<Col>butozao</Col>
					<Col>sim como adivinhou</Col>
				</Row>
			</div>
			<div
				style={{
					backgroundColor: '#000',
					borderRadius: '32px',
					marginTop: '-5vh',
					height: '90vh',
				}}
			></div>
		</div>
	)
}

export default withRouter(searchAddress)
