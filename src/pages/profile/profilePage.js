import React, { Fragment, useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import HeaderHome from '../../pages/homepage/headerHome'
import { useStoreActions, useStore, useStoreState } from 'easy-peasy'
import jwt from 'jsonwebtoken'
import history from '../../util/history-util'
const ProfilePage = () => {
	const fulluser = useStoreState((state) => state.user)
	const setauthtoken = useStoreActions((actions) => actions.user.setauthtoken)
	useEffect(() => {
		try {
			let token = localStorage.getItem('authtoken')
			// console.log(token)
			// console.log(fulluser)
			let decoded = jwt.decode(fulluser.authtoken)
			// console.log(decoded)
			let decoded2 = jwt.decode(token)
			// console.log(decoded, decoded2)
			if (!decoded2) {
				history.push('/login')
			}
		} catch (e) {
			console.log(e, fulluser.authtoken, 'erro que foi pego')
		}
	}, [])
	return (
		<Fragment>
			<HeaderHome />

			<div
				style={{
					alignItems: 'center',
					justifyContent: 'center',
					display: 'flex',
					flexDirection: 'row',
					textAlign: 'center',
				}}
			>
				<h3 style={{ padding: '10vh 10vh 10vh 10vh', flex: 1 }}>
					Tela de perfil <br /> Pois usuário já está logado
				</h3>
			</div>
		</Fragment>
	)
}
export default withRouter(ProfilePage)
