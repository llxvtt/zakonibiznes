<script setup>
import Card from "@/components/Card.vue";
import { ref } from "vue";
import router from "@/router";

const products = ref([
      {
            id: 21,
            title: "Регистрация иностранных граждан",
            description: "Заполнение и подача уведомления по месту прибытия иностранного гражданина (регистрация)",
            price: "от 100 ₽",
      },
      {
            id: 22,
            title: "Уведомление о приеме на работу",
            description: "Заполнение и подача в ОВМ МВД уведомления о приеме на работу иностранного гражданина",
            price: "от 500 ₽",
      },
      {
            id: 20,
            title: "Подготовка трудового договора",
            description: "Составление трудового договора для оказания услуг от иностранного гражданина",
            price: "от 500 ₽",
      },
]);

const serviceDetail = (cardIndexEmit) => {
      router.push(`/service/${cardIndexEmit}`);
};
</script>

<template>
      <section class="products products-third">
            <div class="container">
                  <div class="products__top section__top">
                        <h2 class="products__top-title section__top-title">Миграционные услуги  <br /><span>для Физических лиц граждан РФ</span></h2>
                        <p class="products__top-desc section__top-desc">Знаете ли вы, что заказывая у иностранцев услуги (например, ремонт в квартире), вы попадаете под действие миграционного законодательства? Мы поможем вам избежать штрафов и правильно оформить все документы</p>
                  </div>
                  <div class="products__cards">
                        <Card class="products__card" @cardIndexEmit="serviceDetail" v-for="(item, index) in products" :key="index" :id="item.id" :bigCard="true" :icon="false" :title="item.title" :description="item.description" :price="item.price" :btnMode="'secondary'" />
                  </div>
            </div>
      </section>
</template>

<style>
.products__top-title {
      max-width: 715px;
}
.products__top-desc {
      max-width: 884px;
}
</style>
