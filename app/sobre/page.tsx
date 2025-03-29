'use client';
import { useState, useEffect } from 'react';

export default function Sobre(){
    const [title, setTitle] = useState('testing inicial');

    useEffect(() => {
        setTimeout(() => {
            setTitle('10')
        }, 3000);
    });

    return (
        <main className="p-8">
            <h1 className="text-3xl font-bold text-primary">{title}</h1>
            <p className="mt-4 text-gray-600">Aqui você encontra os serviços oferecidos pela clínica.</p>
        </main>
    )
}