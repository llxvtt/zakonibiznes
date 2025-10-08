<script setup>
import Button from "./Button.vue";
</script>

<template>
      <div class="container">
            <div class="banner">
                  <div class="banner__wrapper">
                        <!-- banner info title  -->
                        <h4 class="banner__title">Получить бесплатную консультацию</h4>
                        <!-- banner info buttons  -->
                        <Button class="banner__btn" :secondary="true" size="large" title="Бесплатная консультация" />
                  </div>
            </div>
      </div>
</template>
