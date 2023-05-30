import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.scss"

const NavBar = () => {

  const [active, setactive] = useState(true)

  // useEffect(() => {
  //   first
  
  //   return () => {
  //     second
  //   }
  // }, [third])
  
  return (
    <div className={active? "navbar active" : "navbar"}>
        <div className="container">
            <div className="logo">
              {/* <Link to={"/"}> */}
                <span className='text'>fiverr</span>
                <span className='dot'>.</span>
              {/* </Link> */}
            </div>
            <div className="links">
                <span>Fiverr Business</span>
                <span>Explore</span>
                <span>English</span>
                <span>Sign In</span>
                <span>Become a Seller</span>
                <button>Join</button>
            </div>

        </div>
        <hr/>
        <div className="menu">
          <span>Test</span>
          <span>Test 2</span>
        </div>

    </div>
  )
  }

export default NavBar