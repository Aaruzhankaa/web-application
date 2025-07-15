'use client';

import { useState } from 'react';

export default function Greeting() {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleClick = async () => {
        if (!name.trim()) return;
        const res = await fetch(`http://localhost:8080/greet?name=${name}`);
        const text = await res.text();
        setMessage(text);
        setName('');
    };

    return (
        <div className="p-8 bg-white shadow-xl rounded-xl text-center max-w-md w-full">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Введите имя</h1>

            <div className="flex gap-2 justify-center">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900 w-2/3"
                    placeholder="Например, Aruzhan"
                />
                <button
                    onClick={handleClick}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition duration-300"
                >
                    Поздороваться
                </button>
            </div>

            {message && (
                <p className="mt-6 text-xl font-semibold text-purple-700">{message}</p>
            )}
        </div>
    );
}
