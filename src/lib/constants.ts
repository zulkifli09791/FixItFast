// Application constants
export const APP_NAME = 'FixItFast'
export const APP_VERSION = '1.0.0'

// API endpoints
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'

// Supabase
export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!
export const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Storage
export const STORAGE_BUCKET = 'fixitfast-storage'

// Job categories
export const JOB_CATEGORIES = [
  'Electronics',
  'Plumbing',
  'Electrical',
  'Carpentry',
  'Painting',
  'Cleaning',
  'Moving',
  'Gardening',
  'Other'
] as const

// Job types
export const JOB_TYPES = [
  'full-time',
  'part-time',
  'contract'
] as const

// Locations
export const LOCATIONS = [
  'New York',
  'Los Angeles',
  'Chicago',
  'Houston',
  'Phoenix',
  'Philadelphia',
  'San Antonio',
  'San Diego',
  'Dallas',
  'San Jose'
] as const
