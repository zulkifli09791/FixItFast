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

    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return alert("Not logged in")

    let photoUrl = null
    if (photo) {
      const fileName = `${Date.now()}_${photo.name}`
      const { error: uploadError } = await supabase.storage
        .from('job-photos')
        .upload(fileName, photo)

      if (uploadError) {
        alert("Upload gagal")
        setLoading(false)
        return
      }

      photoUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/job-photos/${fileName}`
    }

    const { error } = await supabase.from('jobs').insert({
      user_id: user.id,
      service_type: service,
      location,
      description,
      photo_url: photoUrl,
      status: 'pending'
    })

    if (error) {
      alert("Gagal membuat permintaan")
    } else {
      alert("Permintaan berhasil dibuat!")
      onSuccess()
    }

    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label>Jenis Jasa</label>
        <select value={service} onChange={e => setService(e.target.value)} required className="input" />
          {/* <option value="">Pilih jasa</option>
          <option value="AC">Perbaikan AC</option>
          <option value="Listrik">Listrik</option>
          <option value="Kebersihan">Kebersihan</option>
          <option value="Pipa">Perbaikan Pipa</option>
        </select> */}
      </div>
      <div>
        <label>Lokasi</label>
        <input type="text" value={location} onChange={e => setLocation(e.target.value)} required className="input" />
      </div>
      <div>
        <label>Deskripsi</label>
        <textarea value={description} onChange={e => setDescription(e.target.value)} required className="input" rows={3}></textarea>
      </div>
      <div>
        <label>Foto (opsional)</label>
        <input type="file" accept="image/*" onChange={e => setPhoto(e.target.files?.[0] || null)} className="input" />
      </div>
      <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        {loading ? 'Mengirim...' : 'Kirim Permintaan'}
      </button>
    </form>
  )
}