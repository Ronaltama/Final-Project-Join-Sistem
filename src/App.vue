<script setup>
import ContentFrame1 from "./components/ContentFrame1.vue";
import MitraLogo from "./components/MitraLogo.vue";
import KartuEvent from "./components/KartuEevent.vue";
import KomponenUtama from "./components/KomponenUtama.vue";
import DaftarSekarang from "./components/DaftarSekarang.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <header class="flex justify-between px-32 py-6">
    <img class="w-24" src="@/assets/img/Brand.svg" alt="logo join-sistem" />
    <ul class="flex">
      <li class="mx-3"><a href="#">Home</a></li>
      <li class="mx-3"><a href="#">Blog</a></li>
      <li class="mx-3"><a href="#">About Us</a></li>
      <li class="mx-3"><a href="#">Contact Us</a></li>
    </ul>
    <button
      type="button"
      class="bg-primary px-4 py-3 rounded-full text-white font-bold"
    >
      Contact Us
    </button>
  </header>
  <div id="app">
    <CtaSection />
  </div>
  <main>
    <ContentFrame1 />
    <MitraLogo />
    <KartuEvent />
    <KomponenUtama />
    <DaftarSekarang />
    <Footer />
  </main>
</template>
