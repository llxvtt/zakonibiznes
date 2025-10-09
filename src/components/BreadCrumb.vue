<script setup>
const props = defineProps({
      current_page: String,
});
</script>
<template>
      <ul class="breadcrumb">
            <li class="breadcrumb__item"><router-link to="/">Главная</router-link> / {{ current_page }}</li>
      </ul>
</template>

<style scoped>
.breadcrumb li {
      font-family: "Montserrat";
      font-weight: 600;
      font-size: 16px;
      line-height: 25px;
      color: var(--text-darkblue);
}
.breadcrumb li a {
      color: #1d427980;
}
</style>
