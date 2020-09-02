<template>
  <div id="booking-list">
      <h2>Bookings</h2>
      <booking-item v-for="(booking, index) in bookings" :key="index" :booking="booking"/>
  </div>
</template>

<script>
import BookingItem from './BookingItem';
export default {
    name: 'booking-list',
    components: {
        'booking-item': BookingItem
    },
    props: ['bookings']
}
</script>

<style>

</style>