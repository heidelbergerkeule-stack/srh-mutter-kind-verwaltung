'use client';
import { FileText, AlertCircle, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function Jugendamt() {
  const berichte = [
    { bewohner: 'Maria Müller', typ: '§ 19 SGB VIII Hilfeplan', frist: '30.11.2024', status: 'Offen' },
    { bewohner: 'Lisa Schmidt', typ: 'Entwicklungsbericht', frist: '15.12.2024', status: 'In Arbeit' },
    { bewohner: 'Anna Becker', typ: 'Quartalsbericht', frist: '31.12.2024', status: 'Offen' }
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
              <Link href="/bewohner" className="text-gray-600 hover:text-gray-900">Bewohner</Link>
              <Link href="/jugendamt" className="text-blue-600 font-medium">Jugendamt</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Jugendamt & Berichte</h2>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
          <div className="flex items-start">
            <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5 mr-3" />
            <div>
              <h3 className="text-sm font-medium text-orange-800">3 Berichte fällig</h3>
              <p className="mt-1 text-sm text-orange-700">Bitte Fristen beachten und zeitnah bearbeiten.</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Bewohner</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Berichtstyp</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Frist</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Aktionen</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {berichte.map((bericht, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{bericht.bewohner}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{bericht.typ}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{bericht.frist}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                      {bericht.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <button className="text-blue-600 hover:text-blue-900">Bearbeiten</button>
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
