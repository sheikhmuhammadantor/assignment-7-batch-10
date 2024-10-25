import banner from '../assets/banner-main.png'

export default function Banner() {
  return (
    <div className="bg-hero-banner bg-cover rounded-xl mt-8 py-14 bg-black ">
      <div className='text-center'>
        <img className='mx-auto' src={banner} alt="" />
        <h1 className='text-3xl text-white mt-6'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
        <p className='mt-6 text-xl text-gray-400 font-inter'>Beyond Boundaries Beyond Limits</p>
        <button className='btn mt-6'>Claim Free Credit</button>
      </div>
    </div>
  )
}
