import { apiRoutes } from 'constants/apiConstants'
import { apiRequest } from './Api'

export const singout = async () => apiRequest<undefined, void>('post', apiRoutes.SIGNOUT)