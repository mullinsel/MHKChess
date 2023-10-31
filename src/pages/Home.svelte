<script lang="ts">
  import Footer from "../layout/Footer.svelte";
  import Nav from "../layout/Nav.svelte";
</script>

<div class="h-screen bg-gray-100 flex flex-col">
  <Nav />
  <div class="flex justify-center items-center grow">
    <div
      class="h-full sm:w-[640px] md:w-[768px] lg:w-[1024px] justify-center grid grid-cols-2 items-center gap-4"
    >
      <div class="flex flex-col gap-3">
        <div class="text-3xl leading-tight">The Manhattan Chess Club</div>
        <p>
          We meet on Thursdays and Sundays 5pm at the <a
            href="https://tryufm.org/"
            class="underline">UFM Learning Center</a
          >
        </p>
        <div class="flex flex-row gap-3">
          <a
            href="mailto:mullinsel93@gmail.com"
            class="block p-2 px-6 w-fit bg-blue-600 hover:bg-blue-700 text-white rounded-full"
            >Contact Us</a
          >
          <!-- <a
            href="#/whatINeed"
            class="block p-2 px-6 w-fit bg-blue-600 hover:bg-blue-700 text-white rounded-full"
            >What do I need to play?</a
          > -->
        </div>
      </div>
      <img
        src="images/landing_photo.jpg"
        alt="playing-chess"
        class="w-full rounded-lg drop-shadow-2xl"
      />
    </div>
  </div>
  <!-- <div class="flex flex-row justify-between row-span-1">
      <a href="#/elo-perf-calc">Rating Calculator</a>
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
    </div> -->
</div>
