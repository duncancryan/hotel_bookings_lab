  <template>
  <div id="app">
    <booking-form />
    <booking-list :bookings="bookings" />
  </div>
</template>

<script>
import BookingForm from './components/BookingForm';
import BookingList from './components/BookingList';
import BookingService from './services/BookingService';
import { eventBus } from '@/main';

export default {
  name: 'App',
  data(){
    return {
      bookings: []
    }
  },
  mounted() {
    this.fetchBookings();

    eventBus.$on('booking-deleted', (id) => {
      const index = this.bookings.findIndex(booking => booking._id === id)
      this.bookings.splice(index, 1)
    })

    eventBus.$on('booking-added', (booking) => {
      this.bookings.push(booking)
    })
  },
  components: {
    'booking-form': BookingForm,
    'booking-list': BookingList
  },
  methods: {
    fetchBookings() {
      BookingService.getBookings()
        .then(bookings => this.bookings = bookings);
    }
  }
}
</script>

<style>

</style>
