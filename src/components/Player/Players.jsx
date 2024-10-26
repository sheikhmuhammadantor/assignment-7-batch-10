import PropTypes from 'prop-types';
import Player from './Player';

export default function Players({ players, handelChoosePlayer, handelGetFreeCoins }) {

  return (
    <section className='grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 mt-12'>
      {
        players.map(player => <Player key={player.playerId} player={player} handelChoosePlayer={handelChoosePlayer} handelGetFreeCoins={handelGetFreeCoins}></Player>)
      }
    </section>
  )
}

Players.propTypes = {
  players: PropTypes.array.isRequired,
  handelChoosePlayer: PropTypes.func.isRequired,
  handelGetFreeCoins: PropTypes.func.isRequired,
};
