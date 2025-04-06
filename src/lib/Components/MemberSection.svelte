<script>
	import Saqib from '$assets/president.png';
	import SectionWrapper from './SectionWrapper.svelte';

	export let members = [
		{
			name: 'Prof. Debdatta Kandar',
			role: 'Patron',
			description: 'HOD, IT Dept.',
			image: Saqib,
			linkedin: '',
			github: ''
		},
		{
			name: 'Dr. Sufal Das',
			role: 'Teacher in-charge',
			description: 'Ass. Professor, IT Dept.',
			image: Saqib,
			linkedin: 'https://www.linkedin.com/in/dr-sufal-das-96a94b52/',
			github: ''
		},
		{
			name: 'Mohammad Saqib',
			role: 'General Secretary',
			description: 'BTech IT 4th Year',
			image: Saqib,
			linkedin: 'https://www.linkedin.com/in/saqib745/',
			github: ''
		},

		{
			name: 'Abhi Nithaware',
			role: 'Asst. General Secretary',
			description: 'BTech IT 4th Year',
			image: Saqib,
			linkedin: 'https://www.linkedin.com/in/abhi-nitnaware/',
			github: ''
		},
		{
			name: 'Raje Alom',
			role: 'Finance Secretary',
			description: 'BTech IT 4th Year',
			image: Saqib,
			linkedin: 'https://www.linkedin.com/in/raje-alom-061773238/',
			github: ''
		},
		{
			name: 'Pyboyina Viswaja',
			role: 'Creative Secretary',
			description: 'BTech IT 4th Year',
			image: Saqib,
			linkedin: 'https://www.linkedin.com/in/pyboyina-viswaja/',
			github: ''
		},
		{
			name: 'Ujjwal Kumar',
			role: 'Academic Secretary',
			description: 'BTech IT 4th Year',
			image: Saqib,
			linkedin: 'https://www.linkedin.com/in/ujjwal-kumar-b44564238/',
			github: ''
		},
		{
			name: 'Palmsan A Sangma',
			role: 'Outreach Secretary',
			description: 'BTech IT 4th Year',
			image: Saqib,
			linkedin: 'https://www.linkedin.com/in/palmsan-a-sangma-907250238/',
			github: ''
		},
		{
			name: 'Bikash Barua',
			role: 'Publication Secretary',
			description: 'BTech IT 4th Year',
			image: Saqib,
			linkedin: 'https://www.linkedin.com/in/bikash-barua-662804217/',
			github: ''
		},
		{
			name: 'Ibapalei Shadap',
			role: 'Database Coordinator Secretary',
			description: 'BTech IT 4th Year',
			image: Saqib,
			linkedin: 'https://www.linkedin.com/in/ibapalei-shadap-b4a497262/',
			github: ''
		},
		{
			name: 'Liza Mehta',
			role: 'Executive Secretary',
			description: 'BTech IT 4th Year',
			image: Saqib,
			linkedin: '',
			github: ''
		},
		{
			name: 'Bimal Mochahary',
			role: 'Asst. Finance Sec',
			description: 'BTech IT 3rd Year',
			image: Saqib,
			linkedin: '',
			github: ''
		},
		{
			name: 'Hansh Raj',
			role: 'Asst. Academic Sec I',
			description: 'BTech IT 3rd Year',
			image: Saqib,
			linkedin: 'https://www.linkedin.com/in/hansh-raj-394a43312/',
			github: ''
		},
		{
			name: 'Soumojit Bhuin',
			role: 'Asst. Academic Sec II',
			description: 'BTech IT 2nd Year',
			image: Saqib,
			linkedin: 'https://www.linkedin.com/in/soumojit-bhuin-313328345/',
			github: ''
		},
		{
			name: 'Rehana Debbarma',
			role: 'Asst. Creative Sec',
			description: 'BTech IT 3rd Year',
			image: Saqib,
			linkedin: '',
			github: ''
		},
		{
			name: 'Erisaca Vaichei',
			role: 'Asst. Outreach Sec',
			description: 'BTech IT 3rd Year',
			image: Saqib,
			linkedin: '',
			github: ''
		},
		{
			name: 'Nabarup Daimary',
			role: 'Asst. Publication Sec',
			description: 'BTech IT 3rd Year',
			image: Saqib,
			linkedin: 'https://www.linkedin.com/in/nabarup-daimary-859050258/',
			github: ''
		},
		{
			name: 'Dibakar Patar',
			role: 'Asst. Database Coordinator Sec',
			description: 'BTech IT 3rd Year',
			image: Saqib,
			linkedin: 'https://www.linkedin.com/in/dibakarpatar/',
			github: ''
		},
		{
			name: 'Sajeed Ahmed',
			role: 'Asst. Executive Sec I',
			description: 'BTech IT 3rd Year',
			image: Saqib,
			linkedin: 'https://www.linkedin.com/in/sajeed-ahmed-ba5027203/',
			github: ''
		},
		{
			name: 'Nikunj Maheshwari',
			role: 'Asst. Executive Sec II',
			description: 'BTech IT 2nd Year',
			image: Saqib,
			linkedin: 'https://www.linkedin.com/in/nikunjm111/',
			github: ''
		},
		{
			name: 'Sourav Rabha',
			role: 'Asst. Executive Sec III',
			description: 'BTech IT 2nd Year',
			image: Saqib,
			linkedin: 'https://www.linkedin.com/in/sourav-rabha-727656332/',
			github: ''
		},
		{
			name: 'Kumar Kartik',
			role: 'Asst. Executive Sec IV',
			description: 'BTech IT 2nd Year',
			image: Saqib,
			linkedin: 'https://www.linkedin.com/in/kumar-kartik-ba6b10311/',
			github: ''
		},
		{
			name: 'Drona Bopche',
			role: 'Asst. Executive Sec V',
			description: 'BTech IT 2nd YearBTech IT 2nd Year',
			image: Saqib,
			linkedin: 'https://www.linkedin.com/in/drona-bopche-2345292b1/',
			github: ''
		}
	];
</script>

<SectionWrapper divId="team">
	<div class="members">
		<h2>Meet Our Team</h2>
		<div class="grid">
			{#each members as member}
				<div class="member-card">
					<img src={member.image} alt={member.name} />
					<h3>{member.name}</h3>
					<p>{member.role}</p>
					<p>{member.description}</p>
					<div class="links">
						<a href={member.linkedin} target="_blank">LinkedIn</a>
					</div>
				</div>
			{/each}
		</div>
	</div>
</SectionWrapper>

<style>
	.members {
		width: 100vw;
		text-align: center;
		padding: 50px;
		background: #0b0b0b;
		color: white;
		font-size: 3.5rem;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 20px;
		margin-top: 20px;
	}

	.member-card {
		background: #1a1a1a;
		padding: 20px;
		border-radius: 10px;
		transition: transform 0.3s ease-in-out;
	}

	.member-card:hover {
		transform: scale(1.05);
	}

	img {
		width: 100px;
		height: 100px;
		border-radius: 50%;
		object-fit: cover;
		margin-bottom: 10px;
	}

	.links a {
		display: inline-block;
		margin: 5px;
		color: #e6d5a3;
		text-decoration: none;
		font-size: 1rem; /* ↓ Smaller font size */
		font-weight: 500;
		transition: color 0.2s ease-in-out;
	}

	.links a:hover {
		color: #f5e7b1;
		text-decoration: underline;
	}

	@media (max-width: 600px) {
		img {
			width: 80px;
			height: 80px;
		}
	}
</style>
