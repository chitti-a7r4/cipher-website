<script>
	import { fade } from 'svelte/transition';
	import { writable } from 'svelte/store';
	import Ethnic from '$assets/eth.png';
	import Gaming from '$assets/game.png';
	import quiz from '$assets/quiz.png';
	import treasure from '$assets/tre2.png';
	import national from '$assets/national.png';

	let categories = [
		{
			title: 'Ethnic Day',
			desc: '',
			image: Ethnic
		},
		{
			title: 'Gaming Competition',
			desc: '',
			image: Gaming
		},
		{
			title: 'INDIAN NATIONALS CUBING CHAMPIONSHIP',
			desc: '',
			image: national
		},
		{
			title: 'CIPHER-DECIPHER',
			desc: '',
			image: quiz
		},
		{
			title: 'TREASURE HUNT 2.0',
			desc: '',
			image: treasure
		}
	];

	let activeIndex = writable(0);

	function prevCategory() {
		activeIndex.update((n) => (n > 0 ? n - 1 : categories.length - 1));
	}

	function nextCategory() {
		activeIndex.update((n) => (n < categories.length - 1 ? n + 1 : 0));
	}
</script>

<section class="container" in:fade>
	<div class="categories">
		<h1 class="pink">Cipher's Exciting Events</h1>
		{#each categories as category, i}
			<h2 on:click={() => activeIndex.set(i)} class:selected={$activeIndex === i}>
				{category.title}
			</h2>
		{/each}
	</div>

	<div class="content">
		<button on:click={prevCategory}>&lt;</button>
		<p>{$activeIndex >= 0 ? categories[$activeIndex].desc : ''}</p>
		<button on:click={nextCategory}>&gt;</button>
	</div>

	<div class="image">
		<img
			src={$activeIndex >= 0 ? categories[$activeIndex].image : ''}
			alt={categories[$activeIndex]?.title}
		/>
	</div>
</section>

<style>
	.container {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		padding: 50px;
		background: #0b0b0b;
		color: white;
		width: 100%;
		min-height: 100%;
		box-sizing: border-box;
		max-width: 100vw;
		overflow-x: hidden;
	}

	.categories {
		width: 30%;
	}

	.categories h2 {
		font-size: 2rem;
		cursor: pointer;
		color: #555;
		transition: color 0.3s ease-in-out;
	}

	.categories h2:hover,
	.categories h2.selected {
		color: white;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

	.content p {
		margin-top: 10px;
		color: white;
		font-size: 1rem;
		max-width: 400px;
	}

	.image {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 20px;
	}

	img {
		width: 100%;
		border-radius: 10px;
	}

	button {
		background: none;
		border: 1px solid white;
		color: white;
		padding: 0.5rem;
		cursor: pointer;
		font-size: 1.5rem;
	}
</style>
