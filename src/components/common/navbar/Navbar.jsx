import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { data } from '../../../data/NavbarList'
export default function Navbar() {
  function createNavbarList() {
    return data.map(function (item) {
      return <Link to={item.link} key={item.id}><li>{item.listitem}</li></Link>
    })
  }
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className=''>
          <a href='/'>
            <img src='/Logo.svg' alt='GDSC Logo' />
          </a>
        </div>
        <div>
          <ul>
            {createNavbarList()}
          </ul>
        </div>
      </div>
    </div>
  )
}
