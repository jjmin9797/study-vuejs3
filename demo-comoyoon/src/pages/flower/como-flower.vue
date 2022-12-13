<template>
  <FlowerHeader :headerName="`Flower`"/>
  <FlowerList/>
</template>

<script>
import FlowerList from '@/components/flower/flower-list.vue'
import FlowerHeader from '@/components/promotion/promotion-header.vue'
export default {
    components: {
        FlowerList,
        FlowerHeader
    }
}
</script>

<style>

</style>