import logo from '../assets/logo-footer.png'

export default function Footer() {
    return (
        <section className="mt-72 pt-60" data-theme="dark">
            {/* Subscribe Newsletter */}
            <div className='border py-12' data-theme="light">
                <h1 className='text-center text-2xl font-semibold'>Subscribe to our Newsletter</h1>
                <p className='text-center my-3 text-gray-500'>Get the latest updates and news right in your inbox!</p>
                <div className='text-center'>
                    <label className="rounded-xl flex justify-center gap-5" htmlFor="email" data-theme="light">
                        <input type="text" placeholder="Enter your email" className="input focus:outline-none border border-gray-400 w-full max-w-xs" />
                        <button className="bg-yellow-500 text-lg font-semibold px-5 rounded-xl">Subscribe</button>
                    </label>
                </div>
            </div>
            <div>
                <img className='mx-auto py-6' src={logo} alt="" />
            </div>
            <footer className="footer p-10 container mx-auto place-items-center">
                <nav>
                    <h6 className="footer-title">About Us</h6>
                    <a className="link link-hover">We Are a passionate team</a>
                    <a className="link link-hover">dedicated to providing team</a>
                    <a className="link link-hover">services to out customers</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Quick Links</h6>
                    <li><a className="link link-hover">Home</a></li>
                    <li><a className="link link-hover">Services</a></li>
                    <li><a className="link link-hover">About</a></li>
                    <li><a className="link link-hover">Contact</a></li>
                </nav>
                <nav>
                    <h6 className="footer-title">Subscribe</h6>
                    <a className="link link-hover">Subscribe to our newsletter for the <br /> latest updates.</a>
                    <label className="rounded-xl flex " htmlFor="email" data-theme="light">
                        <input type="text" placeholder="Enter your email" className="input border-none w-full max-w-xs" />
                        <button className="bg-yellow-500 text-lg font-semibold px-5 rounded-e-xl">Subscribe</button>
                    </label>
                </nav>
            </footer>
            <div className="divider"></div>
            <h3 className="text-center pb-5">&copy;2024 ShadowCricket All Rights Reserved</h3>
        </section>
    )
}
