<template>
<PromotionHeader/>
<PromotionDetail :promotionId="promotionId"/>
</template>

<script>
import {useRoute} from 'vue-router';
import PromotionHeader from '@/components/promotion/promotion-header.vue';
import PromotionDetail from '@/components/promotion/promotion-detail.vue';
export default {
  components:{
    PromotionHeader,PromotionDetail
  },
  setup() {
    const route = useRoute();
    const promotionId = route.query.promotionId;
    return {
      promotionId
    }
  }
}
</script>

<style>

</style>