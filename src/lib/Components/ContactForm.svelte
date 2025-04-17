<script lang="ts">
	import { supabase } from '$lib/supabase';
	import SectionWrapper from './SectionWrapper.svelte';

	let name = '';
	let email = '';
	let message = '';
	let loading = false;
	let success = false;
	let error = '';

	async function handleSubmit() {
		error = '';
		success = false;

		if (!name.trim() || !email.trim() || !message.trim()) {
			error = 'Please fill out all fields.';
			return;
		}

		loading = true;

		const { error: insertError } = await supabase.from('cipher').insert([{ name, email, message }]);

		loading = false;

		if (insertError) {
			error = insertError.message;
		} else {
			success = true;
			name = '';
			email = '';
			message = '';
		}
	}
</script>

<SectionWrapper divId="contact">
	<div class="page-bg">
		<div class="form-wrapper">
			<form class="contact-form" on:submit|preventDefault={handleSubmit}>
				<h2>Contact Us</h2>

				{#if error}
					<p class="error">{error}</p>
				{/if}

				{#if success}
					<p class="success">Message sent successfully! 🎉</p>
				{/if}

				<input type="text" placeholder="Your Name" bind:value={name} />
				<input type="email" placeholder="Your Email" bind:value={email} />
				<textarea placeholder="Your Message" bind:value={message}></textarea>

				<button type="submit" disabled={loading}>
					{#if loading}
						Sending...
					{:else}
						Send
					{/if}
				</button>
			</form>
		</div>
	</div>
</SectionWrapper>

<style>
	:global(html, body) {
		margin: 0;
		padding: 0;
		height: 100%;
		background: #0b0b0b;
		color: white;
		font-family: 'Inter', sans-serif;
	}

	.page-bg {
		min-height: 100vh;
		display: flex;
		background: linear-gradient(to right, #151515 35%, #0b0b0b 65%);
	}

	.form-wrapper {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		padding: 6rem;
	}

	.contact-form {
		background: #141414;
		color: white;
		padding: 3rem;
		border-radius: 1.5rem;
		width: 100%;
		max-width: 700px;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		box-shadow: 0 0 40px #ff00ff33;
	}

	h2 {
		font-size: 3rem;
		margin-bottom: 1rem;
	}

	input,
	textarea {
		background: #1f1f1f;
		border: 1px solid #444;
		color: white;
		padding: 1rem;
		border-radius: 0.75rem;
		font-size: 1.2rem;
		width: 100%;
	}

	textarea {
		resize: vertical;
		min-height: 150px;
	}

	button {
		background: #ff00ff;
		color: white;
		padding: 1rem 2rem;
		border: none;
		border-radius: 0.75rem;
		cursor: pointer;
		font-size: 1.2rem;
		font-weight: bold;
		transition: background 0.3s;
	}

	button:hover {
		background: #e600e6;
	}

	button[disabled] {
		background: #777;
		cursor: not-allowed;
	}

	.error {
		color: red;
		font-size: 1rem;
	}

	.success {
		color: #00ff99;
		font-size: 1rem;
	}

	@media (max-width: 768px) {
		.page-bg {
			flex-direction: column;
			background: #151515;
		}

		.form-wrapper {
			padding: 2rem;
			justify-content: center;
		}

		.contact-form {
			padding: 2rem;
			border-radius: 1rem;
			box-shadow: 0 0 20px #ff00ff33;
		}

		h2 {
			font-size: 2.2rem;
		}

		input,
		textarea {
			font-size: 1rem;
			padding: 0.75rem;
		}

		button {
			font-size: 1rem;
			padding: 0.75rem 1.5rem;
		}
	}
</style>
