<script setup>
import BannerSecond from "@/components/BannerSecond.vue";
import Location from "@/components/Location.vue";
</script>

<template>
      <main class="contacts">
            <Location :showBreadCrumb="true" />
            <section>
                  <BannerSecond />
            </section>
      </main>
</template>

<style scoped>
.contacts {
      padding-top: 62px;
}
</style>
