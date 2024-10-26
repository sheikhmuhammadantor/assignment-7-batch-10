import PropTypes from 'prop-types';
import logo from '../assets/logo.png';
import { BsCoin } from "react-icons/bs";

export default function Header({ coins }) {
    return (
        <section className='mt-6 md:flex items-center justify-between '>
            {/* Logo Section */}
            <div>
                <img className='w-18 mx-auto' src={logo} alt="Logo Icon" />
            </div>
            {/* Menu Section */}
            <div className='md:flex items-center gap-5 mt-5'>
                <div className='flex flex-wrap gap-4 items-center justify-center font-semibold'>
                    <p className='cursor-pointer hover:underline'>Home</p>
                    <p className='cursor-pointer hover:underline'>Fixture</p>
                    <p className='cursor-pointer hover:underline'>Teams</p>
                    <p className='cursor-pointer hover:underline'>Schedules</p>
                </div>
                {/* Available Coins */}
                <div className='mt-6 md:mt-0 text-center '>
                    <button className='btn bg-transparent border-2'>
                        <span className='font-bold'>{coins}</span>
                        Coins
                        <i className='text-yellow-500'><BsCoin /></i>
                    </button>
                </div>
            </div>
        </section>
    )
}

Header.propTypes = {
    coins: PropTypes.number.isRequired,
    // handelChoosePlayer: PropTypes.func.isRequired,
}
