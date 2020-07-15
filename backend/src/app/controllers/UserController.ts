import { Request, Response } from 'express'
import EmailService from './../services/EmailService'

const users = [
  { name: 'Gui', email: 'gui@email.com' },
  { name: 'Vini', email: 'vi@email.com' },
]

class UserController {

  async index( request: Request, response: Response ) {

    return response.json( users )
  }

  async create( request: Request, response: Response ) {
    const emailService = new EmailService()
    emailService.sendMail( {
      to: { 
        name: 'Gui Silva', 
        email: 'gui@email.com' 
      },
      message: { 
        subject: 'Bem vindo ao sistema', 
        body: 'Seja bem vindo' 
      }
    } )
    return response.send()
  }
}

export default new UserController()