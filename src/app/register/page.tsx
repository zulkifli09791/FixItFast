'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'

export default function RegisterPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState<'customer' | 'provider'>('customer')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const { error } = await supabase.auth.signUp({ email, password })

    if (error) {
      alert(error.message)
    } else {
      alert('Akun berhasil dibuat! Silakan login.')
      router.push('/login')
    }

    setLoading(false)
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Daftar</h2>
      <form onSubmit={handleRegister}>
        <div className="mb-4">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label>Peran</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value as any)}
            className="w-full border p-2 rounded"
          >
            <option value="customer">Pelanggan</option>
            <option value="provider">Penyedia Jasa</option>
          </select>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          {loading ? 'Mendaftar...' : 'Daftar'}
        </button>
      </form>
      <p className="mt-4 text-center">
        Sudah punya akun?{' '}
        <a href="/login" className="text-blue-600">
          Masuk di sini
        </a>
      </p>
    </div>
  )
}