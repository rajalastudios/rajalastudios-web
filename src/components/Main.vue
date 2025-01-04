<script setup lang="ts">
import HelloWorld from '../components/HelloWorld.vue'
import {useI18n} from "vue-i18n";
import LanguageSwitcher from "../components/LanguageSwitcher.vue";

const { t } = useI18n();
</script>

<template>
  <div>
    <img src="/logo.svg" class="logo" alt="Rajala Studios logo" />
  </div>
  <HelloWorld :msg="t('messages.stillInWork')" /> <br>
  <LanguageSwitcher/>
</template>

<style scoped>
.logo {
  height: 12em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 1em rgba(104, 0, 255, 1.00));
}
</style>