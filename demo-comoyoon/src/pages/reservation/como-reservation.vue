<template>
  <ReservationHeader :headerName="`Reservation`"/>
  <ReservationForm/>
</template>

<script>
import ReservationHeader from '@/components/promotion/promotion-header.vue';
import ReservationForm from '@/components/reservation/reservation-form.vue';
export default {
    components: {
        ReservationHeader,
        ReservationForm
    }

}
</script>

<style>

</style>