<template>

<como-header/>

<router-view />   

<como-banners/>
<como-footer/>

</template>
<script>
import comoFooter from '@/components/como-footer.vue';
import comoBanners from '@/components/como-lower-banners.vue';
import comoHeader from '@/components/como-header.vue';

export default {
    components: {
        comoFooter,comoBanners,comoHeader
    },
    setup() {

    }
}
</script>

<style>

</style>
