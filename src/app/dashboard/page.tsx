'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'
import JobForm from '@/component/JobForm'
import JobCard from '@/component/JobCard'

export default function Dashboard() {
  const [role, setRole] = useState<string>('customer')
  const [jobs, setJobs] = useState<any[]>([])
  const [user, setUser] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    const init = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return router.push('/login')

      setUser(user)
      const savedRole = localStorage.getItem('role') || 'customer'
      setRole(savedRole)

      const { data } = await supabase.from('jobs').select('*').eq('user_id', user.id)
      setJobs(data || [])
    }
    init()
  }, [router])

  const handleJobCreated = () => {
    alert("Job berhasil dibuat!")
    // Refresh list
    supabase.from('jobs').select('*').eq('user_id', user.id).then(res => setJobs(res.data || []))
  }

  if (!user) return <p>Loading...</p>

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard {role === 'customer' ? 'Pelanggan' : 'Penyedia'}</h1>

      {role === 'customer' ? (
        <div>
          <h2>Buat Permintaan Jasa</h2>
          <JobForm onSuccess={handleJobCreated} />
          
          <h2 className="mt-8 mb-4">Riwayat Permintaan</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {jobs.length === 0 ? (
              <p>Tidak ada permintaan</p>
            ) : (
              jobs.map(job => (
                <JobCard key={job.id} job={job} />
              ))
            )}
          </div>
        </div>
      ) : (
        <ProviderDashboard jobs={jobs} />
      )}
    </div>
  )
}

function ProviderDashboard({ jobs }: { jobs: any[] }) {
  const [allJobs, setAllJobs] = useState<any[]>([])

  useEffect(() => {
    const fetchJobs = async () => {
      const { data } = await supabase.from('jobs').select('*').eq('status', 'pending')
      setAllJobs(data || [])
    }
    fetchJobs()

    // Optional: Realtime update
    const channel = supabase.channel('jobs').on(
      'postgres_changes',
      { event: 'INSERT', schema: 'public', table: 'jobs' },
      (payload) => {
        setAllJobs(prev => [payload.new, ...prev])
      }
    ).subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  const handleTakeJob = async (job: any) => {
    const { data: { user } } = await supabase.auth.getUser()
    await supabase.from('jobs').update({ status: 'taken', taken_by: user?.id }).eq('id', job.id)
    alert("Job berhasil diambil!")
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Permintaan Tersedia</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {allJobs.length === 0 ? (
          <p>Tidak ada job tersedia</p>
        ) : (
          allJobs.map(job => (
            <JobCard
              key={job.id}
              job={job}
              onTake={() => {
                const message = `Halo, saya penyedia jasa dari FixItFast ingin menangani permintaan Anda: ${job.service_type}.`
                window.open(`https://wa.me/${job.whatsapp}?text=${encodeURIComponent(message)}`)
                handleTakeJob(job)
              }}
            />
          ))
        )}
      </div>
    </div>
  )
}