<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

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

// btn title
const buttonTitle = ref("Больше полезных статей");

const updateButtonTitle = () => {
      if (window.innerWidth <= 576) {
            buttonTitle.value = "Больше статей";
      } else {
            buttonTitle.value = "Больше полезных статей";
      }
};

onMounted(() => {
      updateButtonTitle();
      window.addEventListener("resize", updateButtonTitle);
});

onBeforeUnmount(() => {
      window.removeEventListener("resize", updateButtonTitle);
});
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
            <Articles :showBreadCrumb="false" :btnTitle="buttonTitle" btnSize="large" btnColor="primary" />
            <Faq :title="{ blue: 'Какая ответственность наступает', red: 'при нарушении миграционного законодательства?' }" />
            <section>
                  <BannerSecond />
            </section>
            <Reviews />
            <Location />
      </main>
</template>
