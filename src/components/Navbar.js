import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (<>
    <div>
      <nav id="navbar-example2" className="navbar navbar-light bg-light px-3">
        <Link className="navbar-brand" to="/" style={{ color: "#09005d", fontWeight: "600" }}>SearchUni</Link>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#select-countries">Search University</a>
          </li>
        </ul>
      </nav>


    </div>
  </>)
}

export default Navbar
