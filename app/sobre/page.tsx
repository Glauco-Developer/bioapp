'use client';
import { useState, useEffect } from 'react';

interface SobreData {
    title: string;
    content: string;
}

export default function Sobre(){
    const [data, setData] = useState<SobreData | null>(null);

    useEffect(() => {
        fetch('api/sobre')
        .then(response => response.json())
        .then((data: SobreData) => setData(data));
    }, []);

    if(!data) return <div>Carregando...</div>;

    return (
        <main className="p-8">
            <h1 className="text-3xl font-bold text-primary">{data.title}</h1>
            <p className="mt-4 text-gray-600">{data.content}</p>
        </main>
    )
}