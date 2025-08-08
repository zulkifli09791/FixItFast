import { Job } from '@/types'

export default function JobCard({ job, onTake }: { job: Job, onTake?: () => void }) {
  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white">
      <h3 className="font-semibold text-lg">{job.service_type}</h3>
      <p className="text-gray-600 text-sm">📍 {job.location}</p>
      <p className="mt-2 text-gray-700">{job.description}</p>
      {job.photo_url && (
        <img src={job.photo_url} alt="Job" className="mt-2 w-full h-40 object-cover rounded" />
      )}
      <p className="text-xs text-gray-500 mt-2">Dibuat: {new Date(job.created_at).toLocaleString()}</p>
      {onTake && (
        <button onClick={onTake} className="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Ambil Job
        </button>
      )}
    </div>
  )
}