"use client"

import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../utils/appStore';

const Profile:React.FC = () => {
  const profileData = useSelector((store:RootState )=> store.user)
  return (
    <div className='col-span-2 flex justify-end'>
      {/* <Link href="/Login">Login/Registration</Link> */}
      {profileData?.user?.username?<Link href="/profile">{profileData?.user?.username}</Link>:<Link href="/Login">Login/Registration</Link>}
    
    </div>
  )
}

export default Profile