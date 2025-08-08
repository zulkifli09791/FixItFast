'use client'

import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'
import { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [user, setUser] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser()
      setUser(data.user)
    }
    getUser()

    const { listener } = supabase.auth.onAuthStateChange(() => getUser())
    return () => listener?.subscription.unsubscribe()
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1
          onClick={() => router.push('/')}
          className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer"
        >
          FixItFast
        </h1>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          {user ? (
            <button onClick={handleLogout} className="text-sm text-gray-600 hover:text-red-600">
              Logout
            </button>
          ) : (
            <button
              onClick={() => router.push('/login')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm px-4 py-1 rounded"
            >
              Masuk
            </button>
          )}
        </div>
      </div>
    </header>
  )
}