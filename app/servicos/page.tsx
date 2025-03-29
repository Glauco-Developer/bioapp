"use client";
import { useEffect, useState } from "react";

interface Service {
	id: number;
	name: string;
	description: string;
}

export default function Servicos() {
	const [services, setServices] = useState<Service[]>([]);

	useEffect(() => {
		fetch('api/services')
			.then(response => response.json())
			.then((data: Service[]) => setServices(data));
	}, [])

	if(!services.length) return <div>Carregando...</div>;

	return (
		<main className="p-8">
			<h1 className="text-3xl font-bold text-primary">Nossos Serviços</h1>
			<p className="mt-4 text-gray-600">Aqui você encontra os serviços oferecidos pela clínica.</p>
			<ul>
				{services.map(service => (
					<li key={service.id}>
						<h2>{service.name}</h2>
						<p>{service.description}</p>
					</li>
				))}
			</ul>
		</main>
	);
}
