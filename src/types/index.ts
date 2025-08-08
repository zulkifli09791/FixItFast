export type User = {
  id: string
  email: string
}

export type Job = {
  id: number
  user_id: string
  service_type: string
  location: string
  description: string
  photo_url: string | null
  status: 'pending'
  created_at: string
}

export type Profile = {
  id: string
  user_id: string
  full_name: string
  whatsapp: string
  services?: string[]
  working_hours?: string
  avatar_url?: string
}