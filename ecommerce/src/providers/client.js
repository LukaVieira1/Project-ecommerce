import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xwyyruuyhgamejiwxlgh.supabase.co";
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const { data: Shoes, error } = await supabase.from("Shoe").select("*");

export default supabase;
