import { Router } from 'express'

import User from './../app/controllers/UserController'

const routes = Router()

routes.get( '/users', User.index )

routes.post( '/users', User.create )

export default routes