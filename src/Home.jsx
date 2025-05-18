import React, { useState } from 'react';
import { motion } from 'framer-motion';


const currencyRates = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.79,
    INR: 83.4,
    JPY: 155.7,
};

const currencySymbols = {
    USD: '$',
    EUR: '€',
    GBP: '£',
    INR: '₹',
    JPY: '¥',
};


export default function Home() {
     const [amount, setAmount] = useState('');
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('INR');
    const [result, setResult] = useState(null);


     const handleConvert = () => {
        if (!amount || isNaN(amount)) {
            setResult('Please enter a valid amount.');
            return;
        }
        const usdAmount = parseFloat(amount) / currencyRates[fromCurrency];
        const converted = usdAmount * currencyRates[toCurrency];
        setResult(`${currencySymbols[toCurrency] || ''}${converted.toFixed(2)} ${toCurrency}`);
    };


    return (
      
        <div className="bg-[#161616] bg-auto bg-cover w-screen h-screen flex flex-col items-center justify-center fixed inset-0">
            {/* Header */}
            <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="font-serif text-4xl text-white absolute left-5 top-5"
            >
                Tracki
            </motion.p>

            {/* Main Content */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="text-center text-white"
            >
                <div className="flex flex-col items-center w-full pb-20">
                    <h1 className="text-7xl font-bold">Welcome to Tracki</h1>
                    <p className="text-2xl mt-2">Your go-to currency converter app</p>
                </div>

                {/* Converter Fields */}
                <div
                    className="space-y-6 rounded-xl w-[500px] h-[320px] border-2 border-white p-6 flex flex-col items-center justify-center"
                    style={{
                        background: 'linear-gradient(180deg, rgba(255, 253, 253, 0.4) 0%, rgba(253, 246, 236, 0.1) 100%)',
                    }}
                >
                    <div className="flex items-center justify-center space-x-2 w-full">
                        <input
                            type="number"
                            placeholder="Enter Amount"
                            value={amount}
                            onChange={e => setAmount(e.target.value)}
                            className="p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none w-[250px] text-lg font-semibold"
                        />
                        <select
                            value={fromCurrency}
                            onChange={e => setFromCurrency(e.target.value)}
                            className="p-3 rounded-md bg-gray-800 text-white focus:outline-none w-[100px] text-lg font-semibold"
                        >
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                            <option value="GBP">GBP</option>
                            <option value="INR">INR</option>
                            <option value="JPY">JPY</option>
                        </select>
                    </div>
                    <div className="text-lg font-bold text-white">To</div>
                    <div className="flex items-center justify-center w-full">
                        <select
                            value={toCurrency}
                            onChange={e => setToCurrency(e.target.value)}
                            className="p-3 rounded-md bg-gray-800 text-white focus:outline-none w-full text-lg font-semibold"
                        >
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                            <option value="GBP">GBP</option>
                            <option value="INR">INR</option>
                            <option value="JPY">JPY</option>
                        </select>
                    </div>
                    <motion.button
                        whileHover={{
                            scale: 1.1,
                            backgroundPosition: '100% 50%',
                        }}
                        transition={{ duration: 0.3 }}
                        onClick={handleConvert}
                        className="mt-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold rounded-md w-full text-lg"
                    >
                        Convert It
                    </motion.button>
                </div>

                {/* Output Box */}
                {result && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mt-8 rounded-xl border-2 border-white p-6 w-[400px] text-center text-2xl font-semibold bg-gradient-to-b from-white/30 to-white/10 text-white"
                    >
                        {isNaN(Number(result)) ? result : `The amount in ${toCurrency} is ${result}`}
                    </motion.div>
                )}
            </motion.div>

               {/* Side Images */}
            <motion.div
                initial={{ x: '-100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="absolute top-18 -rotate-20 left-15"
            >
                <img
                    src="https://i.pinimg.com/736x/72/62/b5/7262b55d419ddb63f5f4621f5922700a.jpg"
                    alt="Travel 1"
                    className="w-40 rounded-lg shadow-lg"
                />
            </motion.div>

             <motion.div
                initial={{ x: '-100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="absolute bottom-50 rotate-20 left-15"
            >
                <img
                    src="https://i.pinimg.com/736x/81/2a/85/812a85a23fe3cbfdc821ab50cd7f1b0d.jpg"
                    alt="Travel 1"
                    className="w-40 rounded-lg shadow-lg"
                />
            </motion.div>
             <motion.div
                initial={{ x: '-100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute bottom-5 -rotate-20 left-15"
            >
                <img
                    src="https://i.pinimg.com/736x/ad/a7/9a/ada79afd2db935d7371a404b75010dc2.jpg"
                    alt="Travel 1"
                    className="w-40 rounded-lg shadow-lg"
                />
            </motion.div>
            

            <motion.div
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="absolute top-70 right-25"
            >
                <img
                    src="https://i.pinimg.com/736x/fd/7b/ec/fd7becf818dc6a4be682b5dc77a5b1e3.jpg"
                    alt="Travel 2"
                    className="w-40 rounded-lg shadow-lg -rotate-20 z-30"
                />
            </motion.div>
             <motion.div
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay:0.4 }}
                className="absolute top-18 right-15"
            >
                <img
                    src="https://i.pinimg.com/736x/21/46/53/214653fca16c0b37d87225fa84031e1e.jpg"
                    alt="Travel 2"
                    className="w-40 h-60 rounded-lg shadow-lg rotate-20 z-20 "
                />
            </motion.div>
             <motion.div
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute bottom-5 right-15"
            >
                <img
                    src="https://i.pinimg.com/736x/30/11/ab/3011ab53808bfa89f749068c469624d9.jpg"
                    alt="Travel 2"
                    className="w-40 rounded-lg shadow-lg rotate-20 z-10"
                />
            </motion.div>
        </div>
    );
}
