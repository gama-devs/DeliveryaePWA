import { settingsModel } from './settings-model'
import { musicModel } from './music-model'
import { authModel } from './auth-model'
import { userModel } from './user-model'

export const model = {
	...settingsModel,
	...userModel,
}
