import React from 'react';
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Home = () => {
    const data = useSelector((state) => state.authToken.user)
    return (
        <>
            <div className="bg-black text-white p-4 md:p-8">
                <div className="flex flex-col md:flex-row gap-11 items-center">
                    <div className="md:w-1/2">
                        <p className="text-lg">We are the World Best IT Company</p>
                        <h1 className="font-bold text-4xl md:text-5xl mt-2"> {
                            data ? <p>Welcome to {data.name}</p> : <p>Welcome, to Everyone!</p>
                        }</h1>
                        <p className="mt-6">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex facilis necessitatibus aliquid odio maxime vitae, ipsum cumque quos pariatur dolores error id illum eos non nisi? Rem modi voluptas aliquid.
                        </p>
                        <div className="mt-10 flex gap-4">
                            <NavLink to='/contact' className="bg-[#7564f5] px-4 py-2 rounded-xl">Contact Now</NavLink>
                            <button className="border border-[#7564f5] px-4 py-2 rounded-lg">Learn More</button>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <img
                            className="w-full h-auto object-cover rounded-lg"
                            src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="IT Company"
                        />
                    </div>
                </div>

                <div className="bg-white text-black mt-12 p-6 md:p-12 rounded-2xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div className='border-r-2 border-r-lime-500'>
                            <p className="text-3xl font-bold">50+</p>
                            <p className="text-sm">Registered Companies</p>
                        </div>
                        <div className='border-r-2 border-r-lime-500'>
                            <p className="text-3xl font-bold">100,000+</p>
                            <p className="text-sm">Happy Clients</p>
                        </div>
                        <div className='border-r-2 border-r-lime-500'>
                            <p className="text-3xl font-bold">500+</p>
                            <p className="text-sm">Well Known Developers</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold">24/7</p>
                            <p className="text-sm">Service</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-11 items-center mt-20">
                    <div className="md:w-1/2">
                        <img
                            className="w-full h-auto object-cover rounded-lg"
                            src="https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="IT Company"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <p className="text-lg">We are here to help you</p>
                        <h1 className="font-bold text-4xl md:text-5xl mt-2">Get Started Today</h1>
                        <p className="mt-6">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex facilis necessitatibus aliquid odio maxime vitae, ipsum cumque quos pariatur dolores error id illum eos non nisi? Rem modi voluptas aliquid.
                        </p>
                        <div className="mt-10 flex gap-4">
                            <NavLink to='/contact' className="bg-[#7564f5] px-4 py-2 rounded-xl">Contact Now</NavLink>
                            <button className="border border-[#7564f5] px-4 py-2 rounded-lg">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
