<script>
	export let divId;
</script>

<section id={divId} class={'flex min-h-screen flex-col px-4'}>
	<div class="mx-auto flex w-full max-w-[1400px] flex-1 flex-col">
		<slot></slot>
	</div>
</section>
