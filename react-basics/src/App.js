import logo from './logo.svg';
import './App.css';
import Greet from './components/Class-components/Greet';
import Welcome from './components/Class-components/Welcome';
import Message from './components/Class-components/Message';
import Counter from './components/Events-and-event-binding/Counter';
import FunctionClick from './components/Events-and-event-binding/FunctionClick';
import ClassClick from './components/Events-and-event-binding/ClassClick';
import EventBind from './components/Events-and-event-binding/EventBind';
import ParentComponent from './components/Passing-function-as-props/ParentComponent';
import UserGreeting from './components/Conditional-rendering/If-else-approach';

function App() {
  return (
    <div className="App">
      {/* <Greet name="Bruce" heroname="Batman"/> passing props in functional components  and destructring it */}
      {/* <Greet name="Clark" heroname="Spiderman"/>
      <Greet name="Diana"  heroname="Wonder women"/> */}

      {/* <Welcome name="Bruce" heroname="Batman"/> */}
      {/* <Welcome name="Clark" heroname="Spiderman"/> passing props in class components */}
      {/* <Welcome name="Diana" heroname="Wonder women"/> */}
      {/*<Message/> setting states in class components */}
      {/* <Counter/> setting previous states in class components */}
      {/* <FunctionClick/>
      <ClassClick/> */}
      {/* <EventBind/> */}
      {/* <ParentComponent/> */}
      <UserGreeting />
    </div>
  );
}

export default App;
