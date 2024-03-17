
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'

const supabaseUrl = 'https://zhjbfentlagcvhqwljxz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpoamJmZW50bGFnY3ZocXdsanh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA2NDcxOTgsImV4cCI6MjAyNjIyMzE5OH0.2-aT8OWZxvhNnUmFRt1IGoj1vANeAEXE37uPggTnx7E'
const supabase = createClient(supabaseUrl, supabaseKey)

export const SupabaseAuth = () => <Auth supabaseClient={supabase} />