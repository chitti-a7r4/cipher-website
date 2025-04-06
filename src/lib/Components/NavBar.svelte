<script>
	import logo from '$assets/logo.png';
	let isOpen = false;

	function toggleMenu() {
		isOpen = !isOpen;
	}
</script>

<nav class="navbar">
	<div class="container">
		<a href="/" class="logo">
			<img src={logo} alt="Cipher Logo" />
		</a>

		<button class="hamburger" on:click={toggleMenu} aria-label="Toggle Menu" aria-expanded={isOpen}>
			<div class="bar"></div>
			<div class="bar"></div>
			<div class="bar"></div>
		</button>

		<ul class:open={isOpen}>
			<li><a href="#about">About</a></li>
			<li><a href="#events">Events</a></li>
			<li><a href="#team">Team</a></li>
			<li><a href="#contact">Contact</a></li>
		</ul>
	</div>
</nav>

<style>
	.navbar {
		background-color: #0b0b0b;
		color: white;
		padding: 1rem 2rem;
		position: fixed;
		width: 100%;
		top: 0;
		left: 0;
		z-index: 999;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
	}

	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 1200px;
		margin: 0 auto;
	}

	.logo img {
		width: 120px;
		height: auto;
	}

	ul {
		display: flex;
		gap: 2rem;
		list-style: none;
		transition: max-height 0.3s ease-in-out;
	}

	li a {
		color: white;
		text-decoration: none;
		font-weight: 500;
		transition: color 0.3s;
	}

	li a:hover,
	li a:focus {
		color: #ff00ff;
		outline: none;
	}

	.hamburger {
		display: none;
		flex-direction: column;
		gap: 5px;
		background: none;
		border: none;
		cursor: pointer;
	}

	.bar {
		width: 25px;
		height: 3px;
		background-color: white;
	}

	@media (max-width: 768px) {
		.hamburger {
			display: flex;
		}

		ul {
			position: absolute;
			top: 100%;
			left: 0;
			width: 100%;
			background-color: #0b0b0b;
			flex-direction: column;
			gap: 1rem;
			padding: 1rem 0;
			text-align: center;
			max-height: 0;
			overflow: hidden;
		}

		ul.open {
			max-height: 300px;
		}
	}

	:global(#about),
	:global(#events),
	:global(#team),
	:global(#contact) {
		scroll-margin-top: 100px;
	}
</style>
