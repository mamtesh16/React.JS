import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  let [counter, setcounter] = useState(0);
   const removeValue = () =>{
     console.log("cunter " ,counter);
    //  counter = counter-1;
     setcounter(counter-1)
     
   }
  const addValue = () => {
    // 
    console.log("counter:", counter);
   // counter = counter + 1;
    // counter = counter + 1;
    // counter = counter + 1;
    // counter = counter + 1;
    // value 4 se increase hogi 
    //  setcounter(counter+1)
    //  setcounter(counter+1)
    //  setcounter(counter+1)
    //  setcounter(counter+1)
// is setcoutner me batch bn gye hai jisse sb sath milkar ek hi value increase karenge
    setcounter( (prevcounter)=>prevcounter)
    setcounter((prevcounter) => prevcounter +1)
    setcounter((prevcounter) => prevcounter +1)
    setcounter((prevcounter) => prevcounter +1)
    setcounter((prevcounter) => prevcounter +1)
 
  };

  return (
    <>
      <h1>mamtesh</h1>
      <h2>counter value {counter}</h2>

      <button onClick={addValue}>Add</button>
      <br />
      <button onClick={removeValue}>remove</button>
    </>
  );
}

export default App;