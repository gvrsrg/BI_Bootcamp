import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <header>
        <nav>

            <Link to="/">Home</Link>{" "}
            <Link to="/about">About</Link>{" "}
            <Link to="/shop">Shop</Link>

        </nav>
    </header>
  )
}
