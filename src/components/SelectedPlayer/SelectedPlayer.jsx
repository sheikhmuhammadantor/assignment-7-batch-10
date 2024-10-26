import PropTypes from "prop-types"

export default function SelectedPlayer({ selectPlayer, handelRemovePlayer }) {
  const { image, name, role, biddingPrice } = selectPlayer
  return (
    <div className="border p-3 rounded-2xl flex justify-between items-center">
      <div className="flex items-center gap-4">
        <img className="w-24 rounded-full" src={image} alt={`${name} Image`} />
        <div>
          <h1 className="text-xl font-semibold">{name}</h1>
          <div className="text-gray-500">
            <p>{role}</p>
            <p>${biddingPrice}</p>
          </div>
        </div>
      </div>
      <button onClick={() => handelRemovePlayer(selectPlayer)} className="btn">Delete</button>
    </div>
  )
}

SelectedPlayer.propTypes = {
  selectPlayer: PropTypes.object.isRequired,
  handelRemovePlayer: PropTypes.func.isRequired,
};

