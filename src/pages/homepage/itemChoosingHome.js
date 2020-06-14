import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import HeaderHome from './headerHome'
import CarrousselBannerHome from './carrousselBannerHome'
import SectionHome from './sectionHome'
import pizzalogo from '../../assets/logo.png'
import SearchIcon from '@material-ui/icons/Search'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline'
import Api from '../../services/Api'
import history from '../../util/history-util'
import { Button, Input } from 'reactstrap'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import { useStore, useStoreActions, useStoreState } from 'easy-peasy'

const itemChoosingHome = (props) => {
	const saveonthebag = useStoreActions((actions) => actions.user.saveonthebag)
	const currentitem = useStoreState((state) => {
		return state.user.currentitem
	})
	const [itemnow, updateitem] = useState(currentitem)
	const [obs, setobs] = useState('')
	const [insersuccess, setsuccess] = useState(false)

	const SetCurrentItem = useStoreActions(
		(actions) => actions.user.setcurrentitem
	)
	let insertonbag = async () => {
		await saveonthebag(itemnow)
		await history.push('/home')
	}

	useEffect(() => {
		!currentitem.id && history.push('/home')
	}, [])
	return (
		<div
			style={{ height: '100vh' }}
			onClick={() => {
				console.log(itemnow)
			}}
		>
			<div
				style={{
					backgroundColor: '#E5E5E5',
					display: 'flex',
					alignItems: 'center',
					height: '20vh',
					paddingBottom: '5vh',
				}}
			>
				<Button
					onClick={() => {
						history.push('/home')
					}}
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						textAlign: 'center',
						borderStyle: 'none',
						boxShadow: '0 0 0',
						backgroundColor: '#FFF',
						borderRadius: '12px',
						marginLeft: '3vh',
						height: '5vh',
						width: '5vh',
					}}
				>
					<ChevronLeftIcon
						style={{ color: '#FF805D', height: '3vh', width: 'auto' }}
					/>
				</Button>
				<div
					style={{
						textAlign: 'center',
						fontSize: '20px',
						fontWeight: 'bold',
						color: '#FF805D',
						padding: '5vh 0',
						flex: '1',
						marginRight: '8vh',
					}}
				>
					{itemnow.name}
				</div>
			</div>
			<div style={{ display: 'flex' }}>
				<div style={{ flex: 1 }}>
					<div
						style={{
							borderStyle: 'solid',
							borderRadius: '12px',
							height: '10vh',
							width: '10vh',
						}}
					>
						IMAGEM PRODUTO
					</div>
				</div>
				<div style={{ flex: 2, display: 'flex', flexDirection: 'column' }}>
					<div>{'R$' + itemnow.price / 100 + ' A partir'}</div>
					<div>{itemnow.description}</div>
				</div>
			</div>
			<div style={{ height: '30vh' }}>
				ESSA DIV AQUI NO MEIO É PARA OS LANCES AÍ DE CATEGORIA, OPÇOES DE CADA
				PRODUTO
			</div>

			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<div>Observação</div>
				<div>
					<Input placeholder={'Observação'} />
				</div>
			</div>
			{insersuccess ? (
				<div
					onClick={() => {
						console.log('sim')
						insertonbag()
					}}
					style={{
						borderRadius: '32px 32px 0px 0px',
						backgroundColor: `#1BD09A`,
						height: '10vh',
						flex: 1,
						width: '100vw',
						bottom: '0px',
						position: 'fixed',
						justifyContent: 'center',
						alignContent: 'center',
						display: 'flex',
					}}
				>
					<div style={{ marginTop: '2vh' }}>
						Predido adicionado com sucesso!
					</div>
				</div>
			) : (
				<div
					onClick={() => {
						console.log('sim')
						setsuccess(true)
						// insertonbag()
					}}
					style={{
						borderRadius: '32px 32px 0px 0px',
						backgroundColor: `#FF805D`,
						height: '10vh',
						flex: 1,
						width: '100vw',
						bottom: '0px',
						position: 'fixed',
						justifyContent: 'center',
						alignContent: 'center',
						display: 'flex',
					}}
				>
					<div style={{ marginTop: '2vh' }}>
						{'R$' + itemnow.price / 100 + '* Adicionar a sacola'}
					</div>
				</div>
			)}
		</div>
	)
}

export default withRouter(itemChoosingHome)
