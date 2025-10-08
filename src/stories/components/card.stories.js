import CardComponent from "@/components/Card.vue";

export default {
      title: "Components/Cards",
      component: CardComponent,

      //   parameters: {
      //         layout: "fulscreen",
      //   },
};

export const Card = {
      args: {
            title: "Помогаем избежать штрафов",
            description: "и других штрафных санкций за нарушения законодательства",
      },
};

export const CardMedium = {
      args: {
            title: "Получение РВПО",
            description: "Помощь в оформлении разрешения временного пребывания для проходящих обучение на территории РФ",
      },
};
