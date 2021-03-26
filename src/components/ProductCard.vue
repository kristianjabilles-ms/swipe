<template>
  <ion-card @click.prevent="productDetails">
    <ion-card-header>
      <span class="sponsored" v-if="sponsored">Sponsored</span>
      <ion-img :src="product.image_url"></ion-img>
      <!-- <ion-card-subtitle>{{product.shoutout_label}}</ion-card-subtitle> -->
      <ion-card-title>{{product.name}}</ion-card-title>
    </ion-card-header>

    <ion-card-content>
      {{product.shoutout_label}}
      <div class="cta">
        <button @click.prevent.stop="apply">Apply now</button>
      </div>
    </ion-card-content>
  </ion-card>
</template>

<script>
import {
  IonCard,
  IonCardHeader,
  IonCardContent,
  // IonCardSubtitle,
  IonCardTitle,
  IonImg,
  // IonButton
} from '@ionic/vue';

export default ({
  name: 'ProductCard',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  computed: {
    product() {
      return this.data.attributes;
    },
    sponsored() {
      const { sponsored_listing } = this.product;
      return sponsored_listing && sponsored_listing.active && sponsored_listing.enabled;
    }
  },
  components: {
    IonCard,
    IonCardHeader,
    IonCardContent,
    // IonCardSubtitle,
    IonCardTitle,
    IonImg,
    // IonButton
  },
  methods: {
    productDetails() {
      this.$tracker.logEvent('view_details', {
        product: this.product.slug
      });

      this.$router.push(`/product/${this.product.slug}`)
    },
    apply() {
      this.$tracker.logEvent('apply_now', {
        product: this.product.slug
      });
    }
  }
})
</script>

<style scoped>
ion-card-header {
  padding-bottom: 4px;
  position: relative;
}

ion-card-title {
  font-size: 18px;
  font-weight: 400;
}

ion-card-content {
  font-size: 14px; 
}

ion-img {
  max-width: 80px;
  margin-bottom: 24px;
}

.cta {
  display: flex;
  justify-content: flex-end;
}

.cta button {
  background: transparent;
  color: var(--ion-color-primary);
  padding: 12px 0 0;
  outline: none;
}

.sponsored {
  font-size: 10px;
  position: absolute;
  right: 0;
  padding-right: 24px;
}
</style>