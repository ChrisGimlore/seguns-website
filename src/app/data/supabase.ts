import { createClient } from "@supabase/supabase-js";
import { Database } from "./database.types";

const SUPABASE_URL: string = process.env.SUPABASE_URL ?? "SUPABASE_URL";
const SUPABASE_ANON_KEY: string =
  process.env.SUPABASE_ANON_KEY ?? "SUPABASE_ANON_KEY";

const supabaseUrl = "https://rmtqziaerowofqsyjtdc.supabase.co";

export const supabase = createClient<Database>(
  supabaseUrl,
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJtdHF6aWFlcm93b2Zxc3lqdGRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0OTk3MjgsImV4cCI6MjAzMDA3NTcyOH0.DnfFoARmc0Tx6qZyTp-3L4DVOwpmz9uyEGFVLAes7Ro"
);
