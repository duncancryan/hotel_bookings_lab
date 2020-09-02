<template>
  <form id="booking-form" v-on:submit.prevent="addBooking">
      <h3>Add Booking:</h3>
      <div class="formWrap">
          <label for="name">Name: </label>
          <input type="text" id="name" v-model="name" required/>
      </div>
      <div class="formWrap">
          <label for="email">Email: </label>
          <input type="email" id="email" v-model="email" required/>
      </div>
      <input type="submit" value="Add" id="save">

  </form>
</template>

<script>
import { eventBus } from '@/main.js'
import BookingService from '@/services/BookingService.js'

export default {
    name: 'booking-from',
    data() {
        return {
            name: "",
            email: "",
            checked_in: false
        }
    },
    methods: {
        addBooking: function() {
            const booking = {
                name: this.name,
                email: this.email,
                checked_in: this.checked_in
            }
            BookingService.postBooking(booking)
            .then(res => eventBus.$emit('booking-added', res))
            this.name = ""
            this.email = ""
        }
    }
}
</script>

<style>

</style>