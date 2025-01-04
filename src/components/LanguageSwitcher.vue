<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { watchEffect } from 'vue';

const { locale } = useI18n();

const setLanguage = (newLang: string) => {
  locale.value = newLang;
  localStorage.setItem('lang', newLang);
};

watchEffect(() => {
  const storedLang = localStorage.getItem('lang');
  if (storedLang) {
    locale.value = storedLang;
  }
});

const { t } = useI18n();
</script>

<template>
  <div>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=language" />
    <span class="material-symbols-rounded">language</span> <br>
    <p style="font-size: 2rem; margin-top: 0;"><b>{{ t("settings.titles.languages") }}</b></p>
  </div>
  <div>
    <button @click="setLanguage('en-US')" style="margin-bottom: 16px">English (American)</button> <br>
    <button @click="setLanguage('de-DE')">Deutsch (Deutschland)</button>
  </div>
</template>

<style scoped>
.material-symbols-rounded {
  font-variation-settings:
      'FILL' 0,
      'wght' 800,
      'GRAD' 0,
      'opsz' 48;
  font-size: 48px
}
</style>