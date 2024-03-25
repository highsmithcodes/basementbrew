
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { useEffect, useState } from 'react'

const supabaseUrl = 'https://zhjbfentlagcvhqwljxz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpoamJmZW50bGFnY3ZocXdsanh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA2NDcxOTgsImV4cCI6MjAyNjIyMzE5OH0.2-aT8OWZxvhNnUmFRt1IGoj1vANeAEXE37uPggTnx7E'
const supabase = createClient(supabaseUrl, supabaseKey)

export default function AuthWrapper({children}){
    const [session, setSession] = useState(null)

    useEffect(() => {
        const session = supabase.auth.getSession();
        setSession(session)
    })

    if(!session) {
        return <Auth supabaseClient={supabase} />
    } else {
        return children
    }
}