<script>
    import '../app.css';
</script>
<header>
    <div class="flex justify-center w-full">
        <a class="mx-4 text-lg" href="/">Home</a>
        <a class="mx-4 text-lg" href="/about">About</a>
    </div>
</header>
<main class="p-8 max-w-6xl mx-auto">
	<!-- page content -->
	<slot />
</main>