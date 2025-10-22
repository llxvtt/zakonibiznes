<script setup>
const props = defineProps({
      advantages: Object,
});
</script>

<template>
      <section class="advantages">
            <div class="container">
                  <div class="advantages__top section__top">
                        <h2 class="advantages__top-title section__top-title">{{ advantages.title }}</h2>
                  </div>
                  <div class="advantages__info">
                        <p class="advantages__info-desc" v-html="advantages.desc"></p>
                  </div>
            </div>
      </section>
</template>

<style>
.advantages__top-title {
      max-width: 673px;
}
</style>
