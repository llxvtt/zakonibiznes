<script setup>
import Button from "./Button.vue";
</script>

<template>
      <div class="container">
            <div class="banner-second">
                  <div class="banner-second__wrapper">
                        <!-- banner info title  -->
                        <h4 class="banner-second__title">Подпишитесь на самые актуальные новости по вопросам миграции в Telegram канал</h4>
                        <!-- banner info buttons  -->
                        <Button class="banner-second__btn" :secondary="true" size="large" title="Telegram канал" icon="../assets/images/icons/telegram.svg" />
                  </div>
            </div>
      </div>
</template>
