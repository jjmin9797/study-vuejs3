<template>
<DessertHeader :headerName="`Dessert`"/>
  <DessertList/>
</template>

<script>
import DessertList from '@/components/flower/flower-list.vue';
import DessertHeader from '@/components/promotion/promotion-header.vue';
export default {
    components: {
        DessertList,
        DessertHeader
    }

}
</script>

<style>

</style>