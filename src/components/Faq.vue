<script setup>
import { ref } from "vue";

const props = defineProps({
      title: {
            blue: String,
            red: String,
      },
});

const activeIndex = ref(null);

const faqs = [
      {
            title: "Ответственность для юридических лиц и индивидуальных предпринимателей",
            content: `
                  Административная и уголовная ответственность наступает в случае нарушения законодательства
                  при приеме на работу иностранных граждан или оформлении документов.
    `,
      },
      {
            title: "Ответственность для иностранных граждан",
            content: `
                  Административная ответственность для иностранцев наступает за нарушение законодательства в области миграции. Самыми распространенными нарушениями являются: 
                  <br/><br/>
                  
                  1. Нарушение миграционных правил прибытия в России статья 18.8 Административного кодекса РФ;
                  <br/>
                  2. Нарушение миграционных правил нахождения в Российской Федерации статья 18.9 Административного кодекса РФ;
                  <br/>
                  3. Незаконный труд в РФ ст. 18.10 Административного кодекса РФ;
                  <br/>
                  4. Нарушение сроков по обращению за выдачей нового патента предусмотрено в статье 18.20 Административного кодекса РФ.
                  <br/><br/>

                  В вышеперечисленных случаях для иностранного гражданина совершившего правонарушение назначается штраф в размере от 2 000 до 5 000 рублей с административным выдворением или без. Исходя из нашей практики, Суды часто назначают штраф в 5000 рублей и в качестве дополнительного наказания назначают выдворение с запретом на въезд от 3-х лет до 10 лет.
    `,
      },
      {
            title: "Ответственность для физических лиц, граждан РФ",
            content: `
                  Физические лица несут административную ответственность за нарушение правил проживания
                  и регистрации иностранных граждан по месту пребывания.
    `,
      },
];

const toggleAccordion = (index) => {
      activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<template>
      <section class="faq">
            <div class="container">
                  <div class="faq__top section__top">
                        <h2 class="faq__top-title section__top-title">
                              {{ title.blue }} <span>{{ title.red }}</span>
                        </h2>
                  </div>
                  <div class="faq__list">
                        <div v-for="(item, index) in faqs" :key="index" class="faq__item" :class="{ active: activeIndex === index }">
                              <button class="faq__question" @click="toggleAccordion(index)">
                                    <h5>{{ item.title }}</h5>
                                    <img class="faq__icon" src="/icons/plus.svg" alt="icon" />
                              </button>

                              <p v-if="activeIndex === index" class="faq__answer" v-html="item.content"></p>
                        </div>
                  </div>
            </div>
      </section>
</template>

<style>
.faq__top-title {
      max-width: 783px;
}
</style>
