<script setup>
import Articles from "@/components/Articles.vue";
import BannerSecond from "@/components/BannerSecond.vue";
import Reviews from "@/components/Reviews.vue";
import Location from "@/components/Location.vue";
</script>

<template>
      <main class="blog">
            <Articles :showBreadCrumb="true" btnTitle="Показать еще" btnSize="full" btnColor="gray" />
            <section>
                  <BannerSecond />
            </section>
            <Reviews />
            <Location />
      </main>
</template>

<style scoped>
.blog {
      padding-top: 62px;
}
</style>
