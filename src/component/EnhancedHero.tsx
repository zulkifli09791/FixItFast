'use client';

import { motion } from 'framer-motion';
import { Search, Star, Users, Zap, MapPin, Calendar } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function EnhancedHero() {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/10 rounded-full"
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0
              }}
              animate={{
                y: [null, Math.random() * window.innerHeight],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6">
              Solusi Cepat untuk
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Semua Masalah
              </span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-lg">
              Temukan jasa profesional terpercaya untuk perbaikan, instalasi, dan layanan teknis dengan cepat dan mudah.
            </p>

            {/* Search Bar */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-white/70" />
                  <input
                    type="text"
                    placeholder="Cari jasa apa?"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <div className="flex-1">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-white/70" />
                  <input
                    type="text"
                    placeholder="Lokasi"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <button className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-xl font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all duration-200">
                  Cari
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 text-white">
              <div>
                <div className="text-2xl font-bold">10K+</div>
                <div className="text-sm opacity-80">Jasa Terdaftar</div>
              </div>
              <div>
                <div className="text-2xl font-bold">50K+</div>
                <div className="text-sm opacity-80">Pelanggan Puas</div>
              </div>
              <div>
                <div className="text-2xl font-bold">4.9</div>
                <div className="text-sm opacity-80">Rating Rata-rata</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-30"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Respon Cepat</div>
                      <div className="text-white/70 text-sm">Dalam 15 menit</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                      <Star className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Terpercaya</div>
                      <div className="text-white/70 text-sm">Provider terverifikasi</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Booking Mudah</div>
                      <div className="text-white/70 text-sm">Online 24/7</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
