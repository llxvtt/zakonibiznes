<script setup>
import Card from "@/components/Card.vue";
import { ref } from "vue";

const services = ref([
      {
            title: "Получение квоты",
            description: "Помощь в получении квоты на разрешение временного пребывания на территории РФ",
            price: "от 100 ₽",
      },
      {
            title: "Регистрация иностранных граждан",
            description: "Заполнение и подача уведомления по месту прибытия иностранного гражданина (регистрация)",
            price: "от 500 ₽",
      },
      {
            title: "Подготовка трудового договора",
            description: "Составление трудового договора для оказания услуг от иностранного гражданина",
            price: "от 500 ₽",
      },
]);
</script>

<template>
      <section class="services services-third">
            <div class="container">
                  <div class="services__top section__top">
                        <h2 class="services__top-title section__top-title">Миграционные услуги  <br /><span>для Физических лиц граждан РФ</span></h2>
                        <p class="services__top-desc section__top-desc">Знаете ли вы, что заказывая у иностранцев услуги (например, ремонт в квартире), вы попадаете под действие миграционного законодательства? Мы поможем вам избежать штрафов и правильно оформить все документы</p>
                  </div>
                  <div class="services__cards">
                        <Card class="services__card" v-for="(item, index) in services" :key="index" :bigCard="true" :icon="false" :title="item.title" :description="item.description" :price="item.price" :btnMode="index === 0 ? 'secondary' : 'tertiary'" />
                  </div>
            </div>
      </section>
</template>

<style>
.services__top-title {
      max-width: 715px;
}
.services__top-desc {
      max-width: 884px;
}
</style>
