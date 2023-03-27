import React from "react";
import Person from "./Person";

const NameList = () => {
    // FOR ARRAYS WITH ONE OBJECT VALUE
const names = ["Bruce" + " " + "Clark " + " " + "Hilda" + " " + "Bruce"]
const nameList = names.map(name => <div key={names}>{name}</div>)
return (
    <div>
        {nameList}
    </div>
)
}
// =============================================
// FOR ARRAYS WITH MORE THAN ONE OBJECT VALUE

// function NameList() {
//   const persons = [
//     {
//       id: 1,
//       name: "Jillian",
//       age: 20,
//       skill: "Shopping",
//     },

//     {
//       id: 2,
//       name: "Susan",
//       age: 33,
//       skill: "Architect",
//     },

//     {
//       id: 3,
//       name: "Boyle",
//       age: 50,
//       skill: "Fisher",
//     },
//   ];

//   const personList = persons.map( (person) => <Person key={person.id} Person = {person} />);
//   return <div>{personList}</div>;
// }



export default NameList;
 