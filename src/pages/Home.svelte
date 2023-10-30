<script lang="ts">
  import Footer from "../layout/Footer.svelte";
  import Nav from "../layout/Nav.svelte";
</script>

<div class="h-screen bg-gray-100 flex flex-col">
  <div class="h-full w-full grid grid-rows-[5rem_1fr_5rem]">
    <Nav />
    <div
      class="h-full sm:w-[640px] md:w-[768px] lg:w-[1024px] flex flex-col p-12 justify-center m-auto gap-4"
    >
      <div class="text-4xl">The Manhattan Chess Club</div>
      <p>
        We meet on Thursdays and Sundays 5pm at the <a
          href="https://tryufm.org/"
          class="underline">UFM Learning Center</a
        >
      </p>
      <a
        href="mailto:mullinsel93@gmail.com"
        class="block p-2 px-6 w-fit bg-blue-600 hover:bg-blue-700 text-white rounded-full"
        >Contact Us</a
      >
    </div>
    <div class="flex flex-row justify-between">
      <a href="#/whatINeed">What do I need to play?</a>
      <!-- <a href="#/elo-perf-calc">Rating Calculator</a> -->
      <a href="http://www.kansaschess.org/">Kansas Chess Association</a>
      <a href="#/donors">Donors List</a>
      <a
        href="https://www.paypal.com/donate/?hosted_button_id=N7BF4U2LKREKU&fbclid=IwAR335J2n6SALXAnVYFxivOOypj9-9tUcr5jPDWT-Rim7m26bN8yLFczjsTM"
        >Donate to MHK Chess</a
      >
      <a href="https://new.uschess.org/user/216380/affiliates/3059012">
        <img
          src="images/USCFlogo.png"
          alt="USCFlogo"
          class="h-full rounded-lg"
        />
      </a>
    </div>
  </div>
</div>
