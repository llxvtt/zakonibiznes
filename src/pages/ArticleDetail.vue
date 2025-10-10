<script setup>
import ArticleDetail from "@/components/ArticleDetail.vue";
import BannerSecond from "@/components/BannerSecond.vue";
import Reviews from "@/components/Reviews.vue";
import Location from "@/components/Location.vue";
</script>

<template>
      <main class="article">
            <ArticleDetail />
            <section>
                  <BannerSecond />
            </section>
            <Reviews />
            <Location />
      </main>
</template>

<style scoped>
.article {
      padding-top: 62px;
}
</style>
