<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import Button from "./Button.vue";
import { useModal } from "@/composables/modal";
const { openModal } = useModal();

const props = defineProps({
      reasons: Object,
});

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
      <section class="reasons">
            <div class="container">
                  <div class="reasons__top section__top">
                        <h2 class="reasons__top-title section__top-title">{{ reasons.title }}</h2>
                  </div>
                  <div class="reasons__highlight">
                        <h4 class="reasons__highlight-title">Самое главное!</h4>
                        <p class="reasons__highlight-list">
                              <span class="reasons__content-list--item">Мы предлагаем удобный способ оплаты: вы вносите 50% авансом перед началом нашей работы, а остаток оплачиваете, когда весь необходимый пакет документов будет готов. Принимаем все виды оплат: наличный, безналичный, оплата картами.</span>
                              <span class="reasons__content-list--item">Мы беремся помогать в получении необходимых документов только при 100% уверенности в положительном исходе</span>
                              <span class="reasons__content-list--item">и точно можем оценить, что для этого потребуется благодаря нашему пятнадцатилетнему опыту. Поэтому в случае возникновения каких-либо сложностей (что бывает редко), бесплатно вносим изменения в документы и не изменяем заявленной ранее стоимости.</span>
                        </p>
                  </div>
                  <div class="reasons__content">
                        <p class="reasons__content-list" v-html="reasons.desc"></p>
                        <Button class="reasons__content-btn" @click="openModal" :title="buttonTitle" :primary="true" size="large" />
                  </div>
            </div>
      </section>
</template>

<style>
.reasons__top-title {
      max-width: 752px;
      margin-bottom: 33px;
}
</style>
