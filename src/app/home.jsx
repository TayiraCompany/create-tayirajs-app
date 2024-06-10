import React, { useState } from "react";

const Home = () => {
    const [showPage, setShowPage] = useState(false);

    const handleStartClick = () => {
        setShowPage(true);
    };
    const handlecStartClick = () => {
        setShowPage(false);
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-400 to-purple-500">
        <div className={`bg-gray-100 p-8 rounded-lg shadow-md transition-transform transform ${showPage ? "-translate-y-full" : "translate-y-0"}`}>
            <h1 className="text-2xl font-bold mb-4">Welcome to TayiraJs</h1>
            <p>This is a beautiful and attractive page.</p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" onClick={handleStartClick}>Get Start</button>
            </div>
            {showPage && (
                <div className="fixed inset-0 bg-white bg-opacity-70 z-10 flex flex-col justify-center items-center">
                    <h1 className="text-2xl font-bold mb-4">Created At {new Date().toLocaleString()}</h1>
                    <li>1 : open your editor</li>
                    <li>2 : Start edit in {"src/app/home.jsx"}</li>
                    <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" onClick={handlecStartClick}>OK !</button>
                </div>
            )}
        </div>
    );
};

export default Home;
