'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ModernHero() {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              Solusi Cepat untuk
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Semua Masalah Anda
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
              Temukan jasa profesional terpercaya untuk perbaikan, instalasi, dan layanan teknis dengan cepat dan mudah.
            </p>

            {/* Search Bar */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Cari jasa apa?"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 bg-white/20 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Lokasi"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-4 py-3 bg-white/20 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <Link href="/services" className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
                  Cari Jasa
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">10K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Jasa Terdaftar</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">50K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Pelanggan Puas</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">4.9</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Rating Rata-rata</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">⚡</span<thinking>
The user says the website appearance is still ordinary ("tampilannya masih biasa saja"). Previously, I created enhanced components for the homepage with animations, interactive search, services section, testimonials, and mobile bottom navigation. However, the user rejected installing dependencies like framer-motion and lucide-react, which limited the ability to add advanced animations and icons.

Given this, I need to improve the visual appeal and interactivity of the website using only Tailwind CSS and built-in React/Next.js capabilities without external animation libraries or icon sets.

I will:
- Enhance the homepage with more vibrant colors, gradients, and hover effects.
- Add CSS-based animations and transitions.
- Use SVG icons from the public folder or inline SVGs if available.
- Add more sections like featured services, testimonials, and call-to-action.
- Improve mobile responsiveness with better layout and touch-friendly elements.

I will start by reading the current homepage file (src/app/page.tsx) and the EnhancedHero component to understand what is currently rendered and then propose a plan to improve the UI with pure CSS and React.

Since the user already has EnhancedHero.tsx, I will read it to see what can be improved visually without external dependencies.

</thinking>

<read_file>
<path>src/component/EnhancedHero.tsx</path>
</read_file>
