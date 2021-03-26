<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <!-- <ion-title></ion-title> -->
        <ion-icon slot="end" :ios="closeOutline" :md="closeOutline" @click="close"></ion-icon>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <div class="login">
        <div class="login__title">
          <h1 class="login__message">Create <br />Account</h1>
          <p class="login__sub">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore.</p>
        </div>
        <form @submit.prevent="signIn">
          <ion-item>
            <ion-label>
              <ion-icon :ios="mailOutline" :md="mailOutline" size="small"></ion-icon>
            </ion-label>
            <ion-input v-model="firstName" placeholder="First Name"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label>
              <ion-icon :ios="mailOutline" :md="mailOutline" size="small"></ion-icon>
            </ion-label>
            <ion-input v-model="lastName" placeholder="Last Name"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label>
              <ion-icon :ios="mailOutline" :md="mailOutline" size="small"></ion-icon>
            </ion-label>
            <ion-input v-model="email" placeholder="Email"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label>
              <ion-icon :ios="lockClosedOutline" :md="lockClosedOutline" size="small"></ion-icon>
            </ion-label>
            <ion-input v-model="password" type="password" placeholder="Password"></ion-input>
          </ion-item>
          <ion-button
            expand="block"
            color="primary"
            class="ion-margin-top"
            type="submit"
          >
            {{!submit ? 'Log in' : ''}}
            <ion-spinner name="crescent" v-if="submit"></ion-spinner>
          </ion-button>
        </form>
        <p class="error-message" v-if="errorMsg">{{errorMsg}}</p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonIcon,
  IonLabel,
  IonInput,
  IonItem,
  IonButton,
  IonSpinner
} from '@ionic/vue';
import { closeOutline, mailOutline, lockClosedOutline } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Signup',
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      errorMsg: "",
      submit: false
    }
  },
  setup() {
    return {
      closeOutline,
      mailOutline,
      lockClosedOutline
    }
  },
  components: {
    IonPage,
    IonContent,
    IonHeader,
    IonToolbar,
    IonIcon,
    IonLabel,
    IonInput,
    IonItem,
    IonButton,
    IonSpinner
  },
  methods: {
    close() {
      this.$emit('onClose');
    },
    async signIn() {
      try {
        this.submit = true;
        if (!this.email || !this.password) {
          this.errorMsg = "Email and password are required!";
          this.submit = false;
          return;
        }

        await this.$auth.signInWithEmailAndPassword(this.email, this.password);
        this.close();
        this.$router.push('/products');
      } catch (error) {
        this.submit = false;
        this.errorMsg = error.message;
      }
    },
  }
});
</script>

<style lang="scss" scoped>
  .login {
    display: flex;
    // min-height: 100%;
    flex-direction: column;
    // align-content: space-between;

    &__title {
      flex: 1;
    }

    &__message {
      font-size: 32px;
    }

    &__sub {
      font-size: 14px;
      color: #808080;
    }

    .error-message {
      color: var(--ion-color-danger-tint);
      background-color: #f8d7da;
      border-color: #f5c2c7;
      text-align: center;
      padding: 12px;
      border-radius: 2px;
    }
  }

  ion-item {
    --padding-start: 0;
  }

  ion-icon {
    font-size: 24px;
    color: #808080;
  }

  form {
    margin-top: 48px;
    padding-bottom: 12px;
  }

  .header-ios ion-toolbar:last-of-type {
      --border-width: 0;
  }
</style>