// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


import React from "react";
import Header from "./components/header.jsx"
import Img from "./components/img.jsx"
import Bimg from "./components/art.jsx"
import Footer from './components/footer';

function App(){
  return(
  <>  
    <Header />
    <Img />
    <Bimg />
    <Footer />
  </>
  )
}
export default App;
