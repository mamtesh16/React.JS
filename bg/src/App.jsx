import { useState } from "react"

function App() {
  const [color, setcolor] = useState("olive")

  return (
    <div
      className="w-full h-screen duration-100"
      style={{ background: color }}
    >

      <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">

          <button
            onClick={() => setcolor("cyan")}
            className="outline-none px-3 py-1 rounded-full text-white shadow-lg"
            style={{ background: "cyan" }}
          >
            Cyan
          </button>

          <button
            onClick={() => setcolor("olive")}
            className="outline-none px-3 py-1 rounded-full text-white shadow-lg"
            style={{ background: "olive" }}
          >
            Olive
          </button>

          <button
            onClick={() => setcolor("black")}
            className="outline-none px-3 py-1 rounded-full text-white shadow-lg"
            style={{ background: "black" }}
          >
            Black
          </button>

          <button
            onClick={() => setcolor("pink")}
            className="outline-none px-3 py-1 rounded-full text-white shadow-lg"
            style={{ background: "pink" }}
          >
            Pink
          </button>

          {/* Gold */}
          <button
            onClick={() => setcolor("gold")}
            className="outline-none px-3 py-1 rounded-full text-white shadow-lg"
            style={{ background: "gold" }}
          >
            Gold
          </button>

          <button
            onClick={() => setcolor("green")}
            className="outline-none px-3 py-1 rounded-full text-white shadow-lg"
            style={{ background: "green" }}
          >
            Green
          </button>

          <button
            onClick={() => setcolor("purple")}
            className="outline-none px-3 py-1 rounded-full text-white shadow-lg"
            style={{ background: "purple" }}
          >
            Purple
          </button>

          <button
            onClick={() => setcolor("yellow")}
            className="outline-none px-3 py-1 rounded-full text-white shadow-lg"
            style={{ background: "yellow" }}
          >
            Yellow
          </button>

          <button
            onClick={() => setcolor("blue")}
            className="outline-none px-3 py-1 rounded-full text-white shadow-lg"
            style={{ background: "blue" }}
          >
            Blue
          </button>

        </div>
      </div>

    </div>
  )
}

export default App