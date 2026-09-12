import { useState ,useCallback, useEffect,useRef} from 'react'


import './App.css'

function App() {
  const[length,setlength ]= useState(8)// for length
  const[number,setnumber ] = useState(false);
  const[char,setchar ] = useState(false);// allowed or not
  const [password ,setpassword]  = useState()
  // use ref
  const passref = useRef(null)

   const passwordgen = useCallback(( ) =>{
    let pass = ""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

   if (length) str = str+"0123456789";
   if (number) str = str+"0123456789";
   if (char) str = str+"`@#$%^&*({_-+,.?";

   // for generate pass
   for (let i = 0; i <= length; i++) {
     let char = Math.floor( Math.random()*str.length +1)

     pass = pass+str.charAt(char)
    
   }
   setpassword(pass)
    
    
   
   },[length,number,char,setpassword])
  
  // on click method
   const copyclipboard =useCallback ( () =>{
    // select which value want to copy
    passref.current?.setSelectionRange(0,4)
    //highlight
    passref.current?.select()
    //copy to clip board
    window.navigator.clipboard.writeText(password)

   },[password])
// useEffect
useEffect( ()=>{
  passwordgen()
} ,[length,number,char,setpassword])

  return (

  <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">

      <h1 className="text-amber-200 text-center">
        Password Generator
      </h1>

      <div className="flex shadow rounded-lg overflow-hidden mb-4 bg bg-white">

        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passref}
        />

        <button
        onClick={copyclipboard}
           
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
        >
          copy
        </button>

      </div>

      <div className="flex text-sm gap-x-2 text-white">

        {/* Range */}
        <div className="flex items-center gap-x-1">

          <input
            type="range"
            min={15}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setlength(e.target.value)
            }}
          />

          <label>
            Length: {length}
          </label>

        </div>

        {/* Number */}
        <div className="flex items-center gap-x-1">

          <input
            type="checkbox"
            defaultChecked={number}
            id="numberInput"
            onChange={() => {
              setnumber((prev) => !prev)
            }}
          />

          <label htmlFor="numberInput">
            Number
          </label>

        </div>

        {/* Character */}
        <div className="flex items-center gap-x-1">

          <input
            type="checkbox"
            defaultChecked={char}
            id="characterInput"
            onChange={() => {
              setchar((prev) => !prev); {/*true false me change */}
            }}
          />

          <label htmlFor="characterInput">
            Character
          </label>

        </div>

      </div>

    </div>
  </>
)
}
export default App
