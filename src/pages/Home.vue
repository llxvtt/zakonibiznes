<script setup>
import Header from "@/components/Header.vue";
import Hero from "@/components/Hero.vue";
import Benefits from "@/components/Benefits.vue";
import Services from "@/components/Services.vue";
import ServicesSecond from "@/components/ServicesSecond.vue";
import ServicesThird from "@/components/ServicesThird.vue";
import Banner from "@/components/Banner.vue";
import Articles from "@/components/Articles.vue";
import Faq from "@/components/Faq.vue";
import BannerSecond from "@/components/BannerSecond.vue";
import Reviews from "@/components/Reviews.vue";
import Location from "@/components/Location.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
      <main>
            <Hero />
            <Benefits />
            <Services />
            <ServicesSecond />
            <ServicesThird />
            <section>
                  <Banner />
            </section>
            <Articles />
            <Faq />
            <section>
                  <BannerSecond />
            </section>
            <Reviews />
            <Location />
      </main>
</template>
