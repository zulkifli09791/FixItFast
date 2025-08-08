export type User = {
  id: string
  email: string
  role: 'customer' | 'provider'
}

export type Job = {
  id: number
  user_id: string
  service_type: string
  location: string
  description: string
  photo_url?: string | null
  status: 'pending' | 'taken'
  created_at: string
  taken_by?: string | null
}

export type Provider = {
  id: string
  user_id: string
  services: string[]
  location: string
  whatsapp: string
  working_hours: string
  rating?: number
}