// import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import Greet from './Components/Greet';
import GreetClass from './Components/GreetClass';
import User from './Components/User';


function App() {
  return (
    <div className="App">
      <Greet firstName="Sam" lastName="Wilson"/>
      <Greet firstName="Andre" lastName="Russel"/>
      <GreetClass firstName="Sam" lastName="Billings"/>
      <GreetClass firstName="Will" lastName="Jacks"/>
      <GreetClass firstName="Jason" lastName="Frazer"/>
      <Counter/>
      <User/>
    </div>
  );
}

export default App;
