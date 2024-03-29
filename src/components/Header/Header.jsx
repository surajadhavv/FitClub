import React, { useState } from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import bars from '../../assets/bars.png'
import { Link } from 'react-scroll'

const Header = () => {

  const mobile = window.innerWidth <= 768 ? true : false; 
  const [menuOpened, setmenuOpened] = useState(false)
  return (
    <div className="header">
        <img src={Logo} alt="App logo" className='logo'/>

        {menuOpened === false && mobile === true ?(
          <div style={{backgroundColor:'var(--appColor)',padding:'0.5rem',borderRadius:'5px'}}
          onClick={()=> setmenuOpened(true)}
          >
            <img src={bars} alt="" style={{width:'1.5rem',height:'1.5rem'}}/>
          </div>
        ):(
          <ul className='header-menu'>
            <li>
              <Link
              onClick={()=> setmenuOpened(false)}
              to='home'
              span={true}
              smooth={true}
              >Home</Link>
            </li>
            <li>
            <Link
              onClick={()=> setmenuOpened(false)}
              to='programs'
              span={true}
              smooth={true}
              >Programs</Link>
            </li>
            <li>
            <Link
              onClick={()=> setmenuOpened(false)}
              to='reasons'
              span={true}
              smooth={true}
              >Why us</Link>
            </li>
            <li>
            <Link
              onClick={()=> setmenuOpened(false)}
              to='plans'
              span={true}
              smooth={true}
              >plans</Link>
            </li>
            <li>
            <Link
              onClick={()=> setmenuOpened(false)}
              to='testimonials'
              span={true}
              smooth={true}
              >Testimonials</Link>
            </li>
        </ul>
        )}

        

    </div>
  )
}

export default Header