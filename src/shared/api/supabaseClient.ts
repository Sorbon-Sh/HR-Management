
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://yshbywmxtgidegspjgal.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlzaGJ5d214dGdpZGVnc3BqZ2FsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg2MjM5NTQsImV4cCI6MjA3NDE5OTk1NH0.zCvsDjZVNF7m20QEl7U789na9QPiecLQ4YmmbqciA2I'



const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase