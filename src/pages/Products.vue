<template>
  <base-page page-title="Products">
    <ion-searchbar v-model="query" debounce="0" animated></ion-searchbar>
    <template v-if="products.length !== 0">
          <product-card v-for="(product, index) in products" :key="index" :data="product" />
    </template>
    <template v-else>
      <skeleton-card v-for="skeleton in skeletons" :key="skeleton"/>
    </template>
  </base-page>
</template>

<script>
import { mapActions } from 'vuex';
import {
  IonSearchbar,
} from '@ionic/vue';
import ProductCard from '@/components/ProductCard';
import SkeletonCard from '@/components/SkeletonCard';

export default ({
  name: 'Products',
  components: {
    IonSearchbar,
    ProductCard,
    SkeletonCard
  },
  data() {
    return {
      skeletons: 5,
      query: ''
    }
  },
  computed: {
    products() {
      return Object.values(this.$store.getters.products).filter(({ attributes }) => {
        return attributes.name.toLowerCase().includes(this.query.toLowerCase());
      });
    }
  },
  methods: {
    ...mapActions(['fetchProducts']),
  },
  created() {
    this.fetchProducts();
  },
  mounted() {
    this.$tracker.logEvent('page_view', {
      country: 'SG'
    });
  }
});
</script>

<style scoped>
ion-searchbar {
  padding-bottom: 0;
}
</style>