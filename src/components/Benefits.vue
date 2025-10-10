<script setup>
import Card from "@/components/Card.vue";
import { ref } from "vue";

const benefits = ref([
      {
            title: "Помогаем избежать штрафов",
            description: "и других штрафных санкций за нарушения законодательства",
      },
      {
            title: "Законно на 100%",
            description: "оказание всех услуг в соответствии с требованиями закона",
      },
      {
            title: "Экономим ваше время",
            description: "оформим все в самые короткие сроки, оградим от бюрократии",
      },
      {
            title: "Полная оплата за результат",
            description: "для удобства у нас введена поэтапная оплата услуг",
      },
]);
</script>

<template>
      <section class="benefits">
            <div class="container">
                  <Card class="benefits__card" v-for="item of benefits" :key="item" :icon="true" :title="item.title" :description="item.description" />
            </div>
      </section>
</template>
