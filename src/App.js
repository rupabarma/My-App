// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import All from './components/All';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SkinCare from './components/skin_care';
import HairCare from './components/hair_care';
import Makeup from './components/makeup';


// function App() {
//   return (
//     <div className="App">
//       <Navbar/>
//       <All/>
//     </div>
//   );
// }
function App() {
  return (
    <>
    
    <Router>
      <Navbar />
      <Routes>
        <Route  path='/All' exact component={All} />
        <Route path='/skin_care' component={SkinCare}/>
        <Route path='/hair_care' component={HairCare} />
        <Route path='/makeup' component={Makeup} />
        {/* <Route path='/team' component={Teams} /> */}
        {/* <Route path='/blogs' component={Blogs} />
        <Route path='/sign-up' component={SignUp} /> */}
      </Routes>
    </Router>
    <All/>
    </>
  );
}

export default App;
