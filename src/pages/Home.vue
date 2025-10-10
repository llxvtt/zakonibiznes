<script setup>
import Hero from "@/components/Hero.vue";
import Benefits from "@/components/Benefits.vue";
import Products from "@/components/Products.vue";
import ProductsSecond from "@/components/ProductsSecond.vue";
import ProductsThird from "@/components/ProductsThird.vue";
import Banner from "@/components/Banner.vue";
import Articles from "@/components/Articles.vue";
import Faq from "@/components/Faq.vue";
import BannerSecond from "@/components/BannerSecond.vue";
import Reviews from "@/components/Reviews.vue";
import Location from "@/components/Location.vue";
</script>

<template>
      <main>
            <Hero />
            <Benefits />
            <Products />
            <ProductsSecond />
            <ProductsThird />
            <section>
                  <Banner />
            </section>
            <Articles :showBreadCrumb="false" btnTitle="Больше полезных статей" btnSize="large" btnColor="primary" />
            <Faq :title="{ blue: 'Какая ответственность наступает', red: 'при нарушении миграционного законодательства?' }" />
            <section>
                  <BannerSecond />
            </section>
            <Reviews />
            <Location />
      </main>
</template>
