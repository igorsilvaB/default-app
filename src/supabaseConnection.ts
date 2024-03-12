//import supabase
import { createClient } from "@supabase/supabase-js";
// import dotenv
import dotenv from "dotenv";

dotenv.config()

const supaBaseUrl=process.env.SUPABASE_URL || ''
const supabaseKey = process.env.SUPABASE_KEY || ''

const supabase= createClient(supaBaseUrl ,supabaseKey , {
    auth: {
      persistSession : false 
    }
})

export {supabase}


