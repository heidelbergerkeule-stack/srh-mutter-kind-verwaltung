'use client';
import { Users, Baby } from 'lucide-react';
import Link from 'next/link';

export default function Bewohner() {
  const bewohner = [
    { name: 'Maria Müller', kind: 'Tim (2 Jahre)', aufnahme: '15.03.2024', status: 'Aktiv' },
    { name: 'Lisa Schmidt', kind: 'Emma (1 Jahr)', aufnahme: '01.05.2024', status: 'Aktiv' },
    { name: 'Sarah Weber', kind: 'Max (3 Jahre)', aufnahme: '20.06.2024', status: 'Aktiv' },
    { name: 'Anna Becker', kind: 'Lea (6 Monate)', aufnahme: '10.08.2024', status: 'Aktiv' }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link href="/"><h1 className="text-2xl font-bold text-gray-900 cursor-pointer">SRH Mutter-Kind Verwaltung</h1></Link>
            <div className="flex space-x-4">
              <Link href="/foerdergelder" className="text-gray-600 hover:text-gray-900">Fördergelder</Link>
              <Link href="/bildungswerk" className="text-gray-600 hover:text-gray-900">Bildungswerk</Link>
              <Link href="/bewohner" className="text-blue-600 font-medium">Bewohner</Link>
              <Link href="/jugendamt" className="text-gray-600 hover:text-gray-900">Jugendamt</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Bewohnerverwaltung</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <Users className="w-8 h-8 text-purple-600 mb-2" />
            <p className="text-sm text-gray-600">Mütter/Väter</p>
            <p className="text-2xl font-bold text-gray-900">{bewohner.length}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <Baby className="w-8 h-8 text-pink-600 mb-2" />
            <p className="text-sm text-gray-600">Kinder</p>
            <p className="text-2xl font-bold text-gray-900">{bewohner.length}</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Mutter/Vater</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Kind</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Aufnahme</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {bewohner.map((person, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{person.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{person.kind}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{person.aufnahme}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                      {person.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
