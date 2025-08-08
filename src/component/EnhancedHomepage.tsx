'use client';

import Link from 'next/link';

export default function EnhancedHomepage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              FixItFast
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Solusi cepat untuk semua masalah Anda dengan jasa profesional terpercaya.
            </p>
            <Link href="/register" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
              Mulai Sekarang
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Layanan Populer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Pilih dari berbagai jasa profesional yang siap membantu Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Perbaikan AC', icon: '❄️', description: 'Service AC rumah & kantor dengan teknisi berpengalaman', count: '1.2K+' },
              { title: 'Listrik & Plumbing', icon: '⚡', description: 'Instalasi & perbaikan listrik rumah tangga & industri', count: '800+' },
              { title: 'Plumbing', icon: '🏠', description: 'Perbaikan pipa, saluran air, dan water heater', count: '950+' },
              { title: 'Otomotif', icon: '🚗', description: 'Service mobil & motor, ganti oli, tune-up', count: '600+' },
              { title: 'Gadget', icon: '📱', description: 'Perbaikan HP, laptop, dan perangkat elektronik', count: '1.5K+' },
              { title: 'IT Support', icon: '💻', description: 'Setting jaringan, instalasi software, troubleshooting', count: '400+' }
            ].map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-white/80 text-sm">{service.description}</p>
                <div className="mt-2 text-sm text-white/60">{service.count} Provider</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Siap Membantu Anda?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Temukan solusi cepat untuk semua masalah Anda dengan jasa profesional terpercaya.
          </p>
          <Link href="/register" className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-200">
            Mulai Sekarang
          </Link>
        </div>
      </section>
    </div>
  );
}
