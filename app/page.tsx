'use client';

import Link from 'next/link';
import { 
  Euro, 
  GraduationCap, 
  Users, 
  FileText, 
  AlertCircle, 
  TrendingUp,
  Calendar,
  CheckCircle
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold">SRH Mutter-Kind Verwaltung</h1>
          <p className="text-blue-100 mt-1">Neckargemünd - Bildungswerke & Fördergelder</p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8 overflow-x-auto py-4">
            <Link href="/" className="text-blue-600 border-b-2 border-blue-600 pb-2 whitespace-nowrap font-medium">
              Dashboard
            </Link>
            <Link href="/foerdergelder" className="text-gray-600 hover:text-blue-600 pb-2 whitespace-nowrap">
              Fördergelder
            </Link>
            <Link href="/bildungswerk" className="text-gray-600 hover:text-blue-600 pb-2 whitespace-nowrap">
              Bildungswerk
            </Link>
            <Link href="/bewohner" className="text-gray-600 hover:text-blue-600 pb-2 whitespace-nowrap">
              Bewohner
            </Link>
            <Link href="/jugendamt" className="text-gray-600 hover:text-blue-600 pb-2 whitespace-nowrap">
              Jugendamt
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Aktive Förderanträge</p>
                <p className="text-3xl font-bold text-gray-800 mt-1">12</p>
              </div>
              <Euro className="text-green-500" size={40} />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Laufende Kurse</p>
                <p className="text-3xl font-bold text-gray-800 mt-1">8</p>
              </div>
              <GraduationCap className="text-blue-500" size={40} />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Bewohner (Gesamt)</p>
                <p className="text-3xl font-bold text-gray-800 mt-1">24</p>
              </div>
              <Users className="text-purple-500" size={40} />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Fällige Berichte</p>
                <p className="text-3xl font-bold text-gray-800 mt-1">5</p>
              </div>
              <FileText className="text-orange-500" size={40} />
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upcoming Deadlines */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Calendar className="text-red-500 mr-2" size={24} />
              <h2 className="text-xl font-bold">Anstehende Fristen</h2>
            </div>
            <div className="space-y-3">
              <div className="border-l-4 border-red-500 pl-4 py-2 bg-red-50">
                <p className="font-medium">BAföG Verwendungsnachweis</p>
                <p className="text-sm text-gray-600">Fällig: 20.11.2025 (5 Tage)</p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4 py-2 bg-yellow-50">
                <p className="font-medium">ESF-Bericht Q4</p>
                <p className="text-sm text-gray-600">Fällig: 30.11.2025 (15 Tage)</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50">
                <p className="font-medium">Jugendamt Entwicklungsbericht</p>
                <p className="text-sm text-gray-600">Fällig: 05.12.2025 (20 Tage)</p>
              </div>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <TrendingUp className="text-green-500 mr-2" size={24} />
              <h2 className="text-xl font-bold">Aktuelle Aktivitäten</h2>
            </div>
            <div className="space-y-3">
              <div className="flex items-start">
                <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-medium">Bildungsgutschein bewilligt</p>
                  <p className="text-sm text-gray-600">Maria Schmidt - vor 2 Stunden</p>
                </div>
              </div>
              <div className="flex items-start">
                <AlertCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-medium">Neuer Kursteilnehmer</p>
                  <p className="text-sm text-gray-600">Berufsvorbereitung - vor 5 Stunden</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-medium">§19 SGB VIII Antrag eingereicht</p>
                  <p className="text-sm text-gray-600">Anna Müller - vor 1 Tag</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Budget Overview */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Budget-Übersicht 2025</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-gray-600 mb-2">BAföG & Bildungsgutscheine</p>
              <div className="bg-gray-200 rounded-full h-4 mb-1">
                <div className="bg-green-500 h-4 rounded-full" style={{width: '75%'}}></div>
              </div>
              <p className="text-sm text-gray-600">180.000 € / 240.000 €</p>
            </div>
            <div>
              <p className="text-gray-600 mb-2">ESF-Mittel</p>
              <div className="bg-gray-200 rounded-full h-4 mb-1">
                <div className="bg-blue-500 h-4 rounded-full" style={{width: '60%'}}></div>
              </div>
              <p className="text-sm text-gray-600">90.000 € / 150.000 €</p>
            </div>
            <div>
              <p className="text-gray-600 mb-2">§ 19 SGB VIII</p>
              <div className="bg-gray-200 rounded-full h-4 mb-1">
                <div className="bg-purple-500 h-4 rounded-full" style={{width: '85%'}}></div>
              </div>
              <p className="text-sm text-gray-600">425.000 € / 500.000 €</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-16 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 SRH Berufsbildungswerk Neckargemünd - Jugendhilfe educare</p>
          <p className="text-gray-400 text-sm mt-2">Entwickelt für die Mutter-Kind-Gruppe</p>
        </div>
      </footer>
    </div>
  );
}
