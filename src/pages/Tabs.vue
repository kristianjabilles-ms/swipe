<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/products">
          <ion-icon :icon="cardOutline" size="small" />
          <!-- <ion-label>Tab 1</ion-label> -->
        </ion-tab-button>
          
        <ion-tab-button tab="tab2" href="/tabs/profile">
          <ion-icon :icon="personOutline" size="small" />
          <!-- <ion-label>Tab 2</ion-label> -->
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { IonTabBar, IonTabButton, IonTabs, IonIcon, IonPage } from '@ionic/vue';
import { personOutline, cardOutline } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    return {
      personOutline, 
      cardOutline,
    }
  }
}
</script>