<template>

  <div class="container" id="events">

    <!-- add an event form -->
    <AddEvent :addEvent="addEvent"/>

    <!-- show the events -->
    <DisplayEvents :events="events" :deleteEvent="deleteEvent"/>

  </div>
</template>

<script>
import AddEvent from './AddEvent';
import DisplayEvents from './DisplayEvents';

export default {
  name: 'Events',
  data () {
    return {
      events: [],
    }
  },
  methods: {
    addEvent(event) {
      this.events.push(event);
    },
    fetchEvents() {
      var events = [
        {
          id: 1,
          name: 'TIFF',
          description: 'Toronto International Film Festival',
          date: '2015-09-10'
        },
        {
          id: 2,
          name: 'The Martian Premiere',
          description: 'The Martian comes to theatres.',
          date: '2015-10-02'
        },
        {
          id: 3,
          name: 'SXSW',
          description: 'Music, film interactive festival in Austin, Tx.',
          date: '2016-03-11'
        },
      ];
      this.events = events;
      // this.$set(this.$data, 'events', events);
    },
    deleteEvent(index) {
      if(confirm("Are you sure you want to delete this event?")) {
        // $remove is a Vue convenience method similar to splice
        this.events.splice(index, 1);
      }
    },
  },
  mounted () {
    this.fetchEvents();
  },
  components: {
    AddEvent,
    DisplayEvents
  }
}
</script>
