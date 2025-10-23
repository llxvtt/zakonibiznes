<script setup>
import Card from "@/components/Card.vue";
import router from "@/router";
import { ref } from "vue";

const products = ref([
      {
            id: 1,
            title: "Получение квоты",
            description: "Помощь в получении квоты на разрешение временного пребывания на территории РФ",
            price: "от 7.000 ₽",
      },
      {
            id: 3,
            title: "Получение РВПО",
            description: "Помощь в оформлении разрешения временного пребывания для проходящих обучение на территории РФ",
            price: "от 25.000 ₽",
      },
      {
            id: 2,
            title: "Получение РВП РФ",
            description: "Помощь в оформлении разрешения временного пребывания на территории РФ",
            price: "от 35.000 ₽",
      },
      {
            id: 4,
            title: "Получение ВНЖ РФ",
            description: "Помощь в оформлении вида на жительство на территории РФ для иностранных граждан",
            price: "от 25.000 ₽",
      },
      {
            id: 5,
            title: "Получение Гражданства РФ",
            description: "Помощь в оформлении гражданства Российской Федерации",
            price: "от 25.000 ₽",
      },

      {
            id: 6,
            title: "Получение статуса НРЯ",
            description: "Помощь в оформлении статуса носителя русского языка на территории РФ",
            price: "от 15.000 ₽",
      },
      {
            id: 7,
            title: "Судебная защита иностранных граждан",
            description: "Квалифицированная защита юристов от выдворения и депортации",
            price: "от 50.000 ₽",
      },
      {
            id: 8,
            title: "Получение ИНН для иностранца в РФ",
            description: "Помощь в оформлении ИНН для иностранных граждан, работающих на территории РФ",
            price: "от 5.000 ₽",
      },
      {
            id: 9,
            title: "Получение СНИЛС для иностранца в РФ",
            description: "Помощь в оформлении СНИЛС для иностранных граждан, работающих на территории РФ",
            price: "от 5.000 ₽",
      },

      {
            id: 10,
            title: "Восстановление просроченных документов иностранцам",
            description: "Помощь в оформлении СНИЛС для иностранных граждан, работающих на территории РФ",
            price: "от 5.000 ₽",
      },
      {
            id: 11,
            title: "Подача запросов от иностранных граждан",
            description: "Помощь в оформлении СНИЛС для иностранных граждан, работающих на территории РФ",
            price: "от 5.000 ₽",
      },
]);

const serviceDetail = (cardIndexEmit) => {
      router.push(`/service/${cardIndexEmit}`);
};
</script>

<template>
      <section class="products">
            <div class="container">
                  <div class="products__top section__top">
                        <h2 class="products__top-title section__top-title">Миграционные услуги  <span>для иностранных граждан</span></h2>
                        <p class="products__top-desc section__top-desc">Получите документы, подтверждающие ваш статус на территории РФ без очередей, штрафов, потери времени и лишней бюрократии!</p>
                  </div>
                  <div class="products__cards">
                        <Card class="products__card" @cardIndexEmit="serviceDetail" v-for="(item, index) in products" :bigCard="true" :key="index" :id="item.id" :icon="false" :title="item.title" :description="item.description" :price="item.price" btnMode="tertiary" />
                  </div>
            </div>
      </section>
</template>

<style>
.products__top-title {
      max-width: 584px;
}
.products__top-desc {
      max-width: 884px;
}
</style>
