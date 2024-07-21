import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://tgdupemoqpxetuqyzmmm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRnZHVwZW1vcXB4ZXR1cXl6bW1tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA5NTk3NjYsImV4cCI6MjAzNjUzNTc2Nn0.GkjxHSohtYz8_X5QpLF5pZkJrXcd05S59I0MsUR-Ijs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
