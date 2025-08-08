export default function LocationButton({ address }: { address: string }) {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  const encodedAddress = encodeURIComponent(address)
  const url = isMobile
    ? `comgooglemaps://?q=${encodedAddress}`
    : `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`

  const openMap = () => {
    window.open(url, '_blank')
  }

  return (
    <button
      onClick={openMap}
      className="text-blue-600 underline text-sm mt-2 hover:text-blue-800"
    >
      📍 Lihat di Google Maps
    </button>
  )
}