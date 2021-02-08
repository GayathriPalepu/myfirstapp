import logo from './logo.svg';
import './App.css';
import Demo from './components/demo'
import ClassBasedcom from './components/classBasedcomponent'
import Hooks from './components/hooksInc'
function App() {
  return (
    <div className="App">
      <h1>Hello Nec</h1>
      <Demo></Demo>
      <Demo />
      <Demo />
      <Home />
      <Hooks />
      <h1>Hooks</h1>
      <ClassBasedcom name="Gayathri">NEC</ClassBasedcom>
    
    </div>
  );
}
let Home=()=>{
  return(
    <h1><i>This is my home component</i></h1>
  );
}


export default App;
