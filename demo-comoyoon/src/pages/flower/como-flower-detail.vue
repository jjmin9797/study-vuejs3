<template>
    <FlowerDetailHeader :headerName="`Flower/Flower Detail`"/>
  <FlowerDetail :flowerId="flowerId"/>

</template>

<script>
import FlowerDetail from '@/components/flower/flower-detail.vue';
import FlowerDetailHeader from '@/components/promotion/promotion-header.vue';
import {useRoute} from 'vue-router';
export default {
    components: {
        FlowerDetail,FlowerDetailHeader
    },
    setup() {
        const route = useRoute();
        const flowerId = route.query.flowerId;
        return {
            flowerId
        }
    }
    
}
</script>

<style>

</style>