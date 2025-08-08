'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import JobForm from '@/component/JobForm'
import JobCard from '@/component/JobCard'

export default function Dashboard() {
  const [jobs, setJobs] = useState<any[]>([])
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const init = async () => {
      const {  { user } } = await supabase.auth.getUser()
      if (!user) return window.location.href = '/login'
      setUser(user)

      const { data } = await supabase
        .from('jobs')
        .select('*')
        .order('created_at', { ascending: false })

      setJobs(data || [])

      // Realtime
      const channel = supabase
        .channel('jobs')
        .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'jobs' }, (payload) => {
          setJobs(prev => [payload.new, ...prev])
        })
        .subscribe()

      return () => supabase.removeChannel(channel)
    }
    init()
  }, [])

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Permintaan Terbaru
      </h1>

      <div className="max-w-2xl mx-auto mb-10 card">
        <h2 className="text-xl font-semibold mb-4">Buat Permintaan Jasa</h2>
        <JobForm onSuccess={() => window.location.reload()} />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {jobs.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">Belum ada permintaan.</p>
        ) : (
          jobs.map(job => <JobCard key={job.id} job={job} />)
        )}
      </div>
    </div>
  )
}