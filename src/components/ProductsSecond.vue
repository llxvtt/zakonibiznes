<script setup>
import Card from "@/components/Card.vue";
import { ref } from "vue";

const products = ref([
      {
            title: "Регистрация иностранных граждан",
            description: "Заполнение и подача уведомления по месту прибытия иностранного гражданина (регистрация)",
            price: "от 100 ₽",
      },
      {
            title: "Уведомление о приеме на работу",
            description: "Подача в ОВМ МВД уведомления о приеме на работу иностранного гражданина",
            price: "от 500 ₽",
      },
      {
            title: "Подготовка трудового договора",
            description: "Составление трудового договора для иностранного гражданина",
            price: "от 500 ₽",
      },
      {
            title: "Оформление инн для иностранных граждан",
            description: "Помощь в оформлении ИНН для иностранных граждан, работающих на территории РФ",
            price: "от 5.000 ₽",
      },
      {
            title: "Оформление СНИЛС для иностранца",
            description: "Помощь в оформлении СНИЛС для иностранных граждан, работающих на территории РФ",
            price: "от 5.000 ₽",
      },

      {
            title: "Миграционный аудит кадрового отдела",
            description: "Проверим документы на соответствие миграционному законодательству",
            price: "от 10.000 ₽",
      },
      {
            title: "Судебная защита работодателей",
            description: "Судебная защита от штрафов ОВМ МВД за нарушения миграционного законодательства",
            price: "от 5.000 ₽",
      },
]);
</script>

<template>
      <section class="products products-second">
            <div class="container">
                  <div class="products__top section__top">
                        <h2 class="products__top-title section__top-title">Миграционные услуги  <span>для иностранных граждан</span></h2>
                        <p class="products__top-desc section__top-desc">Получите документы, подтверждающие ваш статус на территории РФ без очередей, штрафов, потери времени и лишней бюрократии!</p>
                  </div>
                  <div class="products__cards">
                        <Card class="products__card" v-for="(item, index) in products" :key="index" :bigCard="true" :icon="false" :title="item.title" :description="item.description" :price="item.price" :btnMode="index === 0 ? 'secondary' : 'tertiary'" />
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
