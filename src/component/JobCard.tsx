import WhatsAppButton from './WhatsAppButton'
import LocationButton from './LocationButton'

export default function JobCard({ job }: { job: any }) {
  const message = `Halo, saya tertarik dengan jasa Anda: ${job.service_type} di ${job.location}.`

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-2xl transition-all">
      <h3 className="text-xl font-bold text-gray-800">{job.service_type}</h3>
      <p className="text-gray-600 mt-1">📍 {job.location}</p>
      <p className="mt-3 text-gray-700">{job.description}</p>
      
      {job.photo_url && (
        <img
          src={job.photo_url}
          alt="Lampiran"
          className="mt-3 w-full h-40 object-cover rounded-xl"
        />
      )}

      <div className="flex justify-between items-center mt-4 text-xs text-gray-500">
        <span>{new Date(job.created_at).toLocaleDateString()}</span>
        <span className="px-2 py-1 bg-green-500 text-white rounded-full text-xs">Tersedia</span>
      </div>

      <WhatsAppButton message={message} />
      <LocationButton address={job.location} />
    </div>
  )
}