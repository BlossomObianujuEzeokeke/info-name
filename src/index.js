// import React from "react";
// import ReactDOM from "react-dom";

// const NavBar = (
//   <nav>
//     <h1>Bob's Bistro</h1>
//     <ul>
//     <li>Pricing</li>
//       <li>Menu</li>
//       <li>Contact</li>
//       <p> This is an element.</p>
//     </ul>
//   </nav>
// )

// var SecondBar = (
//     <div>
//       <h1>My awesome react</h1>
//       <ol>
//       <li>Its composable</li>
//         <li>It's declarative</li>
//         <li>It's great!</li>
//       </ol>
//     </div>
//   )

//   var ThirdBar = (
//     <>
//       <h1>Image</h1>
//       <img src = "logo192.png" width = "80px"/>
//     </>
//   )


// //   ReactDOM.render(ThirdBar, document.getElementById("logo"))
// ReactDOM.render(<NavBar/>, document.getElementById("root"))
// ReactDOM.render(<SecondBar/>, document.getElementById("plain"))
// ReactDOM.render(<SecondBar/>, document.getElementById("plantain"))
// ReactDOM.render(<ThirdBar/>, document.getElementById("logo"))
// console.log(NavBar);


//  const SecondBar = () => { 
//    return ( 
//    <div>
//       <h1>My awesome react</h1>
//       <ol>
//       <li>Its composable</li>
//         <li>It's declarative</li>
//         <li>It's great!</li>
//       </ol>
//     </div>
//    )
// }

//   ReactDOM.render(<SecondBar/>, document.getElementById("root"))

// import React from "react";
// import ReactDOM from "react-dom";

// // ===============================================
// const Header = () => { 
//     return( 
// <header> 
// <nav>      
//    <img src = "logo192.png" width = "40px" />
// </nav>
// </header>
//     )
// }

// // ==================================================
// const Footer = () => {   
//     return(  
//          <footer>   
//               <small> &copy;2023 Ezeokeke. All rights reserved. </small>
//          </footer>
//   )
// }


// // ======================================
// let MyPage = () => {
//     return( 
//         <> 
//      <Header />
//             <br />
//             <hr />
//             <br />
//             <ol>   
//             <li>I am excited to be learning react</li>
//             <li>I know it will help build mt tech career</li>
//             <li>I can't wait to see how far I go with it</li>
//         </ol>
//         <Footer />
//     </>
//     )

//     }

// ReactDOM.render(<MyPage /> ,document.getElementById("root"))
// ReactDOM.render(<h1> its working</h1> ,document.getElementById("root"))

import React from "react";
import ReactDOM from "react-dom";

const Header = () => {
return(
    <header>
    <nav className= "nav">
        <img src= "logo192.png" width= "40px" />
        <ul className="nav-items">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        </nav>
    </header>
    )
    }

ReactDOM.render(<Header />, document.getElementById("root"))














