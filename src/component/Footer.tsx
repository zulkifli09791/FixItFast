// src/components/Footer.tsx

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-red py-6 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col items-center space-y-2">
          {/* Logo atau Nama Aplikasi */}
          <h2 className="text-xl font-bold">FixItFast</h2>
          
          {/* Deskripsi Singkat */}
          <p className="text-gray-300 text-sm">
            Platform jasa on-demand untuk perbaikan AC, listrik, kebersihan, dan lainnya.
          </p>
          
          {/* Copyright */}
          <p className="text-gray-400 text-xs">
            &copy; {new Date().getFullYear()} FixItFast. Semua hak dilindungi.
          </p>
        </div>
      </div>
    </footer>
  )
}