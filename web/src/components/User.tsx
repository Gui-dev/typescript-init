import React from 'react'

interface IUser {
  name: string,
  email: string,
}

interface IUserProps {
  user: IUser
}

const User: React.FC<IUserProps> = ( { user } ) => {
  return (
    <div>
      <p><strong>Nome: </strong>{ user.name }</p> 
      <p><strong>Email: </strong>{ user.email }</p> 
      <br/>
    </div>
  )
}

export default User