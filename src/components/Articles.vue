<script setup>
import { ref } from "vue";
import router from "@/router";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

import Button from "./Button.vue";
import Card from "@/components/Card.vue";
import BreadCrumb from "./BreadCrumb.vue";

const props = defineProps({
      showBreadCrumb: Boolean,
      btnTitle: String,
      btnSize: String,
      btnColor: String,
      limit: Number,
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
            title: "Экзаменационная процедура для получения гражданства России будет стандартизирована.",
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
      {
            id: 7,
            title: "Гражданство РФ для иностранных студентов",
            description: "Упростили получение гражданства иностранным студентам — отличникам Российские власти упростили процедуру получения гражданства для иностранных студентов, успешно завершивших обучение в российских вузах с отличными результатами.",
      },
      {
            id: 8,
            title: "Минздрав отказался вводить экзамены для иностранных врачей",
            description: "Минздрав отказался вводить экзамены по русскому языку для иностранных врачей Минздрав России выступил против идеи проверять российских врачей-иностранцев на знание русского языка дополнительно к существующей",
      },
      {
            id: 9,
            title: "Тестирование по русскому языку для детей мигрантов",
            description: "Тестирование по русскому языку для детей мигрантов началось с высоким уровнем отказов Большая часть детей мигрантов, подавших заявление на прохождение обязательного экзамена по русскому языку,",
      },
      {
            id: 10,
            title: "Работать в двух регионах по единому патенту",
            description: "Новый закон позволит мигрантам работать сразу в двух регионах по единому патенту Госдума одобрила инициативу, позволяющую трудовым мигрантам официально работать в нескольких регионах одновременно. Согласно",
      },
      {
            id: 11,
            title: "Какие основания нужны для получения ВНЖ в России?",
            description: "Минздрав отказался вводить экзамены по русскому языку для иностранных врачей Минздрав России выступил против идеи проверять российских врачей-иностранцев на знание русского языка дополнительно к существующей",
      },
      {
            id: 12,
            title: "Работодатель — физическое лицо, принимаем на работу иностранцев (например, для ремонта)",
            description: "Тестирование по русскому языку для детей мигрантов началось с высоким уровнем отказов Большая часть детей мигрантов, подавших заявление на прохождение обязательного экзамена по русскому языку,",
      },
]);

const articleDetail = (cardIndexEmit) => {
      router.push(`/article/${cardIndexEmit}`);
};

const emit = defineEmits(["showMoreBtn"]);

const sendData = () => {
      emit("showMoreBtn", "clicked");
};

const displayedArticles = computed(() => {
      if (route.path === "/") {
            return articles.value.slice(0, 6);
      }
      return props.limit ? articles.value.slice(0, props.limit) : articles.value;
});
</script>

<template>
      <section class="articles">
            <div class="container">
                  <div class="articles__top section__top">
                        <BreadCrumb v-if="showBreadCrumb" current_page="Полезные статьи" />
                        <h2 v-if="route.path === '/'" class="articles__top-title section__top-title">Полезные статьи <span>по миграционному законодательству</span></h2>
                        <h1 v-if="route.path === '/blog'" class="articles__top-title articles__top-title--h1 section__top-title">Полезные статьи <span>по миграционному законодательству</span></h1>
                  </div>

                  <div class="articles__cards">
                        <Card v-for="(item, index) in displayedArticles" :key="index" class="articles__card" :cardIndexProps="index" :title="item.title" :id="item.id" :description="item.description" :bigCard="true" btnMode="tertiary" @cardIndexEmit="articleDetail" />
                  </div>

                  <Button v-if="route.path === '/blog' && props.limit && displayedArticles.length < articles.length" class="articles__btn" @click="sendData" :title="btnTitle" :primary="btnColor === 'primary'" :gray="btnColor === 'gray'" :size="btnSize" />
                  <Button v-if="route.path === '/'" class="articles__btn" :title="btnTitle" :primary="true" size="large" @click="router.push('/blog')" />
            </div>
      </section>
</template>

<style>
.articles__top-title {
      max-width: 430px;
}
.articles__top-title--h1 {
      max-width: 550px;
}
@media (max-width: 576px) {
      .articles__top-title--h1 span {
            display: none;
      }
}
</style>
