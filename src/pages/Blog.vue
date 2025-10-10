<script setup>
import { ref } from "vue";
import Articles from "@/components/Articles.vue";
import BannerSecond from "@/components/BannerSecond.vue";
import Reviews from "@/components/Reviews.vue";
import Location from "@/components/Location.vue";

const showLimit = ref(6);

const showMore = () => {
      showLimit.value = null;
};
</script>

<template>
      <main class="blog">
            <Articles @showMoreBtn="showMore" :showBreadCrumb="true" btnTitle="Показать еще" btnSize="full" btnColor="gray" :limit="showLimit" />
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
