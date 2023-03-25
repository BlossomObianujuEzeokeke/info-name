// import React from "react";

// const Greet = (props) => {
//   return (
//     <div>
//       <h1>
//         {props.name}
//         {props.age}
//       </h1>
//       {props.children}
//     </div>
//   );
// };

// export default Greet;

// ===================================
import React from "react";

const Greet = ({name, age, children}) => {
  return (
    <div>
      <h1>
        {name}
        {age}
      </h1>
      {children}
    </div>
  );
};

export default Greet;






