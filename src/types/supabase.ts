// Supabase types and interfaces
export interface Database {
  public: {
    Tables: {
      jobs: {
        Row: {
          id: string
          title: string
          description: string
          location: string
          salary: string
          type: 'full-time' | 'part-time' | 'contract'
          category: string
          company: string
          contact: string
          created_at: string
          updated_at: string
        }
        Insert: {
          title: string
          description: string
          location: string
          salary: string
          type: 'full-time' | 'part-time' | 'contract'
          category: string
          company: string
          contact: string
        }
        Update: {
          title?: string
          description?: string
          location?: string
          salary?: string
          type?: 'full-time' | 'part-time' | 'contract'
          category?: string
          company?: string
          contact?: string
        }
      }
      users: {
        Row: {
          id: string
          email: string
          full_name: string
          phone: string
          role: 'user' | 'admin'
          created_at: string
          updated_at: string
        }
        Insert: {
          email: string
          full_name: string
          phone: string
          role?: 'user' | 'admin'
        }
        Update: {
          email?: string
          full_name?: string
          phone?: string
          role?: 'user' | 'admin'
        }
      }
    }
  }
}

export type Job = Database['public']['Tables']['jobs']['Row']
export type NewJob = Database['public']['Tables']['jobs']['Insert']
export type User = Database['public']['Tables']['users']['Row']
export type NewUser = Database['public']['Tables']['users']['Insert']
