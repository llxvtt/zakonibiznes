<script setup>
import BreadCrumb from "@/components/BreadCrumb.vue";

import { ref } from "vue";
</script>

<template>
      <section class="privacy">
            <div class="container">
                  <div class="privacy__top section__top">
                        <BreadCrumb current_page="Политика конфиденциальности" />
                        <h1 class="privacy__top-title section__top-title"><span class="privacy__top-title--spanfirst">Политика</span><span class="privacy__top-title--spansecond">Политика конфиденциальности</span></h1>
                  </div>
                  <div class="privacy__content">
                        <div class="privacy__content-text">
                              <h3 class="privacy__content-title">1. Общие положения</h3>
                              <p class="privacy__content-desc">Настоящая Политика конфиденциальности регулирует порядок обработки и защиты персональных данных пользователей сайта [название проекта/домен] (далее — «Сайт»). Используя Сайт и оставляя свои данные через формы, пользователь подтверждает согласие с условиями настоящей Политики.</p>
                        </div>

                        <div class="privacy__content-text">
                              <h3 class="privacy__content-title">2. Какие данные мы собираем</h3>
                              <p class="privacy__content-desc">
                                    Мы можем собирать следующие данные:
                                    <br /><br />
                                    <span class="privacy__content-list--item">Имя, фамилия (если указаны в формах);</span>
                                    <span class="privacy__content-list--item">Адрес электронной почты;</span>
                                    <span class="privacy__content-list--item">Номер телефона;</span>
                                    <span class="privacy__content-list--item">Ссылки на мессенджеры (например, Telegram);</span>
                                    <span class="privacy__content-list--item">Иные данные, которые пользователь добровольно оставляет при заполнении форм или в переписке.</span>
                              </p>
                        </div>

                        <div class="privacy__content-text">
                              <h3 class="privacy__content-title">3. Цели обработки данных</h3>
                              <p class="privacy__content-desc">
                                    Персональные данные обрабатываются исключительно в целях:
                                    <br /><br />
                                    <span class="privacy__content-list--item">обработки заявок пользователей;</span>
                                    <span class="privacy__content-list--item">обратной связи и консультирования;</span>
                                    <span class="privacy__content-list--item">предоставления информации о наших услугах;</span>
                                    <span class="privacy__content-list--item">исполнения обязательств по договорам;</span>
                                    <span class="privacy__content-list--item">улучшения качества работы Сайта.</span>
                              </p>
                        </div>

                        <div class="privacy__content-text">
                              <h3 class="privacy__content-title">4. Передача данных третьим лицам</h3>
                              <p class="privacy__content-desc">
                                    Мы не передаем персональные данные третьим лицам, за исключением случаев, когда:
                                    <br /><br />
                                    <span class="privacy__content-list--item">это требуется по закону;</span>
                                    <span class="privacy__content-list--item">необходимо для предоставления услуг (например, интеграция с сервисами доставки, платежными системами, CRM);</span>
                                    <span class="privacy__content-list--item">получено согласие пользователя.</span>
                              </p>
                        </div>

                        <div class="privacy__content-text">
                              <h3 class="privacy__content-title">5. Хранение и защита данных</h3>
                              <p class="privacy__content-desc">
                                    <span class="privacy__content-list--item">Данные пользователей хранятся на защищенных серверах;</span>
                                    <span class="privacy__content-list--item">Мы применяем необходимые технические и организационные меры для защиты персональной информации от несанкционированного доступа, изменения или уничтожения.</span>
                              </p>
                        </div>

                        <div class="privacy__content-text">
                              <h3 class="privacy__content-title">6. Срок хранения</h3>
                              <p class="privacy__content-desc">Персональные данные хранятся до достижения целей обработки либо до отзыва согласия пользователя.</p>
                        </div>

                        <div class="privacy__content-text">
                              <h3 class="privacy__content-title">7. Права пользователя</h3>
                              <p class="privacy__content-desc">
                                    Пользователь имеет право:
                                    <br /><br />
                                    <span class="privacy__content-list--item">получить информацию о своих персональных данных;</span>
                                    <span class="privacy__content-list--item">требовать их исправления, блокировки или удаления;</span>
                                    <span class="privacy__content-list--item">отозвать согласие на обработку данных, направив соответствующее уведомление на [email/контакт].</span>
                              </p>
                        </div>

                        <div class="privacy__content-text">
                              <h3 class="privacy__content-title">8. Изменения в политике</h3>
                              <p class="privacy__content-desc">Мы оставляем за собой право изменять Политику конфиденциальности. Актуальная версия всегда доступна на Сайте.</p>
                        </div>
                  </div>
            </div>
      </section>
</template>

<style scoped lang="scss">
@use "../styles/utils/mixins" as *;
.privacy {
      padding: 124px 0;
      @include media(sm) {
            padding-top: 44px;
            padding-bottom: 64px;
      }
      &__content {
            display: grid;
            gap: 34px;
            &-title {
                  color: var(--text-darkblue);
                  margin-bottom: 24px;

                  @include media(sm) {
                        margin-bottom: 14px;
                  }
            }
            &-list--item {
                  display: block;
                  position: relative;
                  padding-left: 15px;
                  @include media(sm) {
                        padding-left: 0;
                  }
                  &::before {
                        content: "•";
                        position: absolute;
                        left: 0;
                        color: var(--text-darkblue);

                        @include media(sm) {
                              content: unset;
                        }
                  }
            }
      }
}
.privacy__top-title {
      max-width: 600px;
      @include media(md) {
            max-width: 500px;
      }
      &--spanfirst {
            color: var(--text-darkblue);
            display: none;
            @include media(sm) {
                  display: block;
            }
      }
      &--spansecond {
            @include media(sm) {
                  display: none;
            }
      }
}
</style>
