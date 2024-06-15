import { createClient } from "@supabase/supabase-js";

const link = "https://wvangigyoyvsawmckrsq.supabase.co"
const chave = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind2YW5naWd5b3l2c2F3bWNrcnNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg0MDEyMjksImV4cCI6MjAzMzk3NzIyOX0.R5-40o_jY6Ippu6mZGVmihIO4WJxj7kgbhkUH3qVjeo"

export const supabase = createClient(link, chave);