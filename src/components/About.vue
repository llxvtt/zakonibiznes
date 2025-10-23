<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useRoute } from "vue-router";
import { useModal } from "@/composables/modal";
const { openModal } = useModal();

const route = useRoute();

import BreadCrumb from "@/components/BreadCrumb.vue";
import Button from "@/components/Button.vue";

const about = ref(["Уважаемые клиенты и гости сайта, давайте знакомиться. Я, Буянов Михаил Владимирович, являюсь руководителем Правового Центра Миграции с 2008 года.", "Мой путь в области миграции начался еще в далеком 2005 году. После получения высшего юридического образования я устроился в крупную цветочную компанию, где штат иностранных сотрудников превышал 50%, а это более 500 иностранных граждан ближнего и дальнего зарубежья. В течение трех лет прошёл много курсов повышения квалификации и вырос в должности от помощника юриста до руководителя юридической службы.", "На сегодняшний день мы имеем богатый опыт в решении самых сложных вопросов в области миграции, подтверждением тому являются многочисленные положительные отзывы, которые Вы найдете на просторах интернета. Обращаясь к нам Вы получите гарантию решения Вашего вопроса, так как мы не занимаемся выкачиванием денег из клиента давая пустые обещания, мы беремся только за те дела, которые мы можем действительно решить.", "На основании полученного трех летнего опыта в 2008 году мной был создан «Правовой Центр Миграции», основной деятельностью которого являлось оказание помощи работодателям привлекающим иностранных граждан к труду, а так же помощь иностранным гражданам в получении статуса в Российской Федерации (Квота, РВП, ВНЖ и гражданство РФ) включая судебную защиту."]);

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
      <section class="about">
            <div class="container">
                  <div class="about__top section__top">
                        <BreadCrumb current_page="О компании" />
                        <h1 class="about__top-title section__top-title">О компании <span>Правовой центр миграции</span></h1>
                  </div>
                  <div class="about__content">
                        <div class="about__content-left">
                              <img class="about__content-img" src="/src/assets/images/about.png" alt="image" />
                        </div>
                        <div class="about__content-right">
                              <div class="about__content-info">
                                    <p v-for="item of about" :key="item">{{ item }}</p>
                              </div>
                              <Button class="about__content-btn" @click="openModal" :title="buttonTitle" :primary="true" size="large" />
                        </div>
                  </div>
            </div>
      </section>
</template>

<style>
.about__top-title {
      max-width: 640px;
}
</style>
