import { Request, Response } from 'express'

const users = [
  { name: 'Gui', email: 'gui@email.com' },
  { name: 'Vini', email: 'vi@email.com' },
]

class UserController {

  async index( request: Request, response: Response ) {

    return response.json( users )
  }
}

export default new UserController()