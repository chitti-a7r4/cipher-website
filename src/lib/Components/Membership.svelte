<script lang="ts">
	import { supabase } from '$lib/supabase';
	import SectionWrapper from './SectionWrapper.svelte';

	let cipherId = '';
	let email = '';
	let dob = '';
	let userMessage = 'Enter details to check membership.';

	const checkMembership = async () => {
		if (!cipherId || !email || !dob) {
			userMessage = '⚠️ Please fill in all fields.';
			return;
		}

		const { data, error } = await supabase
			.from('cipher')
			.select('*')
			.eq('cipher_id', cipherId)
			.eq('email', email)
			.eq('dob', dob)
			.single();

		if (error || !data) {
			userMessage = '❌ No member found with the provided Cipher ID, Email, and Date of Birth.';
		} else {
			userMessage = `✅ Member Found: ${data.name} (${data.department})`;
		}
	};
</script>

<SectionWrapper divId="membership">
	<section class="membership-section">
		<h1>🔍 Check your Membership</h1>

		<div class="membership-card">
			<div class="form-box">
				<input type="text" bind:value={cipherId} placeholder="Cipher ID" />
				<input type="email" bind:value={email} placeholder="Your Email" />
				<input type="text" bind:value={dob} placeholder="dd-mm-yyyy" />
				<button on:click={checkMembership}>Search</button>
			</div>

			<div class="result-box">
				<h3>User Details</h3>
				<p>{userMessage}</p>
			</div>
		</div>
	</section>
</SectionWrapper>

<style>
	.membership-section {
		min-height: 100vh;
		background: #0b0b0b;
		color: white;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 4rem 1rem;
		text-align: center;
	}

	h1 {
		font-size: 5rem;
		margin-bottom: 6rem;
		color: #ff00ff;
	}

	.membership-card {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 2rem;
		width: 100%;
		max-width: 900px;
		margin: 0 auto;
	}

	.form-box,
	.result-box {
		background: #1a1a1a;
		padding: 2rem;
		border-radius: 1rem;
		box-shadow: 0 4px 25px rgba(245, 3, 233, 0.2);
		width: 100%;
		height: 100%;
		max-width: 433px;
		max-height: 1500px;
		box-sizing: border-box;
	}

	input {
		width: 100%;
		margin-bottom: 1rem;
		padding: 1rem;
		border-radius: 0.5rem;
		border: none;
		background: #2b2b2b;
		color: white;
		font-size: 1.1rem;
	}

	input::placeholder {
		color: #aaa;
	}

	button {
		width: 100%;
		padding: 1rem;
		background: #ff00ff;
		color: #000;
		border: none;
		border-radius: 0.5rem;
		font-weight: bold;
		cursor: pointer;
		font-size: 1.05rem;
		transition: background 0.3s ease;
	}

	button:hover {
		background: #ff00ff;
	}

	.result-box h3 {
		color: #ff00ff;
		margin-bottom: 1rem;
		font-size: 1.3rem;
	}

	.result-box p {
		color: #eee;
		font-size: 1rem;
		word-wrap: break-word;
	}

	@media (min-width: 768px) {
		.membership-card {
			flex-direction: row;
			align-items: flex-start;
		}
	}

	@media (max-width: 767px) {
		h2 {
			font-size: 1.8rem;
		}

		.membership-card {
			flex-direction: column;
			align-items: center;
		}

		.form-box,
		.result-box {
			width: 90%;
		}
	}
</style>
