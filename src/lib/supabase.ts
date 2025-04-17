import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wvqxedebkqblkmhbflmk.supabase.co';
const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind2cXhlZGVia3FibGttaGJmbG1rIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NDkxNjQwNCwiZXhwIjoyMDYwNDkyNDA0fQ.LeWN_PTutu1H8qe5lnQvALPGaxpjYIZwxmX1Nprw4Gc';

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
