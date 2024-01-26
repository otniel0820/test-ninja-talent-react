import React from 'react'
import { Users } from '../interfaces/usersInterfaces'

const ListUsers = ({results}:Users) => {


  return (
    <div>
      {results?.map((user, index)=>{
        return(
            <div key={index}>
                <p>Nombre:{user.name?.first}</p>
                <p>Genero:{user.gender}</p>
            </div>
        )
      })}
    </div>
  )
}

export default ListUsers
