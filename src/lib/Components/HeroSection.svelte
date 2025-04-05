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
	.hero {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		padding: 0px;
		background: #0b0b0b;
		color: white;
		width: 100%;
		min-height: 100%;
		box-sizing: border-box;
		max-width: 100vw;
		overflow-x: hidden;
	}
	.video-container {
		position: relative;
		width: 100%;
		height: auto;
	}

	video {
		width: 100%;
		height: auto;
		display: block;
	}

	.overlay-text {
		max-width: 1024px;

		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		color: white;
		font-size: 2rem;
		font-weight: bold;
		text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
	}
</style>
