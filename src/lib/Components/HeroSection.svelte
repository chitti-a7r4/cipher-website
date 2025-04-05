<script>
	import logo from '$assets/logo.png';
	import background from '$assets/bg.mp4';
</script>

<section class="hero">
	<div class="video-container">
		<video src={background} autoplay muted loop> </video>
		<div class="overlay-text">
			<!-- <h1 class="text-bold">Cipher.</h1> -->

			<h2 class="mb-xs">Explore IT Excellences with</h2>
			<img class="logo" src={logo} alt="Cipher Logo" />
		</div>
	</div>
</section>

<style>
	/* html,
	body {
		margin: 0;
		padding: 0;
		overflow-x: hidden; 
	} */

	.hero {
		position: relative;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: black;
		overflow: hidden;
	}

	.video-container {
		position: relative;
		width: 100%;
		max-width: 100%;
		height: auto;
		overflow: hidden;
	}

	video {
		width: 100%;
		height: auto;
		display: block;
		object-fit: cover;
	}

	.overlay-text {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		color: white;
		font-size: 2rem;
		font-weight: bold;
		text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
		max-width: 90vw;
		padding: 1rem;
		box-sizing: border-box;
	}

	.logo {
		max-width: 80%;
		height: auto;
		margin-top: 1rem;
	}

	@media (max-width: 768px) {
		.overlay-text {
			font-size: 1.2rem;
		}
	}
</style>
