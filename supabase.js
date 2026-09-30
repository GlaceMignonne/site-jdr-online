const SUPABASE_URL = "https://mxdlexribvplijzzclai.supabase.co";
const SUPABASE_KEY = "sb_publishable_s3TJXky6IH9EOGLBuYw9Yg_1VXIbZQu";

console.log("URL Supabase :", SUPABASE_URL);
console.log("Clé utilisée :", SUPABASE_KEY.substring(0, 18) + "...");

window.supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

console.log("Supabase initialisé :", window.supabaseClient);
