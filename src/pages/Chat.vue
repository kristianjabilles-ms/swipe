<template>
  <base-page page-title="Chat">
    <iframe src="https://fxo.io/m/kg4am9k5" width="100%" height="100%" style="border: 3px solid #f9f9fb; width: 100%; height: 100%;" allowfullscreen></iframe>
  </base-page>
</template>

<script>
import { mapActions } from 'vuex';
// import {
//   IonSearchbar,
// } from '@ionic/vue';
// import ProductCard from '@/components/ProductCard';
// import SkeletonCard from '@/components/SkeletonCard';

export default ({
  name: 'Chat',
  components: {
    // IonSearchbar,
    // ProductCard,
    // SkeletonCard
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