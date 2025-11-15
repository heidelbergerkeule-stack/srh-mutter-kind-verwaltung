'use client';
import { GraduationCap, Users, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function Bildungswerk() {
  const kurse = [
    { name: 'Hauptschulabschluss', teilnehmer: 6, start: '01.09.2024', ende: '30.06.2025', status: 'Laufend' },
    { name: 'Realschulabschluss', teilnehmer: 4, start: '01.09.2024', ende: '30.06.2025', status: 'Laufend' },
    { name: 'Ausbildung Einzelhandel', teilnehmer: 3, start: '01.08.2024', ende: '31.07.2027', status: 'Laufend' },
    { name: 'EDV Grundkurs', teilnehmer: 8, start: '15.11.2024', ende: '15.01.2025', status: 'Geplant' }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link href="/"><h1 className="text-2xl font-bold text-gray-900 cursor-pointer">SRH Mutter-Kind Verwaltung</h1></Link>
            <div className="flex space-x-4">
              <Link href="/foerdergelder" className="text-gray-600 hover:text-gray-900">Fördergelder</Link>
              <Link href="/bildungswerk" className="text-blue-600 font-medium">Bildungswerk</Link>
              <Link href="/bewohner" className="text-gray-600 hover:text-gray-900">Bewohner</Link>
              <Link href="/jugendamt" className="text-gray-600 hover:text-gray-900">Jugendamt</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Bildungswerk & Kurse</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <GraduationCap className="w-8 h-8 text-blue-600 mb-2" />
            <p className="text-sm text-gray-600">Aktive Kurse</p>
            <p className="text-2xl font-bold text-gray-900">{kurse.length}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <Users className="w-8 h-8 text-green-600 mb-2" />
            <p className="text-sm text-gray-600">Teilnehmer gesamt</p>
            <p className="text-2xl font-bold text-gray-900">21</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <Calendar className="w-8 h-8 text-purple-600 mb-2" />
            <p className="text-sm text-gray-600">Abschlüsse 2024</p>
            <p className="text-2xl font-bold text-gray-900">5</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Kurs</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Teilnehmer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Start</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ende</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {kurse.map((kurs, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{kurs.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{kurs.teilnehmer}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{kurs.start}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{kurs.ende}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                      {kurs.status}
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
