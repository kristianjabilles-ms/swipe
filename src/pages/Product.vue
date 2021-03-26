<template>
  <base-page :page-title="product.name" back-link="/tabs/products">
    <div class="product ion-padding">
      <ion-img :src="product.image_url"></ion-img>
      <h3 class="product__name">{{product.name}}</h3>
      <p class="product__shoutout">{{product.shoutout_label}}</p>
      <div class="highlights-wrapper">
        <div class="highlights" v-for="({label, value}, index) in product.highlights" :key="index">
          <h4 class="highlights__value">{{value}}</h4>
          <p class="highlights__label">{{label}}</p>
        </div>
      </div>
      <ion-button expand="block">Apply now</ion-button>
      <!-- <p>{{product.meta_description}}</p> -->
    </div>
  </base-page>
</template>

<script>
import { IonImg, IonButton } from '@ionic/vue';

export default ({
  name: 'Product',
  components: {
    IonImg,
    IonButton
  },
  data() {
    return {
      slug: this.$route.params.slug
    }
  },
  computed: {
    product() {
      return this.$store.getters.product(this.slug);
    },
  },
});
</script>

<style lang="scss" scoped>
.product {
  color: #666666;

  ion-img {
    width: 240px;
  }

  &__name {
    color: #0d0d0d;
  }
}

.highlights-wrapper {
  display: flex;
}

.highlights {
  &__value {
    font-size: 16px;
    color: #0d0d0d;
  }

  &__label {
    font-size: 12px;
  }
}
</style>