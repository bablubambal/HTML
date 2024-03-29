import logo from './logo.svg';
import './App.css';

function App() {
  let name = 'RAM KUmar'

  // style object 
 let mystyle = {
  color:'greeen',
  fontSize: "60px",
  fontFamily: "Cursive"
 }
  // let myele = <h1>Hello i am an exeternal element </h1>
  return (
    <div>
      <h1 className = "red"
      //  style = "color:red;"   This type is not supported in jsx
      // style = {mystyle}  // style object way 
      style = { {
        color:'greeen',
        fontSize: "60px",
        // fontFamily: "Cursive"
       }}
      >Welcome to React Js Learning</h1>

{/* {myele} */}
      <h2> {2+2}</h2>
      <p>I am a person  {name}</p>


    </div>
  );
}

export default App;
