import logo from './logo.svg';
import './App.css';

import Home from './Home'
import Footer from './Footer';

 function Navbar (){

 return (
  <div>
    <nav>
      Navbar
    </nav>
  </div>
 )

 }


//  function Home (){
//   return (
//     <div>
//       <h2>I am from Home Components</h2>
//       <Nohome></Nohome>
//     </div>
//   )
//  }

 function Nohome(){
  return (
    <h3>Comming from NO Home Comoponetsd</h3>
  )
 }

function App() {
  return (
    <div>
      <h1>React App</h1>
      <Navbar></Navbar>
      <Home></Home>
      <Footer/>
      <Footer/>
    </div>
    
  );
}

export default App;
