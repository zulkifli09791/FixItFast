export default function WhatsAppButton({ message }: { message: string }) {
  const url = `https://wa.me/?text=${encodeURIComponent(message)}`
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-green-500 text-white text-center py-2 rounded-lg mt-3 hover:bg-green-600"
    >
      💬 Chat via WhatsApp
    </a>
  )
}