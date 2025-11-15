'use client';

import Link from 'next/link';
import { ArrowLeft, GraduationCap, Users, Calendar, Award } from 'lucide-react';

export default function BildungswerkPage() {
  const kurse = [
    { id: 1, name: 'Berufsvorbereitung Basis', teilnehmer: 8, startDatum: '01.09.2025', status: 'laufend', fortschritt: 65 },
    { id: 2, name: 'Hauptschulabschluss', teilnehmer: 12, startDatum: '15.08.2025', status: 'laufend', fortschritt: 80 },
    { id: 3, name: 'EDV Grundlagen', teilnehmer: 6, startDatum: '01.11.2025', status: 'laufend', fortschritt: 30 },
    { id: 4, name: 'Bewerbungstraining', teilnehmer: 10, startDatum: '20.10.2025', status: 'laufend', fortschritt: 45 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <Link href="/" className="inline-flex items-center text-blue-100 hover:text-white mb-2">
            <ArrowLeft size={20} className="mr-1" /> Zurück zum Dashboard
          </Link>
          <h1 className="text-3xl font-bold">Bildungswerk-Verwaltung</h1>
          <p className="text-blue-100 mt-1">SRH Berufsbildungswerk Neckargemünd</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Aktive Kurse</p>
                <p className="text-3xl font-bold text-blue-600">{kurse.length}</p>
              </div>
              <GraduationCap size={40} className="text-blue-600" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Teilnehmer Gesamt</p>
                <p className="text-3xl font-bold text-green-600">36</p>
              </div>
              <Users size={40} className="text-green-600" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Abschlüsse 2025</p>
                <p className="text-3xl font-bold text-purple-600">14</p>
              </div>
              <Award size={40} className="text-purple-600" />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {kurse.map((kurs) => (
            <div key={kurs.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{kurs.name}</h3>
                  <div className="flex items-center mt-2 space-x-4 text-sm text-gray-600">
                    <span className="flex items-center">
                      <Users size={16} className="mr-1" /> {kurs.teilnehmer} Teilnehmer
                    </span>
                    <span className="flex items-center">
                      <Calendar size={16} className="mr-1" /> Start: {kurs.startDatum}
                    </span>
                  </div>
                </div>
                <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  {kurs.status}
                </span>
              </div>

              <div className="mb-2">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Kursfortschritt</span>
                  <span className="font-semibold">{kurs.fortschritt}%</span>
                </div>
                <div className="bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-blue-600 h-3 rounded-full transition-all duration-300" 
                    style={{width: `${kurs.fortschritt}%`}}
                  ></div>
                </div>
              </div>

              <div className="mt-4 flex space-x-2">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Details ansehen
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  Teilnehmer verwalten
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
