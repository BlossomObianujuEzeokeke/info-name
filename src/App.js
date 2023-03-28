import React, { PureComponent } from "react";
import Welcome from "./component/Welcome";
import Hello from "./component/Hello";
import Greet from "./component/Greet";
import Message from "./component/Message";
import Counter from "./component/Counter"
import FunctionClick from "./component/FunctionClick"
import ClassClick from "./component/ClassClick";
import EventBind from "./component/EventBind";
import ParentComponent from "./component/ParentComponent";
import ChildComponent from "./component/Child Component";
import UserGreeting from "./component/UserGreeting";
import NameList from "./component/NameList";
import Person from "./component/Person";
import "./component/myStyles.css"
import styles from "./component/appStyles.module.css"
import Lifecycle from "./component/Lifecycle";
import FragmentDemo from "./component/FragmentDemo";
import Table from "./component/Table";
import Column from "./component/Column";
import PureComp from "./component/PureComp";
import RegComp from "./component/RegComp";
import ParentComp from "./component/ParentComp";
import RefsDemo from "./component/RefsDemo";
import PortalDemo from "./component/PortalDemo";
import Hero from "./component/Hero"
import ErrorBoundary from "./component/ErrorBoundary";



const App = () => {
  return (
    <div>


      <ErrorBoundary />
      <Hero  heroName = "Batman" />
      <ErrorBoundary />

      <ErrorBoundary />
      <Hero  heroname = "Superman"/>
      <ErrorBoundary />

      <ErrorBoundary />
      <Hero  heroName = "The slammer"/>
      <ErrorBoundary />

     {/* <PortalDemo /> */}
      
      {/* <RefsDemo />  */}
 
      {/* <ParentComp /> */}

      {/* <RegComp /> */}

      {/* <PureComp /> */}

      {/* <Column /> */}

      {/* <Table /> */}

      {/* <FragmentDemo /> */}

       {/* <Lifecycle /> */}
      
      {/* <h1 className="nigeria">Nigeria</h1>
      <h1 className={styles.usa}>USA</h1>
      <h2 className="native">Native</h2>
        */}
      {/* <Greet name="Cynthia" age=" 20 "><button><b>Hello child </b></button></Greet>
      <Greet name="Bruce" age=" 30 "><b> This is a child</b> </Greet>
      <Greet name="Diana" age=" 50 " />

      
      <Welcome name="Tolu" age=" 30 "><b> This is a child</b> </Welcome>
      <Welcome name="Almond" age=" 20 "><button><b>Hello child </b></button></Welcome>
      <Welcome name="Diana" age=" 50 "><input type="text" placeholder="Name here"/></Welcome> */}

      {/* <Hello /> */}

      {/* <Message /> */}

     {/* <Counter /> */}

      {/* <FunctionClick /> */}

      {/* <ClassClick /> */}

      {/* <EventBind /> */}

      {/* <ParentComponent /> */}

      {/* <ChildComponent /> */}

      {/* <UserGreeting /> */}

      {/* <NameList /> */}

      {/* <Person /> */}


    </div>
  );
};

export default App;




