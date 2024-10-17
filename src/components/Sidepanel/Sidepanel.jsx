import React from "react";
import dp from "../../assets/dp.jpeg"; 
import man from "../../assets/man2.jpg"; 
import threads from "../../assets/threads.svg"; 
import divImage from "../../assets/divImage.jpg"; 


const profiles = [
    { name: 'Jane Cooper', image: dp },
    { name: 'Arlene McCoy', image: dp },
    { name: 'Cody Fisher', image: dp },
    { name: 'Cameron Williamson', image: dp },
    { name: 'Darlene Robertson', image: dp },
];

export default function Sidepanel() {
    return (
        <div className="min-h-screen p-4 md:p-8 bg-[url('/src/assets/background.jpg')] bg-cover bg-center">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-6 rounded-2xl backdrop-blur-sm bg-gray-500 bg-opacity-10 mt-10" > 

                <aside className="md:w-80 flex-grow mr-1">
                    <div className="flex flex-col mb-6"></div>
                </aside>
                <div className="flex-1 border-l-2 border-white border-opacity-50"> 
                    <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                         <h2 className="font-semibold text-white">Follow suggestions</h2>
                         <button className="text-sm text-white bg-gray-500 rounded-full px-4 py-2 hover:bg-gray-700 transition-colors duration-200">
                         View All
                        </button>
                    </div>
                        {profiles.map((profile, index) => (
                            <div key={index} className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-4">
                                    <img
                                        src={profile.image} 
                                        alt={`${profile.name}'s profile`}
                                        className="w-10 h-10 rounded-full"
                                    />
                                    <p className="text-white">{profile.name}</p>
                                </div>
                                <button className="text-sm text-gray-400">Follow</button>
                            </div>
                        ))}
                        <hr className="border-t-3 border-white opacity-50 my-4 w-10/11 mx-auto" />
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center">
                             <img src={threads} alt="Threads Icon" className="w-4 h-4 mr-2" />
                             <h2 className="font-semibold text-white">Today on Threads</h2>
                            </div>
                            <button className="text-sm text-white bg-gray-500 rounded-full px-4 py-2 hover:bg-gray-700 transition-colors duration-200">
                         View All
                        </button>
                        </div>

                        <div className="flex items-center gap-4 mb-4 mt-2">
                            <img
                                src={man}
                                alt="Ronald Richards' profile"
                                className="w-10 h-10 rounded-full"
                            />
                            <div>
                                <h3 className="font-semibold text-white">Ronald Richards</h3>
                                <p className="text-sm text-gray-400">2h</p>
                            </div>
                        </div>
                        <p className="mb-4 text-white">How AI and VR can transform education: Students can walk among dinosaurs to learn about them and medical students can practice surgery without risk to patients...</p>
                        <div className="h-32 bg-purple-700 rounded-xl flex items-center justify-center">
                            <img
                                src={divImage} 
                                alt="Description of the image"
                                className="h-full w-full object-cover rounded-xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
