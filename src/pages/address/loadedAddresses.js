import React, { useEffect, useState } from 'react'
import { useStore, useAction } from 'easy-peasy'
import { Form, Field } from 'react-final-form'
import { withRouter } from 'react-router-dom'
import { Row, Col, Button, Input } from 'reactstrap'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import SearchIcon from '@material-ui/icons/Search'
import history from '../../util/history-util'
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined'

const LoadedAddresses = (props) => {
	return (
		<div>
			{props.loadeds.map((s) => {
				return (
					<div className="mx-3 my-3" style={{ textAlign: 'center' }}>
						<Row xs="12">
							<Col xs="2">
								<RoomOutlinedIcon
									style={{ marginLeft: '1vh', marginTop: '1.5vh' }}
								/>
							</Col>
							<Col style={{ textAlign: 'left' }} xs="10">
								<Row style={{ fontSize: '13px', fontWeight: 'bolder' }}>
									<Col>Casa do Kratos no GW4</Col>
								</Row>
								<Row
									className={'text-muted'}
									style={{ fontSize: '12px', fontWeight: 'lighter' }}
								>
									<Col>Ao lado da Casa da bruxa, Midgard</Col>
								</Row>
							</Col>
						</Row>
					</div>
				)
			})}
		</div>
	)
}
export default LoadedAddresses
