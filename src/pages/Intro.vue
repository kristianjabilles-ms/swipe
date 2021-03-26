<template>
  <ion-page class="intro">
    <ion-slides pager="true" :options="slideOpts">
      <ion-slide>
        <img src="../../public/assets/images/slide-1.png"/>
        <h2>Welcome</h2>
        <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua totam rem aperiam.</p>
      </ion-slide>
      <ion-slide>
        <img src="../../public/assets/images/slide-2.png"/>
        <h2>What is swipe?</h2>
        <p class="description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium laudantium, totam rem aperiam</p>
      </ion-slide>
      <ion-slide>
        <img src="../../public/assets/images/slide-3.png"/>
        <h2>Get insured in 5 minutes</h2>
        <p class="description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque, totam rem aperiam</p>
        <p>Already a member? <a href="javascript:void(0)" @click.prevent="setOpen(true)">Sign In</a></p>
        <ion-icon name="close-outline"></ion-icon>
      </ion-slide>
    </ion-slides>
    <ion-modal
      :is-open="isOpenRef"
      @onDidDismiss="setOpen(false)"
    >
      <Login title="Sign In" @onClose="setOpen(false)"/>
    </ion-modal>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonSlides,
  IonSlide,
  IonModal,
  IonIcon
} from '@ionic/vue';
import { ref } from 'vue';
import Login from '@/components/Login.vue'

export default ({
  components: {
    IonPage,
    IonSlides,
    IonSlide,
    IonModal,
    IonIcon,
    Login
  },
  setup() {
    const isOpenRef = ref(false);
    const setOpen = (state) => isOpenRef.value = state;
    const slideOpts = {
      initialSlide: 0,
      speed: 400
    };

    return {
      slideOpts,
      isOpenRef,
      setOpen
    }
  }
});
</script>

<style lang="scss" scoped>
  .intro {
    height: 100%;

    ion-slides {
      height: 100%;
      background: var(--ion-color-primary-contrast);
      color: var(--ion-color-light-contrast);
    }

    ion-slide {
      padding: 24px;
      flex-direction: column;

      img {
        width: 50%;
        margin-bottom: 48px;
      }

      .description {
        color: #808080;
        font-size: 1rem;
        line-height: 24px;
      }
    }
  }
</style>