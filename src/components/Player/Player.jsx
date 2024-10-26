import PropTypes from "prop-types"
import { FaFlag, FaUser } from "react-icons/fa";

export default function Player({ player, handelChoosePlayer }) {
  const { name, country, image, role, battingType, bowlingType, biddingPrice } = player;

  return (
    <div className="border p-5 rounded-xl max-w-lg">
      <div className="max-h-80 max-w-80">
        <img className="rounded-xl" src={image} alt={`${name} Image`} />
      </div>
      <h1 className="flex gap-3 text-xl font-semibold mt-5"><FaUser />{name}</h1>
      <div className="flex flex-wrap items-center justify-between my-3">
        <p className="flex gap-3"><FaFlag />{country}</p>
        <button className="btn">{role}</button>
      </div>
      <hr />
      <h3 className="mt-2 font-bold text-lg">Rating</h3>
      <div className="flex flex-wrap justify-between items-center my-2">
        <h4 className="font-semibold">{battingType}</h4>
        <h4 className="text-gray-500">{bowlingType}</h4>
      </div>
      <div className="flex flex-wrap justify-between items-center mt-4">
        <h3 className="font-semibold">Price: ${biddingPrice}</h3>
        <button onClick={() => handelChoosePlayer(player)} className="btn border border-black bg-transparent font-semibold text-sm md:text-base">Choose Player</button>
      </div>
    </div>
  )
}

Player.propTypes = {
  player: PropTypes.object.isRequired,
  handelChoosePlayer: PropTypes.func.isRequired,
}
