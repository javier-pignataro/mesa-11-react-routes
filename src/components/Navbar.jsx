import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {routes} from '../utils/routes.js'

const Navbar = () => {
      return (
            <div>
                  {/* Aqui deberan agregar los Links */}
                  <Link to={routes.home}><h3>Home</h3></Link>
                  <Link to={routes.contact}><h3>Contact</h3></Link>
                  {/* <Link to={routes.detail}><h3>Detail</h3></Link> */}
            </div>
      )
}

export default Navbar
