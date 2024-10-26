import PropTypes from 'prop-types'
import banner from '../assets/banner-main.png'

export default function Banner({handelGetFreeCoins}) {
  return (
    <div className="bg-hero-banner bg-cover rounded-xl mt-8 py-14 bg-black ">
      <div className='text-center'>
        <img className='mx-auto' src={banner} alt="" />
        <h1 className='text-3xl text-white mt-6'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
        <p className='mt-6 text-xl text-gray-400 font-inter'>Beyond Boundaries Beyond Limits</p>
        <button onClick={() => handelGetFreeCoins('add', 5000000)} className='btn mt-6 bg-[#d9ee27] border-0 text-base font-bold outline outline-1 outline-[#d9ee27] outline-offset-8'>Claim Free Credit</button>
        {/* <button className='btn mt-6 text-base bg-gradient-to-r from-pink-400 to-yellow-500 border-0'>Claim Free Credit</button> */}
      </div>
    </div>
  )
}

Banner.propTypes = {
  handelGetFreeCoins: PropTypes.func.isRequired,
    // handelChoosePlayer: PropTypes.func.isRequired,
}

