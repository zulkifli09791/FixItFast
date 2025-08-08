'use client'

import { usePathname, useRouter } from 'next/navigation'

export default function MobileNav() {
  const pathname = usePathname()
  const router = useRouter()

  return (
    <nav className="md:hidden bg-white border-t fixed bottom-0 left-0 right-0 flex justify-around items-center h-16">
      <button
        onClick={() => router.push('/')}
        className={pathname === '/' ? 'text-blue-600' : ''}
      >
        🏠
      </button>
      <button
        onClick={() => router.push('/dashboard')}
        className={pathname.includes('/dashboard') ? 'text-blue-600' : ''}
      >
        📋
      </button>
      <button
        onClick={() => router.push('/profile')}
        className={pathname.includes('/profile') ? 'text-blue-600' : ''}
      >
        👤
      </button>
    </nav>
  )
}