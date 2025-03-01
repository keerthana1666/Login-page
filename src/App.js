// import React from 'react'
// import ProductCard from './Foodcard'
// import bike from "./bike.jpg"
// const App = () => {
//   const[isError,setisError]=useState(false);
//   function login() {
//     setisError(!isError);
//   }
//   return (
//     <div> <button onClick={login}></button>
//     {isError==false &&<productCard img={bike}/>}
//     {/* <ProductCard img={bike} productName= "car1"/>
//     <ProductCard img={bike} productName= "car2"/>
//     <ProductCard img={bike} productName= "car3"/>
//     <ProductCard img={bike} productName= "car4"/> */}
//     </div>
//   )
// }

// export default App
import React from 'react';
import Login from "./Login";
import Pages from './Pages';
import './Login.css';
const App = () => {
   function Login(){}
  return (
    <div>

      <Pages/>
    </div>
  );
}

export default App;