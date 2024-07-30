import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://rqamclzuhzyncdyecsqc.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJxYW1jbHp1aHp5bmNkeWVjc3FjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE1NDI5MDEsImV4cCI6MjAzNzExODkwMX0.guQED-TxUecOsM_pegjdUGq4m6c8O429UqQO0KNn9O8"
);
