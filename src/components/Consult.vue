<script setup>
import Button from "./Button.vue";
</script>

<template>
      <div class="consult">
            <div class="consult__info">
                  <!-- consult info title  -->
                  <h5 class="consult__info-title">Нужна консультация по этому вопросу?</h5>
                  <!-- consult info buttons  -->
                  <Button class="consult__info-btn" :secondary="true" size="medium" title="Консультация" />
            </div>
      </div>
</template>

<style scoped lang="scss">
.consult {
      padding: 28px 24px;
      height: 344px;
      background: url("/src/assets/images/consult.png") no-repeat;
      background-size: cover;
      border-radius: 8px;
      overflow: hidden;
      display: grid;
      align-items: end;

      &__info-title {
            color: white;
      }
      &__info-btn {
            width: 100%;
            margin-top: 24px;
      }
}
</style>
