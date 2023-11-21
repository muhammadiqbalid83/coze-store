import React from 'react'
import { NavLink } from 'react-router-dom'

interface Link {
  id: number
  url: string
  text: string
}

const links: Link[] = [
  { id: 1, url: '/', text: 'home' },
  { id: 2, url: 'about', text: 'about' },
  { id: 3, url: 'products', text: 'products' },
  { id: 4, url: 'cart', text: 'cart' },
  { id: 5, url: 'checkout', text: 'checkout' },
  { id: 6, url: 'orders', text: 'orders' },
]

const Navlinks: React.FC = () => {
  return (
    <>
      {links.map((link: Link) => {
        const { id, url, text } = link
        return (
          <li key={id} className="capitalize">
            <NavLink to={url}>{text}</NavLink>
          </li>
        )
      })}
    </>
  )
}

export default Navlinks
