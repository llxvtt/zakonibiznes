<script setup>
import Button from "./Button.vue";

const props = defineProps({
      id: Number,
      icon: Boolean,
      id: Number,
      title: String,
      description: String,
      price: String,
      btnMode: String,
      bigCard: Boolean,
});

const emit = defineEmits(["cardIndexEmit"]);

function sendData(cardIndex) {
      emit("cardIndexEmit", cardIndex);
}
</script>

<template>
      <div class="card">
            <div class="card__info">
                  <!-- card info icon  -->
                  <img class="card__info-icon" src="/icons/checked.svg" alt="icon" v-if="icon" />
                  <!-- card info title  -->
                  <h5 class="card__info-title">{{ title }}</h5>
                  <!-- card info description  -->
                  <p class="card__info-desc">{{ description }}</p>
                  <!-- card info buttons  -->
            </div>
            <div class="card__bottom" v-if="bigCard">
                  <h5 class="card__bottom-price" v-if="price">{{ price }}</h5>
                  <Button class="card__bottom-btn" @click="sendData(id)" :primary="btnMode === 'primary'" :secondary="btnMode === 'secondary'" :tertiary="btnMode === 'tertiary'" title="Подробнее" />
            </div>
      </div>
</template>
