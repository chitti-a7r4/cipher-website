<script>
	import linkedin from '$assets/linkedin.svg';
	import instagram from '$assets/instagram.svg';
	import logo from '$assets/logo.png';
</script>

<footer class="footer">
	<div class="footer-content">
		<img src={logo} alt="Cipher Logo" class="logo" />

		<div class="social-icons">
			<a
				href="https://www.linkedin.com/company/cipher-nehu/"
				target="_blank"
				rel="noopener"
				aria-label="LinkedIn"
			>
				<img src={linkedin} alt="LinkedIn" />
			</a>
			<a
				href="https://www.instagram.com/cipher_nehu/"
				target="_blank"
				rel="noopener"
				aria-label="Instagram"
			>
				<img src={instagram} alt="Instagram" />
			</a>
		</div>
	</div>

	<div class="copyright">
		<p>
			© {new Date().getFullYear()} <span class="pink"> Cipher Club. </span> All rights reserved.
		</p>
		<p>
			Website made by <a href="https://anuragsaud.com/" target="_blank"
				><span class="pink">Anurag Saud</span></a
			>
		</p>
	</div>
</footer>

<style>
	.footer {
		background-color: #0b0b0b;
		color: white;
		padding: 2rem 1rem;
		text-align: center;
	}

	.footer-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	.logo {
		width: 120px;
		height: auto;
	}

	.social-icons {
		display: flex;
		gap: 1.2rem;
	}

	.social-icons img {
		width: 24px;
		height: 24px;
		filter: brightness(0) invert(1);
		transition: transform 0.3s ease;
	}

	.social-icons img:hover {
		transform: scale(1.2);
	}

	.copyright {
		margin-top: 1rem;
		font-size: 0.9rem;
		color: #aaa;
	}
	@media (max-width: 480px) {
		.logo {
			width: 100px;
		}

		.social-icons img {
			width: 22px;
			height: 22px;
		}

		.footer {
			padding: 1.5rem 1rem;
		}

		.copyright {
			font-size: 0.8rem;
		}
	}
</style>
