import { createClient } from '@supabase/supabase-js';
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';

const supabaseUrl = PUBLIC_SUPABASE_URL;
const supabaseKey = PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

export async function submitContactForm(name: string, email: string, message: string) {
	const { data, error } = await supabase.from('cipher').insert([{ name, email, message }]);

	if (error) {
		console.error('Error inserting:', error.message);
	} else {
		console.log('Inserted data:', data);
	}

	return { data, error };
}
