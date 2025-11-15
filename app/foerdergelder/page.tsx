'use client';

import Link from 'next/link';
import { ArrowLeft, Plus, Search, Filter, Euro, AlertCircle, CheckCircle, Clock } from 'lucide-react';

export default function FoerdergelderPage() {
  const antrage = [
    { id: 1, typ: 'BAföG', antragsteller: 'Maria Schmidt', status: 'bewilligt', betrag: '12.000 €', datum: '15.10.2025' },
    { id: 2, typ: 'Bildungsgutschein', antragsteller: 'Anna Müller', status: 'in Bearbeitung', betrag: '8.500 €', datum: '01.11.2025' },
    { id: 3, typ: 'ESF-Mittel', antragsteller: 'Sarah Weber', status: 'eingereicht', betrag: '15.000 €', datum: '10.11.2025' },
    { id: 4, typ: '§ 19 SGB VIII', antragsteller: 'Julia Fischer', status: 'bewilligt', betrag: '18.000 €', datum: '05.10.2025' },
    { id: 5, typ: 'Aufstiegs-BAföG', antragsteller: 'Lisa Wagner', status: 'abgelehnt', betrag: '10.000 €', datum: '20.10.2025' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'bewilligt': return 'bg-green-100 text-green-800';
      case 'in Bearbeitung': return 'bg-yellow-100 text-yellow-800';
      case 'eingereicht': return 'bg-blue-100 text-blue-800';
      case 'abgelehnt': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'bewilligt': return <CheckCircle size={20} className="text-green-600" />;
      case 'in Bearbeitung': return <Clock size={20} className="text-yellow-600" />;
      case 'eingereicht': return <AlertCircle size={20} className="text-blue-600" />;
      case 'abgelehnt': return <AlertCircle size={20} className="text-red-600" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <Link href="/" className="inline-flex items-center text-blue-100 hover:text-white mb-2">
            <ArrowLeft size={20} className="mr-1" /> Zurück zum Dashboard
          </Link>
          <h1 className="text-3xl font-bold">Fördergelder-Management</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 text-sm">Gesamt bewilligt</p>
            <p className="text-2xl font-bold text-green-600">695.000 €</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 text-sm">In Bearbeitung</p>
            <p className="text-2xl font-bold text-yellow-600">23.500 €</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 text-sm">Eingereicht</p>
            <p className="text-2xl font-bold text-blue-600">15.000 €</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 text-sm">Gesamt Anträge</p>
            <p className="text-2xl font-bold text-gray-800">48</p>
          </div>
        </div>

        {/* Actions Bar */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 w-full md:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Antragsteller suchen..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Filter size={20} className="mr-2" /> Filter
              </button>
              <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <Plus size={20} className="mr-2" /> Neuer Antrag
              </button>
            </div>
          </div>
        </div>

        {/* Applications List */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fördertyp
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Antragsteller
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Betrag
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Datum
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Aktionen
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {antrage.map((antrag) => (
                <tr key={antrag.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Euro size={20} className="text-blue-600 mr-2" />
                      <span className="font-medium">{antrag.typ}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                    {antrag.antragsteller}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {getStatusIcon(antrag.status)}
                      <span className={`ml-2 px-2 py-1 text-xs rounded-full ${getStatusColor(antrag.status)}`}>
                        {antrag.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-900">
                    {antrag.betrag}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {antrag.datum}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button className="text-blue-600 hover:text-blue-800 mr-3">Bearbeiten</button>
                    <button className="text-gray-600 hover:text-gray-800">Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
