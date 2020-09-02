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
export default {

}
</script>

<style>

</style>