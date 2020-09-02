<template>
  <div class="booking">
    <h3>{{ booking.name }}</h3>
    <p>{{ booking.email }}</p>
    <p v-if="booking.checked_in">Checked In</p>
    <p v-if="!booking.checked_in">Not Checked In</p>

    <button v-on:click="deleteBooking">Delete Booking</button>
    <button v-on:click="checkIn">Check In</button>
  </div>
</template>

<script>
import { eventBus } from "@/main";
import BookingService from "@/services/BookingService";

export default {
  name: "booking-item",
  props: ["booking"],
  methods: {
    deleteBooking() {
      BookingService.deleteBooking(this.booking._id).then(() =>
        eventBus.$emit("booking-deleted", this.booking._id)
      );
    },
    checkIn() {
      const booking = {
        name: this.name,
        email: this.email,
        checked_in: true
      }
      BookingService.putBooking(this.booking._id, booking)
      .then(res => eventBus.$emit('booking-changed', res))
    }
  }
};
</script>

<style>
</style>