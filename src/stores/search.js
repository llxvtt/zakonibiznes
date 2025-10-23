import { defineStore } from "pinia";
import { ref } from "vue";

export const useSearchStore = defineStore("search", () => {
      const query = ref("");
      const results = ref({
            services: [],
            articles: [],
      });

      const serviceList = ref([
            { id: 1, title: "Квота РВП для иностранцев" },
            { id: 2, title: "Помощь в получении РВП РФ для иностранцев" },
      ]);

      const articleList = ref([
            { id: 1, title: "Уведомление о приеме иностранного гражданина" },
            { id: 3, title: "Уведомление о приеме" },
            { id: 2, title: "Экспериментальный учет мигрантов" },
      ]);

      const search = (q) => {
            query.value = q.toLowerCase();

            results.value.services = serviceList.value.filter((s) => s.title.toLowerCase().includes(query.value));

            results.value.articles = articleList.value.filter((a) => a.title.toLowerCase().includes(query.value));
      };

      return { query, results, search };
});
