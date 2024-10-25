import logo from '../assets/logo.png';
import { BsCoin } from "react-icons/bs";

export default function Header() {
    return (
        <section className='mt-6 md:flex items-center justify-between '>
            {/* Logo Section */}
            <div>
                <img className='w-18 mx-auto' src={logo} alt="Logo Icon" />
            </div>
            {/* Menu Section */}
            <div className='md:flex items-center gap-5 mt-5'>
                <div className='flex gap-4 items-center justify-center'>
                    <p>Home</p>
                    <p>Fixture</p>
                    <p>Teams</p>
                    <p>Schedules</p>
                </div>
                {/* Available Coins */}
                <div className='mt-6 md:mt-0 text-center '>
                    <button className='btn bg-transparent border-2'>0 Coin
                        <i className='text-yellow-500'><BsCoin /></i>
                    </button>
                </div>
            </div>
        </section>
    )
}
7