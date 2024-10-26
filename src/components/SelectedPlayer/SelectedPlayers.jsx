import SelectedPlayer from "./SelectedPlayer"
import PropTypes from "prop-types";

export default function SelectedPlayers({ selectPlayers, handelSelected, handelRemovePlayer }) {
  return (
    <div>
      <section className="flex flex-col gap-8 mt-12">
        {selectPlayers.map(selectPlayer => <SelectedPlayer key={selectPlayer.playerId} selectPlayer={selectPlayer} handelRemovePlayer={handelRemovePlayer}></SelectedPlayer>)}
      </section>
      <div>
        <button onClick={() => handelSelected(false)} className='btn mt-12 bg-[#d9ee27] border-0 text-base font-bold outline outline-1 outline-violet-700 outline-offset-8'>Add More Player</button>
      </div>
    </div>
  )
}

SelectedPlayers.propTypes = {
  selectPlayers: PropTypes.array.isRequired,
  handelSelected: PropTypes.func.isRequired,
  handelRemovePlayer: PropTypes.func.isRequired,
};
