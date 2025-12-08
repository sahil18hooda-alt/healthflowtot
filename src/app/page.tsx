'use client';
import { Stethoscope, User } from 'lucide-react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const Orb = dynamic(() => import('@/components/Orb'), { ssr: false });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#030712] p-4 relative overflow-hidden">
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div style={{ width: '100%', height: '100%', maxWidth: '1000px', maxHeight: '1000px', opacity: 0.8 }}>
          <Orb
            hoverIntensity={0.5}
            rotateOnHover={true}
            hue={0}
            forceHoverState={false}
          />
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-5xl h-screen">
        <div className="flex flex-col items-center justify-center flex-grow">
          <div className="text-center mb-12">
            <h1 className="font-headline text-6xl md:text-7xl font-bold text-[#60A5FA] mb-4 tracking-tight">
              HealthFlow
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-normal tracking-wide">
              Your seamless connection to modern healthcare.
            </p>
            <p className="mt-2 text-sm text-gray-500 font-medium">Choose your portal to get started.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl w-full px-4">
            <Link href="/dashboard?role=patient" className="w-full">
              <Card className="h-full text-center bg-[#0B1221]/60 border-white/5 hover:bg-[#0B1221]/80 hover:border-blue-500/30 transition-all duration-300 group cursor-pointer rounded-xl shadow-2xl backdrop-blur-sm">
                <CardHeader className="py-12 px-8">
                  <User className="h-12 w-12 mx-auto text-[#60A5FA] mb-6" strokeWidth={2} />
                  <CardTitle className="text-2xl text-white font-bold tracking-wide">Patient Portal</CardTitle>
                  <CardDescription className="text-gray-400 mt-3 text-sm leading-relaxed">
                    Access your health records, book appointments, and connect with your doctor.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
            <Link href="/dashboard?role=employee" className="w-full">
              <Card className="h-full text-center bg-[#0B1221]/60 border-white/5 hover:bg-[#0B1221]/80 hover:border-blue-500/30 transition-all duration-300 group cursor-pointer rounded-xl shadow-2xl backdrop-blur-sm">
                <CardHeader className="py-12 px-8">
                  <Stethoscope className="h-12 w-12 mx-auto text-[#60A5FA] mb-6" strokeWidth={2} />
                  <CardTitle className="text-2xl text-white font-bold tracking-wide">Doctor Portal</CardTitle>
                  <CardDescription className="text-gray-400 mt-3 text-sm leading-relaxed">
                    Manage your appointments, view patient requests, and track your schedule.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>

        <footer className="absolute bottom-8 text-center text-gray-500 text-xs font-medium tracking-wide">
          <p>Built for a better healthcare experience.</p>
        </footer>
      </div>
    </main>
  );
}
