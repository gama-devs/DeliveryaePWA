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
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { BrowserView, MobileView } from "react-device-detect";

const itemChoosingHome = (props) => {
	const saveonthebag = useStoreActions((actions) => actions.user.saveonthebag)
	const currentitem = useStoreState((state) => {
		return state.user.currentitem
	})

	const [itemnow, updateitem] = useState({ ...currentitem, qtd: 1 })
	const [obs, setobs] = useState('')
	const [insersuccess, setsuccess] = useState(false)
	const [somethingwrong, setsomethingwrong] = useState(false)

	let erropassageiro = async () => {
		await setsomethingwrong(true)
		await setTimeout(() => {
			setsomethingwrong(false)
		}, 3000)
		console.log('people die')
	}

	const SetCurrentItem = useStoreActions(
		(actions) => actions.user.setcurrentitem
	)
	let insertonbag = async () => {
		await saveonthebag(itemnow)
	}

	useEffect(() => {
		!currentitem.id && history.push('/home')
	}, [])
	return (
		<div
			style={{ height: 'fit-content' }}
			onClick={() => {
				// console.log(itemnow.qtd)
			}}
		>
			<div
				style={{
					backgroundColor: '#E5E5E5',
					display: 'flex',
					alignItems: 'center',
					height: '15%',
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
						borderRadius: '1em',
						marginLeft: '3vh',
						height: '12vw',
						width: '12vw',
					}}
				>
					<ChevronLeftIcon
						style={{ color: '#FF805D', height: '1em', width: 'auto' }}
					/>
				</Button>
				<span
					style={{
						textAlign: 'center',
						fontSize: '20px',
						fontWeight: 'bold',
						color: '#FF805D',
						padding: '5vh 0',
						flex: '1',
						marginRight: '15vw',
					}}
				>{itemnow.name}</span>
			</div>
			<div style={{ 
					display: 'flex',
					backgroundColor: '#E5E5E5',
					padding: '0 3vw 25%',
					height: '20%' 
			}}>
				<img
					src={'http://50.16.146.1/storage/' + itemnow.image}
					style={{
						borderRadius: '1em',
						height: '7em',
						width: '7em',
						marginRight: '1em'
					}}
				/>
				<div style={{ flex: 2, display: 'flex', flexDirection: 'column' }}>
					<div><span style={{fontSize: '1.25em', fontWeight: 600}}>{'R$' + (itemnow.price / 100) * itemnow.qtd}</span> A partir</div>
					<div>{itemnow.description}</div>
					<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
						<span
							style={{fontSize: '2em', color: '#FF5755'}}
							onClick={async () => {
								updateitem((prev) => {
									console.log(prev)
									if (prev.qtd > 1) {
										return { ...prev, qtd: prev.qtd - 1 }
									} else {
										return prev
									}
								})
							}}
						>
							-
						</span>
						<span style={{fontSize: '1.5em', margin: '0 3vw'}}>{itemnow.qtd}</span>
						<span
							style={{fontSize: '2em', color: '#FF5755'}}
							onClick={async () => {
								updateitem((prev) => {
									console.log(prev)
									return { ...prev, qtd: prev.qtd + 1 }
								})
							}}
						>
							+
						</span>
					</div>
				</div>
			</div>
			<div style={{
					borderRadius: '32px',
					backgroundColor: '#fff',
					overflow: 'scroll',
					marginTop: '-5%',
					position: 'fixed',
					width: '100%',
					padding: '5vh 3vw 0',
					bottom: 0,
					left: 0,
					height: '65%'
			}}>	
				<div style={{ display: 'flex', flexDirection: 'column' }}>
					<span style={{fontWeight: 600, margin: '1em 0'}}>Observação</span>
					<Input
						type="textarea"
						onChange={(e) => {
							setobs(e.target.value)
						}}
						style={{
							border: 'none',
							background: '#F9F9F9',
							borderRadius: '1em'
						}}
						placeholder={'Gostaria de inserir alguma informação referente ao pedido?'}
					/>
				</div>
				{somethingwrong && (
					<div
						onClick={() => {
							console.log('sim')
							setsuccess(true)
							setTimeout(() => {
								history.push('/home')
							}, 2000)
							// insertonbag()
						}}
						style={{
							borderRadius: '32px 32px 0px 0px',
							backgroundColor: `#FF5755`,
							height: '15vh',
							flex: 1,
							width: '100vw',
							bottom: '0px',
							position: 'fixed',
							justifyContent: 'center',
							alignContent: 'center',
							display: 'flex',
						}}
					>
						<div style={{ color: '#FFF' }}>Erro</div>
					</div>
				)}
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
						alignItems: 'center',
						fontWeight: 600,
						fontSize: '1.25em',
						color: '#FFFFFF'
					}}
				>
					<span>Pedido adicionado com sucesso!</span>
				</div>
			) : (
				<div
					onClick={() => {
						console.log('sim')
						setsuccess(true)
						setTimeout(() => {
							history.push('/home')
						}, 2000)
						insertonbag()
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
						alignItems: 'center',
						fontWeight: 600,
						fontSize: '1.25em',
						color: '#FFFFFF'
					}}
				>
					<span>
						{'R$' +
							(itemnow.price / 100) * itemnow.qtd +
							' ● Adicionar a sacola'}
					</span>
				</div>
			)}
		</div>
	)
}

export default withRouter(itemChoosingHome)
