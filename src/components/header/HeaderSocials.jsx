import React from 'react'
import {BsLinkedin, BsGithub, BsInstagram} from 'react-icons/bs'

function HeaderSocials() {
  return (
    <div className="header__socials">
        <a href="https://linkedin.com" target='blank'><BsLinkedin/></a>
        <a href="https://gihub.com" target='blank'><BsGithub/></a>
        <a href="http://instagram.com" target="_blank"><BsInstagram/></a>

    </div>
  )
}

export default HeaderSocials