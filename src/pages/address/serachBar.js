import React, { useEffect, useState } from 'react'
import { useStore, useStoreActions, useStoreState } from 'easy-peasy'
import { Form, Field } from 'react-final-form'
import { withRouter } from 'react-router-dom'
import { Row, Col, Button, Input } from 'reactstrap'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import SearchIcon from '@material-ui/icons/Search'
import IconButton from '@material-ui/core/IconButton'
import history from '../../util/history-util'
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined'
import motoca from '../../assets/motoca.svg'

const SearchBar = (props) => {
	const fulluser = useStoreState((state) => state.user)
	const setaddresbase = useStoreActions((actions) => actions.user.setaddress)
	let [text, settext] = useState(fulluser.address.str)
	const [selected, setselected] = useState('')
	useEffect(() => {
		let tpmfunc = async () => {
			console.log('o totalmudou')
			await loadAdresses(fulluser.address.str)
		}
		tpmfunc()
	}, [fulluser.address.str])

	const loadAdresses = async (addresstring) => {
		console.log('sim, eu chamei api com isso' + addresstring)
	}
	return (
		<div>
			<div
				style={{
					backgroundColor: props.success ? '#1BD09A' : '#F8F6F8',
					paddingBottom: props.success ? '10vh' : '10vh',
					paddingTop: '5vh',
					maxWidth: '100%',
				}}
			>
				<div style={{
					display: 'flex',
					alignItems: 'center',
					margin: '0 12px',
					justifyContent: 'space-between'
					
				}}>
					<div>
						<IconButton
							onClick={() => {
								history.push(props.backroute())
							}}
							style={{
								backgroundColor: '#FFFF',
								borderRadius: '8px',
								height: '5.5vh',
								width: '5.5vh',
								border: 'none',
								boxShadow:'0 0 0'
							}}
						>
							<ChevronLeftIcon style={{ 
								color: '#FF805D',
								fontSize: '1.3em'
						 	}} />
						</IconButton>
					</div>
					<div style={{width: '85%'}}>
						{!props.success ? (
							<div style={{
								display: 'flex',
								alignItems: 'center',
								backgroundColor: '#fff',
								borderRadius: '12px'
							}}>
								<SearchIcon
									style={{
										marginLeft: '1vh',
										color: '#FF805D',
										fontSize: '30px'
									}}
								/>
								<Input
									onChange={(e) => {
										settext(e.target.value)
										let cp = fulluser.address
										cp.str = e.target.value
										setaddresbase(cp)
									}}
									value={fulluser.address.str}
									style={{
										height: '5.5vh',
										border: 'none',
										borderRadius: '12px'
									}}
								></Input>
							</div>
						) : null}
					</div>
				</div>
				{props.success ? (
					<Row
						style={{
							display: 'flex',
							justifyContent: 'center',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<div
							className="my-1"
							style={{
								borderRadius: '12px',
								height: '8vh',
								width: '8vh',
								backgroundColor: '#FFF',
							}}
						>
							<img
								style={{ marginLeft: '2vw', marginTop: '1vh' }}
								src={motoca}
							></img>
						</div>
						<h3 style={{ fontSize: '15px', fontWeight: 'bold', color: '#fff' }}>
							Maravilha!
						</h3>
						<h3 style={{ fontSize: '15px', fontWeight: 'bold', color: '#fff' }}>
							Nós atendemos sua região.
						</h3>
					</Row>
				) : null}
			</div>
		</div>
	)
}
export default SearchBar
