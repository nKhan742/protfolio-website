import React from 'react'
import { FiLinkedin, FiFacebook, FiInstagram } from 'react-icons/fi'
// import { FaBehance } from 'react-icons/fa'
import "./FollowMe.scss";

const FollowMe = () => {
  return (
    <div className='position-fixed follow_me_icons primary3'>Follow Me &nbsp;&nbsp;&nbsp;-&nbsp; <FiLinkedin className='mx-2'/> <FiFacebook className='mx-2'/> <FiInstagram className='mx-2'/></div>
  )
}

export default FollowMe

