<template>
  <div class="booking">
    <h3>{{ booking.name }}</h3>
    <p>{{ booking.email }}</p>
    <p v-if="booking.checked_in">Checked In</p>
    <p v-if="!booking.checked_in">Not Checked In</p>

    <button v-on:click="deleteBooking">Delete Booking</button>
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
    }
  }
};
</script>

<style>
</style>