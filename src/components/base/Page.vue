<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button :default-href="backLink" text="" :icon="arrowBackOutline" v-if="backLink"></ion-back-button>
        </ion-buttons>
        <ion-title>{{ pageTitle }}</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <slot></slot>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/vue';
import { arrowBackOutline } from 'ionicons/icons';

export default ({
  name: 'BasePage',
  props: ['pageTitle', 'backLink'],
  data() {
    return {
      arrowBackOutline
    }
  },
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonBackButton
  }
});
</script>

<style scoped>
  ion-back-button {
    --icon-font-size: 24px;
    --margin-start: 8px;
  }
</style>