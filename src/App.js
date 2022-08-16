// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import All from './pages';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import SkinCare from './pages/skin_care';
import HairCare from './pages/hair_care';
import Makeup from './pages/makeup';


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
      <Switch>
        <Route  path='/'  exact component={All} />
        <Route path='/skin_care'  component={SkinCare}/>
        <Route path='/hair_care'  component={HairCare} />
        <Route path='/makeup'  component={Makeup} />
        {/* <Route path='/team' component={Teams} /> */}
        {/* <Route path='/blogs' component={Blogs} />
        <Route path='/sign-up' component={SignUp} /> */}
      </Switch>
    </Router>
    
    </>
  );
}

export default App;
