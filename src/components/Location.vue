<script setup>
import Button from "./Button.vue";
</script>

<template>
      <section class="location">
            <div class="container">
                  <div class="location__top section__top">
                        <h2 class="location__top-title section__top-title"><span>Как добраться</span> до нашего офиса</h2>
                  </div>
                  <div class="location__map">
                        <img class="location__map-img" src="/src/assets/images/map.jpg" alt="map" />
                        <!-- contact  -->
                        <div class="contact">
                              <h4 class="contact__title">Контакты</h4>

                              <ul class="contact__list">
                                    <li class="contact__list-item"><img src="/src/assets/images/icons/device.svg" alt="icon" /> +7 (495) 431–01–20</li>
                                    <li class="contact__list-item">
                                          <a href="#!"><img src="/src/assets/images/icons/mail.svg" alt="icon" /> info@zakonibiznes.ru</a>
                                    </li>
                                    <li class="contact__list-item"><img src="/src/assets/images/icons/location.svg" alt="icon" /> 115162, г. Москва, ул. Хавская, д. 11, этаж 2</li>
                              </ul>

                              <div class="contact__btns">
                                    <Button size="small" :blue="true" icon="/src/assets/images/icons/wk.svg" title="Написать в Вконтакте" />
                                    <Button size="small" :green="true" icon="/src/assets/images/icons/whatsapp.svg" title="Написать в WhatsApp" />
                              </div>
                        </div>
                  </div>
            </div>
      </section>
</template>

<style>
.location__top-title {
      max-width: 378px;
}
</style>
