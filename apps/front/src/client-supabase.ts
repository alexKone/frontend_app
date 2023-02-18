import { createClient } from '@supabase/supabase-js';
import constants from "./constants";

//@ts-ignore
export const supabase = createClient(constants.supabase_url, constants.supabase_api_key)
