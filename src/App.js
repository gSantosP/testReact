import logo from './homem-feliz-dinheiro.jpg';
import './App.css';

const test = "Hello!"

function Mycomponent(props){
    return <div>Hello! {props.name}</div>
}

const obj = {
  name: "test",
  age: "25",
  Initial: "J"
}

for(var property in obj){
    console.log(property + " = " + obj[property])
    }

const ComponenteFuncional = ({url}) => {
    return(
    <div>
      <img
      src={url}
      alt="img"/>
      </div>
      )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {test} world!
          {obj.name}

        </p>
        <Mycomponent name="Component"/>

        

      </header>
    </div>
  );
}

export default App;
