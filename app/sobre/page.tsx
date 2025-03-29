'use client';
import { useState, useEffect } from 'react';

interface AboutData {
    title: string;
    content: string;
}

export default function Sobre(){
    const [data, setData] = useState<AboutData | null>(null);

    useEffect(() => {
        fetch('api/about')
        .then(response => response.json())
        .then((data: AboutData) => setData(data));
    }, []);

    if(!data) return <div>Carregando...</div>;

    return (
        <main className="p-8">
            <h1 className="text-3xl font-bold text-primary">{data.title}</h1>
            <p className="mt-4 text-gray-600">{data.content}</p>
        </main>
    )
}