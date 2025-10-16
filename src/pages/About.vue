<script setup>
import About from "@/components/About.vue";
import BannerSecond from "@/components/BannerSecond.vue";
import Reviews from "@/components/Reviews.vue";
import Location from "@/components/Location.vue";
</script>

<template>
      <main class="about">
            <About class="pt-124" />
            <section>
                  <BannerSecond />
            </section>
            <Reviews />
            <Location />
      </main>
</template>

<style scoped></style>
