// import React from 'react'
// import './MyWork.css'
// import theme_pattern from '../../assets/theme_pattern.svg'
// import arrow_icon from '../../assets/arrow_icon.svg'
// import mywork_data from '../../assets/mywork_data'


// const MyWork = () => {
//     return (
//         <>
//             <div id='work' className="mywork">
                // <div className="mywork-title">
                //     <h1>My latest work</h1>
                //     <img src={theme_pattern} alt="" />
                // </div>
//                 <div className="mywork-container">
//                     {mywork_data.map((work, index) => {

//                         return <div key={index} className='workinfo'>
//                             <img  src={work.w_img} alt="" />
//                             <div >
//                                 <h2>{work.w_title}</h2>
//                                 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. consectetur adipisicing,</p>
//                             </div>
//                         </div>

//                     })}
//                 </div>
//                 <div className="mywork-showmore">
//                     <p>Show More</p>
//                     <img src={arrow_icon} alt="" />
//                 </div>
//             </div>
//         </>
//     )
// }

// export default MyWork

import React from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import arrow_icon from '../../assets/arrow_icon.svg';
import mywork_data from '../../assets/mywork_data'; // Make sure this is a valid import

const MyWork = () => {
    return (
        <>
            <div className="w-full" id='project'>
                <div className="w-full mx-auto py-10 px-4 md:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="mywork-title">
                            <h1>My latest work</h1>
                            <img src={theme_pattern} alt="Theme Pattern" />
                        </div>
                    </div>
                    <div className="grid max-w-2xl grid-cols-1 gap-8 mx-auto mt-8 auto-rows-fr lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {mywork_data.map((work, index) => (
                            <article
                                key={index}
                                className="relative flex flex-col justify-end px-4 pt-40 pb-4 overflow-hidden bg-gray-900 md:pt-28 isolate rounded-xl dark:shadow dark:shadow-gray-400/50 border-4 border-transparent hover:border-pink-800 hover:cursor-pointer hover:scale-105 transition-all duration-500"

                            >
                                <img
                                    src={work.image}
                                    alt={work.title}
                                    className="absolute inset-0 object-cover w-full h-full -z-10"
                                />
                                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                                <div className="absolute inset-0 -z-10 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                                <a 
                                    className="text-lg font-semibold leading-6 text-white "
                                    href={work.link}
                                    target='_blank'
                                >
                                    {work.title}
                                </a>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default MyWork;
