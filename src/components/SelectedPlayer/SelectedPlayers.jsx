import SelectedPlayer from "./SelectedPlayer"
import PropTypes from "prop-types";

export default function SelectedPlayers({ selectPlayers }) {
  return (
    <div>
      <section className="flex flex-col gap-8 mt-12">
        {selectPlayers.map(selectPlayer => <SelectedPlayer key={selectPlayer.playerId} selectPlayer={selectPlayer}></SelectedPlayer>)}
      </section>
    </div>
  )
}

SelectedPlayers.propTypes = {
  selectPlayers: PropTypes.array.isRequired,
  // handelChoosePlayer: PropTypes.func.isRequired,
};

