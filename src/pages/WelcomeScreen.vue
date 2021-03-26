<template>
  <ion-page>
    <ion-content :fullscreen="true" class="ion-padding">
      <div class="welcome">
        <b>Swipe</b>
        <div class="welcome__intro">
          <ion-img src="https://photos.cdn-moneysmart.com/uploads/channel/image/7/ti.png"></ion-img>
        </div>
        <div class="welcome__actions">
          <div class="welcome__actions--message ion-padding">
            <h2>Get insured in 5 minutes</h2>
            <p class="description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque, totam rem aperiam</p>
          </div>
          <ion-button expand="block" @click.prevent="setOpen(true)">Log in</ion-button>
          <ion-button expand="block" color="light" @click.prevent="setOpen(true, true)">Sign up</ion-button>
        </div>
      </div>
    </ion-content>
    <ion-modal
      :is-open="isOpenRef"
      @onDidDismiss="setOpen(false)"
    >
      <Authentication @onClose="setOpen(false)" :is-signup="isSignup"/>
    </ion-modal>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonContent,
  IonButton,
  IonImg,
  IonModal
} from "@ionic/vue";
import { ref } from 'vue';
import Authentication from '@/components/Authentication.vue'

export default {
  name: "WelcomeScreen",
  components: {
    IonPage,
    IonContent,
    IonButton,
    IonImg,
    IonModal,
    Authentication
  },
  setup() {
    let isSignup = ref(false);
    const isOpenRef = ref(false);
    const setOpen = (state, signUp) => {
      isOpenRef.value = state;
      isSignup.value = signUp
    };
    const slideOpts = {
      initialSlide: 0,
      speed: 400
    };

    return {
      slideOpts,
      isOpenRef,
      setOpen,
      isSignup
    }
  }
};
</script>

<style lang="scss" scoped>
.welcome {
  display: flex;
  min-height: 100%;
  flex-direction: column;
  align-content: space-between;
  padding-top: 24px;

  &__intro {
    flex: 1;
    display: flex;
    justify-content: center;

    ion-img {
      width: 80%;
    }
  }

  &__actions {
    padding-bottom: 12px;

    &--message {
      padding-bottom: 24px;
    }

    p {
      font-size: 14px;
      color: #808080;
    }
  }
}

ion-button {
  margin-top: 12px;
}
</style>