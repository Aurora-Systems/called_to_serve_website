import { createClient } from "@supabase/supabase-js";
import { db_url, key } from "./access";

const db = createClient(db_url,key);

export default db;