import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-800">FixItFast</h1>
        <p className="mt-4 text-lg text-gray-600">Platform jasa on-demand terpercaya</p>
        <div className="mt-8 space-x-4">
          <Link href="/login" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Masuk
          </Link>
          <Link href="/register" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
            Daftar
          </Link>
        </div>
      </div>
    </div>
  )
}