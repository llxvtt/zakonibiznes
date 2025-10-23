<script setup>
import Card from "@/components/Card.vue";
import BreadCrumb from "@/components/BreadCrumb.vue";
import Button from "@/components/Button.vue";
import { useModal } from "@/composables/modal";
const { openModal } = useModal();
import { ref, onMounted, onBeforeUnmount } from "vue";

const props = defineProps({
      title: String,
      price: String,
      cards: Array,
});

// button title
const buttonTitle = ref("Бесплатная консультация");

const updateButtonTitle = () => {
      if (window.innerWidth <= 576) {
            buttonTitle.value = "Консультация";
      } else {
            buttonTitle.value = "Бесплатная консультация";
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
      <section class="service">
            <div class="container">
                  <div class="service__top section__top">
                        <BreadCrumb :current_page="title" />
                        <h1 class="service__top-title section__top-title">
                              {{ title }}
                        </h1>
                  </div>
                  <div class="service__cards">
                        <Card class="service__card" v-for="item of cards" :key="item" :icon="true" :title="item.title" :description="item.desc" />
                  </div>
                  <div class="service__footer">
                        <h5 class="service__footer-title">Стоимость услуги от {{ price }}</h5>
                        <Button class="service__footer-btn" @click="openModal" :title="buttonTitle" :primary="true" size="medium" />
                  </div>
            </div>
      </section>
</template>

<style scoped lang="scss">
.service__top-title {
      max-width: 787px;
      @media (max-width: 576px) {
            color: var(--text-red);
            span {
                  color: var(--text-darkblue);
            }
      }
}
</style>
