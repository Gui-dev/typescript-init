import { Router } from 'express'

import User from './../app/controllers/UserController'

const routes = Router()

routes.get( '/', User.index )

export default routes