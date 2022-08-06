// import { click } from '@testing-library/user-event/dist/click';
import logo from './logo.png';


import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  // NavBtn,
  // NavBtnLink,
} from './index';
// import { startTransition } from 'react';

// function Navbar() {

//   return (
//     <>
//     <nav className="navbar">
      <img src={logo} alt="error" className="logo-1" />
//       <nav  className="all buttons"> All</nav>
//       <nav  className="skin_care buttons">Skin Care</nav>
//       <nav  className="hair_care buttons" >Hair care</nav>
//       <nav  className="Makeover buttons" >Makeover</nav>
//       <nav  className="Offers buttons" >Offers</nav>
//     </nav>
//     </>
//   )
// }

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/All' activeStyle>
			All
		</NavLink>
		<NavLink to='/skin_care' activeStyle>
      Skin
		</NavLink>
		{/* <NavLink to='/hair_care' activeStyle>
      Hair care
		</NavLink>
		<NavLink to='/Makeover' activeStyle>
      Makeover
		</NavLink>
		<NavLink to='/Offers' activeStyle>
      Offers
		</NavLink> */}
		{/* <NavLink to='/sign-up' activeStyle>
			Sign Up
		</NavLink> */}
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		{/* <NavBtn>
		<NavBtnLink to='/signin'>Sign In</NavBtnLink>
		</NavBtn> */}
	</Nav>
	</>
);
};


export default Navbar;