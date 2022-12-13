<template>
<PromotionHeader :headerName="`Promotion`"/>
<PromotionContent/>
</template>

<script>

import PromotionHeader from '@/components/promotion/promotion-header.vue';
import PromotionContent from '@/components/promotion/promotion-content.vue';

export default {
    components: {
        PromotionHeader,PromotionContent
    },
}
</script>

<style>

</style>