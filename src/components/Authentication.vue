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
          <h1 class="login__message" v-html="message"></h1>
          <p class="login__sub">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore.</p>
        </div>
        <form @submit.prevent="validate">
          <ion-item v-if="isSignup">
            <ion-label>
              <ion-icon :ios="personOutline" :md="personOutline" size="small"></ion-icon>
            </ion-label>
            <ion-input v-model="name" placeholder="Name"></ion-input>
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
            <ion-input v-model="password" :type="passwordInput.type" placeholder="Password"></ion-input>
            <ion-icon :ios="passwordInput.icon" :md="passwordInput.icon" size="small" @click.prevent.stop="toggleIcon"></ion-icon>
          </ion-item>
          <ion-button
            expand="block"
            color="primary"
            class="ion-margin-top"
            type="submit"
          >
            {{!submit ? buttonLabel : ''}}
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
import {
  closeOutline,
  mailOutline,
  lockClosedOutline,
  personOutline,
  eyeOffOutline,
  eyeOutline
} from 'ionicons/icons';
import { toRefs, ref, reactive } from 'vue';

export default ({
  name: 'Authentication',
  props: ['isSignup'],
  data() {
    return {
      name: "",
      email: "",
      password: "",
      errorMsg: "",
      submit: false
    }
  },
  setup(props) {
    let togglePassword = ref(false);
    const passwordInput = reactive({
      type: 'password',
      icon: eyeOutline
    });
    const { isSignup } = toRefs(props);
    const message = isSignup.value ? 'Create <br />Account' : 'Welcome <br />Back';
    const buttonLabel = isSignup.value ? 'Sign up' : 'Log in';
    const toggleIcon = () => {
      togglePassword.value = !togglePassword.value;
      passwordInput.type = togglePassword.value ? 'text' : 'password';
      passwordInput.icon = togglePassword.value ? eyeOffOutline : eyeOutline;
    };

    return {
      closeOutline,
      mailOutline,
      lockClosedOutline,
      personOutline,
      eyeOffOutline,
      eyeOutline,
      message,
      buttonLabel,
      passwordInput,
      toggleIcon
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
    validate() {
      this.isSignup ? this.signUp() : this.signIn();
    },
    async signUp() {
      try {
        this.submit = true;
        // validate
        if (!this.name || !this.email || !this.password) {
          this.errorMsg = "Name, email, and password required!";
          this.submit = false;
          return;
        }

        // signup
        const { user } = await this.$auth.createUserWithEmailAndPassword(
          this.email,
          this.password
        );

        // update profile
        user.updateProfile({ displayName: this.name });
        // send email
        user.sendEmailVerification();

        // save user to firestore
        this.$db.collection("users").doc(user?.uid).set({
          name: this.name,
          email: this.email,
        });
        this.$tracker.logEvent('sign_up');
        this.close();
        this.$router.push('/tabs/profile');
      } catch (error) {
        this.submit = false;
        this.errorMsg = error.message;
      }
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
        this.$tracker.logEvent('sign_in');
        this.close();
        this.$router.push('/tabs/products');
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