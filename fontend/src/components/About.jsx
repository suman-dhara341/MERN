import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'


const About = () => {

    const data = useSelector((state) => state.authToken.user)


    return (
        <div className='flex items-center justify-evenly px-11 py-7 bg-black text-white'>
            <div>
                {
                    data ? <p>Welcome to {data.name}</p> : <p>Welcome, Guest!</p>
                }

                <h1>Why Choose Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas impedit sapiente nisi laboriosam, assumenda similique facilis debitis asperiores minus </p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident aspernatur distinctio rerum aliquam, qui, impedit fugiat eius eum possimus </p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident sit commodi fugiat sapiente adipisci. Totam temporibus dolorum minima perferendis ut accusantium</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ipsum velit voluptate, accusantium esse quidem, accusamus, quisquam eligendi tempore fuga quibusdam cupiditate</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam explicabo vero dolores? Blanditiis optio quisquam beatae, asperiores debitis praesentium maxime natus maiores rerum nesciunt distinctio </p>
                <div className="mt-10 flex gap-4">
                    <NavLink to='/contact' className="bg-[#7564f5] px-4 py-2 rounded-xl">Contact Now</NavLink>
                    <button className="border border-[#7564f5] px-4 py-2 rounded-lg">Learn More</button>
                </div>
            </div>
            <div>
                <img
                    className='w-[96rem] rounded-xl pl-5'
                    src="https://st.depositphotos.com/1038076/4908/i/450/depositphotos_49080337-stock-photo-about-us.jpg" alt="" />
            </div>
        </div>
    )
}

export default About