<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import Button from "./Button.vue";
import { useModal } from "@/composables/modal";
const { openModal } = useModal();

const buttonTitle = ref("Консультация");

const updateButtonTitle = () => {
      if (window.innerWidth <= 576) {
            buttonTitle.value = "Telegram";
      } else {
            buttonTitle.value = "Консультация";
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
      <div class="consult">
            <div class="consult__info">
                  <!-- consult info title  -->
                  <h5 class="consult__info-title">Нужна консультация по этому вопросу?</h5>
                  <!-- consult info buttons  -->
                  <Button class="consult__info-btn" @click="openModal" :secondary="true" size="medium" :title="buttonTitle" />
            </div>
      </div>
</template>

<style scoped lang="scss">
@use "../styles/utils/mixins" as *;
.consult {
      padding: 28px 24px;
      height: 344px;
      background: url("/src/assets/images/consult.jpg") no-repeat;
      background-size: cover;
      border-radius: 8px;
      overflow: hidden;
      display: grid;
      align-items: end;
      position: relative;

      @include media(sm) {
            height: 178px;
      }

      &__info {
            position: relative;
            z-index: 10;
            &-title {
                  color: white;

                  @include media(sm) {
                        max-width: 300px;
                  }
            }
            &-btn {
                  width: 100%;
                  margin-top: 24px;
            }
            &-btn:hover {
                  color: var(--text-red);
            }
      }
}
.consult::before {
      content: "";
      width: 100%;
      height: 100%;
      background: linear-gradient(0deg, #9b2d30 44%, rgba(155, 45, 48, 0) 100%);
      position: absolute;
      left: 0;
      top: 0;
      z-index: 1;

      @include media(sm) {
            background: linear-gradient(90deg, #9b2d30 44%, rgba(155, 45, 48, 0) 100%);
      }
}
</style>
