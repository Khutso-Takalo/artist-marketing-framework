import { createClient } from '@supabase/supabase-js';


const supabaseUrl = 'https://vgpeatnwebuqduldddfo.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZncGVhdG53ZWJ1cWR1bGRkZGZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIwNTc1OTksImV4cCI6MjA2NzYzMzU5OX0.PnSum0DrXtmLEYQ_VUBW8IGHG7dxJ_u2yctcdpJnRxI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
