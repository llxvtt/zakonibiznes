<script setup>
import Card from "@/components/Card.vue";
import BreadCrumb from "@/components/BreadCrumb.vue";

import { ref, onMounted, onBeforeUnmount } from "vue";

import Button from "./Button.vue";

const service = ref([
      {
            title: "Подробная консультация  по миграционному законодательству РФ",
      },
      {
            title: "Объективная оценка перспектив в получении регистрации по месту пребывания",
      },
      {
            title: "Подготовка заявления по форме 2023 года на регистрацию иностранца в Москве или Мос.обл",
      },
      {
            title: "Сбор нами всего пакета документов с нотариальным заверением за 1 день",
      },
      {
            title: "Организуем сдачу документов в ГосУслугах / ОВМ МВД",
      },
      {
            title: "Результат:",
            description: "В течении 5 дней вы получаете документы о регистрации. 100% законно и официально!",
      },
]);
// button title
const buttonTitle = ref("Бесплатная консультация");

const updateButtonTitle = () => {
      if (window.innerWidth <= 576) {
            buttonTitle.value = "Консультация";
      } else {
            buttonTitle.value = "Бесплатная консультация";
      }
};

// section top title

const title = ref({
      before: "Что вы получите при заказе",
      span: "помощь в уведомлении мвд о трудоустройстве",
});

function updateTitle() {
      if (window.innerWidth <= 576) {
            title.value = {
                  before: "Миграционные услуги",
                  span: "в москве",
            };
      } else {
            title.value = {
                  before: "Что вы получите при заказе",
                  span: "помощь в уведомлении мвд о трудоустройстве",
            };
      }
}

onMounted(() => {
      updateButtonTitle();
      updateTitle();
      window.addEventListener("resize", updateButtonTitle);
      window.addEventListener("resize", updateTitle);
});

onBeforeUnmount(() => {
      window.removeEventListener("resize", updateButtonTitle);
      window.removeEventListener("resize", updateTitle);
});
</script>

<template>
      <section class="service">
            <div class="container">
                  <div class="service__top section__top">
                        <BreadCrumb current_page="Судебная защита иностранных граждан в Москве" />
                        <h1 class="service__top-title section__top-title">
                              {{ title.before }} <span>{{ title.span }}</span>
                        </h1>
                  </div>
                  <div class="service__cards">
                        <Card class="service__card" v-for="item of service" :key="item" :icon="true" :title="item.title" :description="item.description" />
                  </div>
                  <div class="service__footer">
                        <h5 class="service__footer-title">Стоимость услуги от 4.000 ₽</h5>
                        <Button class="service__footer-btn" :title="buttonTitle" :primary="true" size="medium" />
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
