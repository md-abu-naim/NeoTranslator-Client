import React from 'react';

const History = () => {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Translation History</h1>
            <ul className="space-y-3">
                <li className="p-3 border rounded-lg shadow-sm bg-gray-100">
                    <p className="font-semibold">Hello</p>
                    <p className="text-gray-600">→ Hola</p>
                </li>
                <li className="p-3 border rounded-lg shadow-sm bg-gray-100">
                    <p className="font-semibold">Good Morning</p>
                    <p className="text-gray-600">→ Buenos días</p>
                </li>
                <li className="p-3 border rounded-lg shadow-sm bg-gray-100">
                    <p className="font-semibold">How are you?</p>
                    <p className="text-gray-600">→ ¿Cómo estás?</p>
                </li>
            </ul>
        </div>
    );
};

export default History;