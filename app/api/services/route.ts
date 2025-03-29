import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

interface Service {
  id: number;
  name: string;
  description: string;
}

const filePath = path.join(process.cwd(), 'data/services.json');

export async function GET() {
  const data = fs.readFileSync(filePath, 'utf-8');
  return NextResponse.json<Service[]>(JSON.parse(data));
}

export async function POST(request: Request) {
  const body: Omit<Service, 'id'> = await request.json();
  const data = fs.readFileSync(filePath, 'utf-8');
  const services: Service[] = JSON.parse(data);

  const newService: Service = { id: Date.now(), ...body };
  services.push(newService);

  fs.writeFileSync(filePath, JSON.stringify(services, null, 2));
  return NextResponse.json(newService, { status: 201 });
}
