<script lang="ts">
    import Nav from '../layout/Nav.svelte';
</script>

<div class="h-screen bg-gray-100 flex flex-col">
    <div class="h-full w-full grid grid-rows-[5rem_1fr]">
        <Nav />
        <div class="h-full sm:w-[640px] md:w-[768px] lg:w-[1024px] flex flex-col p-12 justify-center m-auto">
            <h1 class="font-heading text-4xl font-black">
                The Manhattan Chess Club
            </h1>
            <p>
                Thursdays and Sundays 5pm at the <a href="https://tryufm.org/" class="underline">UFM Learning Center</a>
            </p>
        </div>
    </div>
</div>
