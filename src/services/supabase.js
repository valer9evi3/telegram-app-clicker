import { createClient } from '@supabase/supabase-js';
//oU10zZLbDfGpxSK7 - DB
const supabaseUrl = 'https://fhrrzxdsgyxwduwohcaf.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZocnJ6eGRzZ3l4d2R1d29oY2FmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk3NTk2NzQsImV4cCI6MjA0NTMzNTY3NH0.AN2cqh3rz0LMwYzHFegX9NnL4Hw_3_oYjwt2fGDp_8c';

const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
