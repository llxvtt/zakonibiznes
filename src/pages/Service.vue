<script setup>
import Service from "@/components/Service.vue";
import Faq from "@/components/Faq.vue";
import BannerSecond from "@/components/BannerSecond.vue";
import Reviews from "@/components/Reviews.vue";
import Location from "@/components/Location.vue";
import Advantages from "@/components/Advantages.vue";
import Reasons from "@/components/Reasons.vue";
</script>

<template>
      <main>
            <Service class="pt-124" />
            <Advantages />
            <Reasons />
            <Faq :title="{ blue: 'Ответы на частые вопросы' }" />
            <section>
                  <BannerSecond />
            </section>
            <Reviews />
            <Location />
      </main>
</template>

<style scoped></style>
