export default function PlayerBar() {
  return (
    <div className="flex justify-between mt-16">
      <h2 className="text-2xl font-semibold">Available Players</h2>
      <div className="border flex rounded-xl">
        <button className="py-2 px-5 border-r">Available</button>
        <button className="py-2 px-5">Selected(0)</button>
      </div>
    </div>
  )
}
