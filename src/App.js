// INFO SITE
// import React from "react";
// import Navbar from "./component/Navbar"
// import Contents from "./component/Contents"

// export default function App() {
//     return(
//   <div className="container">
//   <Navbar />
//   <Contents />
//   </div>
  
//     )
//   }

// ================================================
// AIRBNB PROJECT
//     import React from "react";
//     // import Contacts from "./component/Contacts.js"
//     // import Navbar from "./component/Navbar";
//     // import Contents from "./component/Contents"
//     import Cards from "./component/Cards.js"


//   const App = () => {
//   return( 
//     <div> 
//          {/* <Navbar /> */}
//          {/* <Contents /> */}
//          <Cards />


//     {/* <Contacts />
//          img="./Images/airbnb 1.png"
//          name="Mr Whikerson"
//           number="081444533223"
//        /> */}

//         //  <Contacts
//         //  img="./Images/Swimming.png"
//         //  name="Mrs Facebook"
//         //  number="0805869594"

//         //  />

//         //  <Contacts 
//         //  img="./Images/GitHub Icon.png"
//         // name="Star"
//         // number="070450696"

//         // />

//         //  <Contacts
//         //  img="./Images/Rectangle 90.png"
//         //  name="mountain bike"
//         //  number="0805654455"
         
//         //  />
//         //  }

         
// {/* ================================ */}
// //  <Contacts
// // img="./Images/Swimming.png"
// // name="Blossom"
// // time="2:13pm"
// // />

//        </div>
//    )
//       }




//   export default App

// =======================================


// import React from "react";
// import data from "./component/data";
// import Cards from "./component/Cards"

// export default function App() {
//       return(
//      <div>
//      <Cards
//      img="../Images/airbnb 1.png"
//      rating="5.0"
//      reviewCount="6"
//      country="USA"
//      title="Life lessons with Katie Zaferes"
//      price="136"
//      />


// <Cards
//      img="../Images/Swimming.png"
//      rating="10.0"
//      reviewCount="60"
//      country="NIGERIA"
//      title="Life after weight loss"
//      price="200"
     
//      />

//      </div>
    
//      )
//      }

//==================================================

// export default function App() { 
//      const cards = data.map(item => {
//           return(
//       <Cards
//       title={item.title}
//        stats={item.stats.rating}
//        reviewCount={item.stats.reviewCount}
//        location={item.location}
//         img={item.coverImage}
//         price={item.price}
//         />
//           )
//      })

     
// return(
// <div>
//   {Cards}    
// </div>
// )
// }

// ------------------------------------------------------

// import React from "react"

// export default function App() {
//      return(
// <div>
//      <User name="Pedro" age={32} email="perdro@gmail.com"/>
//      <User name="cynthia" age={40} email="silva@yahoo.com" />
//      <User />
// </div>
//      )
// }

// const User = (props) => {

// return(
//      <div>
//           <h1>{props.name}</h1>
//           <h1>{props.age}</h1>
//           <h1>{props.email}</h1>
//      </div>
// )

// }

//================================================

// import React from "react"
// import Style from "./index.css"



// function App() {
//      return(
// <div>
//  <Job salary={90000} position="Senior SE" company="Amazon"/>
// <Job salary={12000} position="Junior SDE" company="Google"/>
// <Job salary={10000} position="Project Manager" company="Netflix"/>
// </div>
//      )
// }

// const Job = (props) => {
//      return(
//           <>
// <h2>{props.salary}</h2>
// <h2>{props.position}</h2>
// <h2>{props.company}</h2>
// </>
//      )
// }

// ================================================
import React from "react"
import Style from "./index.css"

// function App() {
     // const age = 10
     // const isGreen = true
// const isBlue = false

//      return(
// <div>
//      {age >= 18 ? <h1>PROPER AGE</h1> : <h1>UNDER AGE</h1>}
//      {/* <h1 style={{color: isGreen ? "green" : "red"}}>THIS HAS COLOUR</h1> */}
// <h1 style={{color: isBlue ? "blue" : "yellow"}}>THIS IS A RED OBJECT</h1>
// </div>

//      )
// }

// ===============================================
// 
// function App() {
// const names = ["Peter", "Paul", "Saint", "john"]

//      return(
// <div>
//      {names.map((value,key) => {
// return <h1 key={key}>{names}</h1>
//      })}
// </div>
//      )
// }


function App() {
const names = ["Paul", "Cynthia", "Rachel"]

     return(
<div>
     {names.map((value,key) => { 
return <h1 key = {key}> {names} </h1>
})}
</div>
     )
     
}







export default App










































 

    
      