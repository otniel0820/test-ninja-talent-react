import { Result } from '@/interfaces/usersInterfaces'
import Image from 'next/image'
import React from 'react'
import { Button } from './Button'

type Props = {
    details: Result
    onCloseModal: ()=> void,
}
const CardUser = ({details, onCloseModal}:Props) => {
  return (
    <div className='flex flex-col items-center gap-5 p-5'>
      <Image
              src={`${details.picture?.medium}`}
              width={100}
              height={100}
              alt="imagen"
              className="rounded-full"
            />
            <div className='flex gap-2'>
                <p>{details.name?.title}</p>
                <p>{details.name?.first}</p>
                <p>{details.name?.last}</p>
            </div>
            <p>Genero: {details.gender}</p>
            <p>Email: {details.email}</p>
            <p>Phone: {details.phone}</p>
            <p>Ciudad: {details.location?.city}</p>
            <p>Pais: {details.location?.country}</p>
            <Button variant={'primary'} onClick={onCloseModal}>Cerrar</Button>
    </div>
  )
}

export default CardUser
