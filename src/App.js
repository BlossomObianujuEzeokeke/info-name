import React from "react";
import "./index.css";
import Welcome from "./component/Welcome";
import Hello from "./component/Hello";
import Greet from "./component/Greet";
import Message from "./component/Message";
import Counter from "./component/Counter"
import FunctionClick from "./component/FunctionClick"
import ClassClick from "./component/ClassClick";




const App = () => {
  return (
    <div>
      
      {/* <Greet name="Cynthia" age=" 20 "><button><b>Hello child </b></button></Greet>
      <Greet name="Bruce" age=" 30 "><b> This is a child</b> </Greet>
      <Greet name="Diana" age=" 50 " />

      
      <Welcome name="Tolu" age=" 30 "><b> This is a child</b> </Welcome>
      <Welcome name="Almond" age=" 20 "><button><b>Hello child </b></button></Welcome>
      <Welcome name="Diana" age=" 50 "><input type="text" placeholder="Name here"/></Welcome> */}


      {/* <Hello /> */}

      {/* <Message /> */}

     {/* <Counter /> */}

      <FunctionClick />

      <ClassClick />



    </div>
  );
};

export default App;





