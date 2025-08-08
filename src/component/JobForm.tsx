'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function JobForm({ onSuccess }: { onSuccess: () => void }) {
  const [service, setService] = useState('')
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')
  const [photo, setPhoto] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const {  { user } } = await supabase.auth.getUser()
    if (!user) return alert('Harap login terlebih dahulu')

    let photoUrl = null
    if (photo) {
      const fileName = `${Date.now()}_${photo.name}`
      const { error } = await supabase.storage
        .from('job-photos')
        .upload(fileName, photo)

      if (!error) {
        photoUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/job-photos/${fileName}`
      }
    }

    const { error } = await supabase
      .from('jobs')
      .insert({ user_id: user.id, service_type: service, location, description, photo_url: photoUrl, status: 'pending' })

    if (error) {
      alert('Gagal membuat permintaan')
    } else {
      alert('Permintaan berhasil dibuat!')
      onSuccess()
    }

    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-1 font-medium">Jenis Jasa</label>
        <input
          type="text"
          value={service}
          onChange={(e) => setService(e.target.value)}
          placeholder="Contoh: Perbaikan AC, Bersihkan rumah, dll"
          required
          className="w-full border p-2 rounded"
        />
      </div>
      <div>
        <label className="block mb-1 font-medium">Lokasi</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Contoh: Jakarta Selatan"
          required
          className="w-full border p-2 rounded"
        />
      </div>
      <div>
        <label className="block mb-1 font-medium">Deskripsi</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Jelaskan kebutuhanmu..."
          required
          rows={3}
          className="w-full border p-2 rounded"
        ></textarea>
      </div>
      <div>
        <label className="block mb-1 font-medium">Foto (opsional)</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setPhoto(e.target.files?.[0] || null)}
          className="w-full border p-2 rounded"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded hover:from-blue-700 hover:to-purple-700"
      >
        {loading ? 'Mengirim...' : 'Kirim Permintaan'}
      </button>
    </form>
  )
}