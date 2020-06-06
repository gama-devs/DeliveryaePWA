import React, { useEffect, useState } from 'react'
import { useStore, useStoreActions } from 'easy-peasy'
import { Form, Field } from 'react-final-form'
import { withRouter } from 'react-router-dom'
import { Row, Col, Button, Input } from 'reactstrap'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import SearchIcon from '@material-ui/icons/Search'
import history from '../../util/history-util'
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined'

const LoadedAddresses = (props) => {
	const [selected, setselected] = useState('')
	const fulluser = useStore((state) => state.user)
	const setaddresbase = useStoreActions((state) => state.user.setaddress)
	return (
		<div>
			{props.loadeds.map((s, index) => {
				return (
					<div key={index} className="py-2">
						<div
							onClick={() => {
								props.setselected('bruxo')
								setaddresbase(s)
							}}
							className="mx-3 my-3"
							style={{ cursor: 'pointer', textAlign: 'center' }}
						>
							<Row xs="12">
								<Col xs="2">
									<RoomOutlinedIcon
										style={{ marginLeft: '1vh', marginTop: '1.5vh' }}
									/>
								</Col>
								<Col style={{ textAlign: 'left' }} xs="10">
									<Row style={{ fontSize: '13px', fontWeight: 'bolder' }}>
										<Col>{s.str}</Col>
									</Row>
									<Row
										className={'text-muted'}
										style={{ fontSize: '12px', fontWeight: 'lighter' }}
									>
										<Col>{s.fullresp}</Col>
									</Row>
								</Col>
							</Row>
						</div>
					</div>
				)
			})}
		</div>
	)
}
export default LoadedAddresses
