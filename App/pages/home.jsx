import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

const Home = () =>{
    const [showPage, setShowPage] = useState(false);
    const { t, i18n } = useTranslation();

    const handleStartClick = () => {
        setShowPage(true);
    };

    const handlecStartClick = () => {
        setShowPage(false);
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };    

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-400 to-purple-500">
            <motion.div
                className={`bg-gray-100 p-8 rounded-lg shadow-md transition-transform transform ${showPage ? "-translate-y-full" : "translate-y-0"}`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-2xl font-bold mb-4">{t('Welcome to TayiraJs')}</h1>
                <p>{t('This is a beautiful and attractive page.')}</p>
                <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" onClick={handleStartClick}>{t('Get Start')}</button>
                <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" onClick={() => changeLanguage('ar')}>{t('Translate (ar)')}</button>
            </motion.div>
            {showPage && (
                <motion.div
                    className="fixed inset-0 bg-white bg-opacity-70 z-10 flex flex-col justify-center items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-2xl font-bold mb-4">{t('Created At')} {new Date().toLocaleString()}</h1>
                    <ul className="list-disc list-inside">
                        <li>1: {t('Open your editor')}</li>
                        <li>2: {t('Start editing in')} <code>App/pages/home.jsx</code></li>
                    </ul>
                    <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" onClick={handlecStartClick}>{t('OK!')}</button>
                </motion.div>
            )}
        </div>
    );
};

export default Home;
