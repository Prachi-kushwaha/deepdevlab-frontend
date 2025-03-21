import Link from 'next/link'
import React from 'react'

const Profile:React.FC = () => {
  return (
    <div className='col-span-2 flex justify-end'>
      <Link href="/Login">Login/Registration</Link>
      {/* <Link href="">{username}</Link> */}
    </div>
  )
}

export default Profile