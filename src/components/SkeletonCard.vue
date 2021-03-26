<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>
        <ion-skeleton-text animated style="width: 40%"></ion-skeleton-text>
      </ion-card-title>
    </ion-card-header>

    <ion-card-content>
      <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>
      <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
      <div class="cta">
        <ion-skeleton-text animated style="width: 50%"></ion-skeleton-text>
      </div>
    </ion-card-content>
  </ion-card>
</template>

<script>
import { 
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonSkeletonText
} from '@ionic/vue';

export default ({
  name: "SkeletonCard",
  components: {
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardTitle,
    IonSkeletonText
  }
});
</script>

<style>
  /* Custom Skeleton Line Height and Margin */
  .custom-skeleton ion-skeleton-text {
    line-height: 13px;
  }

  .custom-skeleton ion-skeleton-text:last-child {
    margin-bottom: 5px;
  }
</style>