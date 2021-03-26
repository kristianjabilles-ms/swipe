<template>
  <base-page page-title="My Profile" class="profile">
    <ion-card>
      <ion-card-header>
        <div class="profile__avatar">
          <ion-avatar @click="takePhoto">
            <img :src="avatar" @error="defaultImg">
          </ion-avatar>
        </div>
        <ion-card-subtitle>Hello</ion-card-subtitle>
        <ion-card-title>{{user && user.displayName}}</ion-card-title>
        <p class="profile__email">
          {{user && user.email}}
          <ion-icon
            :ios="shieldCheckmarkOutline"
            :md="shieldCheckmarkOutline"
            size="small"
            v-if="user && user.emailVerified"
          ></ion-icon>
        </p>
      </ion-card-header>

      <ion-card-content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua totam rem aperiam.
        <div class="profile__action">
          <ion-button @click="logout">Log out</ion-button>
        </div>
      </ion-card-content>
    </ion-card>
  </base-page>
</template>

<script>
// import firebase from 'firebase/app';
// import 'firebase/storage';
import { Plugins, CameraResultType } from '@capacitor/core';
import { personOutline } from 'ionicons/icons';

const { Camera } = Plugins;

import {
  shieldCheckmarkOutline,
} from 'ionicons/icons';
import {
  IonIcon,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonAvatar,
} from '@ionic/vue';

export default ({
  name: 'Profile',
  data() {
    return {
      user: {},
      avatar: ''
    }
  },
  components: {
    IonIcon,
    IonButton,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardSubtitle,
    IonCardTitle,
    IonAvatar
  },
  async created() {
    this.$auth.onAuthStateChanged(user => {
      this.user = user;
    });
  },
  methods: {
    async takePhoto() {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri
      });

      // const ref= firebase.storage().ref('image.webPath');
      // ref.put(image.webPath).then(snapshot => {
      //   console.log(snapshot)
      //   console.log('Uploaded a blob or file!');
      // });

      this.avatar = image.webPath;
    },
    logout() {
      this.$auth.signOut().then(() => {
        this.$tracker.logEvent('sign_out');
        this.$router.push('/welcome');
      }).catch((error) => {
        console.log(error);
      });
    }
  },
  setup() {
    const defaultImg = (e) => {
      e.target.src = `${process.env.VUE_APP_FIREBASE_STORAGE_API}/${process.env.VUE_APP_FIREBASE_STORAGE_BUCKET}/o/images%2Fslide-3.png?alt=media&token=f7f8432d-67d5-4462-8801-00137d125c61`;
      return e;
    };

    return {
      defaultImg,
      personOutline,
      shieldCheckmarkOutline
    }
  }
});
</script>

<style lang="scss" scoped>
$avatar-size: 80px;

.profile {
  &__email {
    display: flex;

    ion-icon {
      color: green;
      margin-left: 8px;
    }
  }

  &__action {
    margin-top: 24px;
  }

  &__avatar {
    padding-bottom: 24px;

    ion-avatar {
      height: $avatar-size;
      width: $avatar-size;
    }
  }
}
</style>