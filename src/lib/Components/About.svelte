<script>
	import president from '$assets/president.png';
</script>

<section class="About-club bg-black">
	<div class="About md:container md:mx-auto">
		<h1 class="text-bold pink title Heading">Discover Cipher's Essence</h1>
		<p class="Content text-white">
			Cipher is a dynamic community for B.Tech students in North-Eastern Hill University, Shillong
			passionate about technology and innovation. Our mission is to foster a collaborative
			environment where members can enhance their technical skills, share knowledge, and work on
			exciting projects. We organize workshops, hackathons, and coding competitions to help members
			grow and learn from each other. Whether you're a beginner or an experienced coder, Cipher
			welcomes you to join us in exploring the world of technology and making a positive impact
			through our projects. Together, we aim to create a vibrant tech community that inspires
			creativity and innovation. Discover the world of IT with Cipher, the premier club for tech
			enthusiasts. Stay updated with our latest events and news. Our study sessions and workshops
			are designed to cover a wide range of IT topics. From beginner to advanced levels, these
			sessions provide valuable insights and practical knowledge. Cipher is more than just a club;
			it's a community. We encourage group discussions, teamwork, and networking opportunities to
			help you build lasting connections and collaborate on innovative projects. We believe in the
			power of collaboration and teamwork. Cipher provides a platform for members to work together
			on projects, share ideas, and learn from each other. Our members come from diverse backgrounds
			and skills, creating a rich environment for collaboration and growth.
		</p>
	</div>
	<div class="President md:container md:mx-auto">
		<h2 class="text-bold pink Lheading">Letter From Our President</h2>
		<div class="container">
			<div class="image">
				<img src={president} alt="" />
			</div>
			<div class="letter">
				<p class="text-white">
					Sample [Welcome to Cipher, the premier IT club at North-Eastern Hill University, Shillong.
					As the president of this vibrant community, I am thrilled to invite you to embark on a
					journey of learning, innovation, and collaboration. At Cipher, we believe in nurturing
					talent, fostering creativity, and building a supportive environment where everyone can
					thrive. Our club is a hub for tech enthusiasts who are eager to explore the ever-evolving
					world of technology. Whether you're just starting out or you're an experienced coder,
					Cipher has something for everyone. From workshops and hackathons to study sessions and
					collaborative projects, we aim to provide opportunities that help you grow both personally
					and professionally. Together, let's push the boundaries of what's possible and make a
					positive impact through technology. I look forward to seeing you at our events and working
					together to create something extraordinary. Warm regards, [Your President's Name]
					President, Cipher]
				</p>
			</div>
		</div>
	</div>
</section>

<style>
	.About-club {
		text-align: center;
		padding: 2rem;
		background: #0b0b0b;
		color: white;
		overflow-x: hidden;
	}

	.Heading,
	.Lheading {
		text-align: center;
		padding: 2rem 1rem;
		font-size: 3.5rem;
	}

	@media (max-width: 768px) {
		.Heading,
		.Lheading {
			font-size: 2rem;
			padding: 1rem;
		}
	}

	.Content {
		text-align: center;
		padding: 1rem;
		font-size: 1rem;
		line-height: 1.6;
	}

	.About,
	.President {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem 1rem;
	}

	.container {
		display: flex;
		justify-content: center;
		align-items: flex-start;
		flex-wrap: wrap; /* ✅ Important for responsiveness */
		gap: 2rem;
	}

	.letter {
		max-width: 500px;
		color: white;
		font-size: 1rem;
		text-align: left;
		line-height: 1.6;
	}

	.image {
		width: 300px;
		max-width: 90%;
		height: auto;
		border-radius: var(--radius-xl);
		overflow: hidden;
	}

	/* Optional: make letter text centered on mobile */
	@media (max-width: 768px) {
		.letter {
			text-align: center;
		}
	}
</style>
