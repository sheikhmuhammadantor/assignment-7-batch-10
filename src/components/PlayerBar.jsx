import PropTypes from "prop-types";


export default function PlayerBar({handelSelected, selected, selectPlayersCount}) {
  return (
    <div className="flex flex-wrap justify-between mt-16">
      <h2 className="text-2xl font-semibold">Available Players</h2>
      <div className="flex flex-wrap border rounded-lg">
        <button onClick={() => handelSelected(false)} id="available" className={`btn py-2 px-5 rounded-l-lg rounded-r-none border-0 text-base ${selected ? 'bg-transparent hover:bg-transparent' : 'bg-[#d9ee27] hover:bg-[#d9ee27]'}`}>Available</button>
        <button onClick={() => handelSelected(true)} id="selected" className={`btn py-2 px-5 rounded-r-lg rounded-l-none border-0 text-base ${selected ? 'bg-[#d9ee27] hover:bg-[#d9ee27]' : 'bg-transparent hover:bg-transparent'}`}>Selected({selectPlayersCount})</button>
      </div>
    </div>
  )
}

PlayerBar.propTypes = {
  handelSelected: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  selectPlayersCount: PropTypes.number.isRequired,
};

