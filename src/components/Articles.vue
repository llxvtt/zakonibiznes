<script setup>
import { ref } from "vue";
import router from "@/router";

import Button from "./Button.vue";
import Card from "@/components/Card.vue";
import BreadCrumb from "./BreadCrumb.vue";

const props = defineProps({
      showBreadCrumb: Boolean,
      btnTitle: String,
      btnSize: String,
      btnColor: String,
});

const articles = ref([
      {
            id: 1,
            title: "Уведомление о приеме иностранного гражданина",
            description: "Помощь работодателям в оформлении иностранных граждан на работу Если ваша компания планирует трудоустроить сотрудника-иностранца, будьте внимательны — существуют особые требования законодательства, которые обязательны к соблюдению",
      },
      {
            id: 2,
            title: "Экспериментальный учет мигрантов",
            description: "Экспериментальный учет мигрантов В столице и Подмосковье начинается новый подход к учету иностранных граждан, который будет осуществляться не по месту их временного пребывания",
      },
      {
            id: 3,
            title: "Гражданство РФ для иностранных студентов",
            description: "Упростили получение гражданства иностранным студентам — отличникам Российские власти упростили процедуру получения гражданства для иностранных студентов, успешно завершивших обучение в российских вузах с отличными результатами",
      },
      {
            id: 4,
            title: "Цифровизация въезда и выезда иностранных граждан: новый этап с 30 июня 2023 года",
            description: "Цифровизация въезда и выезда иностранных граждан: новый этап с 30 июня 2025 года С 30 июня 2025 года вступает в силу вторая фаза крупного эксперимента",
      },
      {
            id: 5,
            title: "Рособрнадзор объявил о грядущих нововведениях в экзаменах для мигрантов!",
            description: "Рособрнадзор анонсировал изменения в экзаменах для мигрантов С 10 июля 2025 года изменится порядок проведения экзаменов для иностранных граждан, претендующих на получение разрешений на работу",
      },

      {
            id: 6,
            title: "Госдума займётся контролем над детьми мигрантов",
            description: "Госдума займётся контролем над детьми мигрантов Парламентарии Государственной Думы намерены рассмотреть инициативу, согласно которой региональные власти обязаны направлять в Министерство внутренних дел информацию о детях",
      },
]);

const articleDetail = (cardIndexEmit) => {
      router.push(`/article/${cardIndexEmit}`);
};
</script>

<template>
      <section class="articles">
            <div class="container">
                  <div class="articles__top section__top">
                        <BreadCrumb current_page="Полезные статьи" v-if="showBreadCrumb" />
                        <h2 class="articles__top-title section__top-title">Полезные статьи <span>по миграционному законодательству</span></h2>
                  </div>
                  <div class="articles__cards">
                        <Card class="articles__card" @cardIndexEmit="articleDetail" v-for="(item, index) in articles" :key="index" :cardIndexProps="index" :bigCard="true" :title="item.title" :id="item.id" :description="item.description" :price="item.price" btnMode="tertiary" />
                  </div>
                  <Button class="articles__btn" :title="btnTitle" :primary="btnColor === 'primary'" :gray="btnColor === 'gray'" :size="btnSize" />
            </div>
      </section>
</template>

<style>
.articles__top-title {
      max-width: 430px;
}
</style>
