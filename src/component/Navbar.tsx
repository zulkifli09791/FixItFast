'use client'

import { usePathname, useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [user, setUser] = useState<any>(null)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser()
      setUser(data.user)
    }
    getUser()

    const { data: listener } = supabase.auth.onAuthStateChange(() => getUser())
    return () => listener?.subscription.unsubscribe()
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }

  if (pathname === '/login' || pathname === '/register') return null

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">FixItFast</h1>
        <div>
          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-sm">Hi, {user.email?.split('@')[0]}</span>
              <button onClick={handleLogout} className="btn-sm bg-red-500 px-3 py-1 rounded">
                Logout
              </button>
            </div>
          ) : (
            <button onClick={() => router.push('/login')} className="btn-sm bg-green-500 px-3 py-1 rounded">
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}