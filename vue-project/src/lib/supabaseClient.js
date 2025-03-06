import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://jarlqhxecolklradejku.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImphcmxxaHhlY29sa2xyYWRlamt1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEyMTY2MTgsImV4cCI6MjA1Njc5MjYxOH0.URZH25ORRXzJYttgVdPw9gcsc3sBhNIeccRy-4i9xg8";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
