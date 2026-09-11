import './App.css'
import Mamtesh from "./card";

function App() {
  let obj = {
    name: "mamtesh",
    age :"20",
    branch :"cse"
  }
  return (
    <>
      <Mamtesh  fullname= "kumar" myobj = {obj}/>
      <Mamtesh  branch= "cse" />
      <Mamtesh  btntext= "click me" />
    </>
  )
}

export default App