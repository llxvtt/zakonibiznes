import { ref } from "vue"; const isModalOpen = ref(false); export function useModal() { const openModal = () => (isModalOpen.value = true); const closeModal = () => (isModalOpen.value = false); return { isModalOpen, openModal, closeModal }; } 🧩 2. src/components/Modal.vue vue Copy code
<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useModal } from "@/composables/modal.js";
import Button from "@/components/Button.vue";

const { isModalOpen, closeModal } = useModal();

const buttonTitle = ref("Получить консультацию");

const updateButtonTitle = () => {
      if (window.innerWidth <= 576) {
            buttonTitle.value = "Консультация";
      } else {
            buttonTitle.value = "Получить консультацию";
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
      <transition name="fade">
            <div class="modal" v-if="isModalOpen" @click.self="closeModal">
                  <div class="modal__wrapper">
                        <div class="modal__xmark" @click="closeModal">
                              <img src="/icons/xmark-modal.svg" alt="close" />
                        </div>

                        <div class="modal__header">
                              <h2>ОСТАВИТЬ ЗАЯВКУ</h2>
                              <p>Чтобы мы могли вам помочь, заполните заявку. Наш менеджер свяжется с вами, как только получит её.</p>
                        </div>

                        <div class="modal__body">
                              <input type="text" placeholder="Имя" />
                              <input type="number" placeholder="Телефон" />
                              <textarea cols="30" rows="10" placeholder="Ваш вопрос"></textarea>
                        </div>

                        <div class="modal__buttons">
                              <Button :primary="true" size="large" :title="buttonTitle" />
                        </div>
                  </div>
            </div>
      </transition>
</template>

<style scoped>
@keyframes scaleIn {
      from {
            transform: scale(0.8);
            opacity: 0;
      }
      to {
            transform: scale(1);
            opacity: 1;
      }
}
.fade-enter-active,
.fade-leave-active {
      transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
      opacity: 0;
}
</style>
