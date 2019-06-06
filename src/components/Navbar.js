import React from "react"
import {Menu} from "semantic-ui-react"
import {Link} from "react-router-dom"

const Navbar = () =>(
  <Menu>
    <Link to="/">
      <Menu.Item>
        Flash Cards
      </Menu.Item>
    </Link>

  </Menu>
)
export default Navbar