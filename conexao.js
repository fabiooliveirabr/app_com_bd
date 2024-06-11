import { createClient } from "@supabase/supabase-js";

const link = "https://jwnyflazczkilkefgotg.supabase.co"
const chave = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3bnlmbGF6Y3praWxrZWZnb3RnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgxNDM3MDAsImV4cCI6MjAzMzcxOTcwMH0.M2xTFiA3t399FftZFFVgRBDiXWDR5Wkrt1audnGKBGw"

export const supabase = createClient(link, chave);