import React from 'react'
import {useParams} from 'react-router-dom'
function User() {
    const {userid} = useParams()
  return (
    <div className='bg-orange-500 text-black text-3xl tex'>User :{userid}</div>
  )
}

export default User