import { useState } from "react"


export default function PlayerBar() {
  const [selected, setSelected] = useState(false);

  const handelSelected = () => {
    setSelected(!selected);
  }

  return (
    <div className="flex flex-wrap justify-between mt-16">
      <h2 className="text-2xl font-semibold">Available Players</h2>
      <div className="flex flex-wrap border rounded-lg">
        <button onClick={handelSelected} className={`btn py-2 px-5 rounded-l-lg rounded-r-none border-0 text-base ${selected ? 'bg-transparent hover:bg-transparent' : 'bg-[#d9ee27] hover:bg-[#d9ee27]'}`}>Available</button>
        <button onClick={handelSelected} className={`btn py-2 px-5 rounded-r-lg rounded-l-none border-0 text-base ${selected ? 'bg-[#d9ee27] hover:bg-[#d9ee27]' : 'bg-transparent hover:bg-transparent'}`}>Selected(0)</button>
      </div>
    </div>
  )
}
