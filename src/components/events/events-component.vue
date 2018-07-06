<template>

  <div class="container" id="events">
    <!-- add an event form -->
    <AddForm :onSubmitButtonClick="addEvent"/>
    <!-- show the events -->
    <DisplayForm :events="events" :deleteEvent="deleteEvent"/>
  </div>
</template>

<script>
import AddForm from '@/commons/add-form';
import DisplayForm from '@/commons/display-form';
import { EventsService } from './events-service'
import { mapState } from 'vuex';
import eventsStore from './events-store'

const namespace = 'eventStore'

export default {
  name: 'Events',
  computed: mapState({
    events: state => state.eventStore.events
  }),
  methods: {
    addEvent(event) {
      EventsService.addEvent(this.$store, event)
    },
    deleteEvent(index) {
      if(confirm("Are you sure you want to delete this event?")) {
        // $remove is a Vue convenience method similar to splice
        EventsService.deleteEvent(this.$store, index);
      }
    },
  },
  created () {
    EventsService.registerModuleIfNeeded(this.$store, namespace, eventsStore)
  },
  mounted () {
    EventsService.fetchEvents(this.$store, namespace)
  },
  destroyed () {
    EventsService.unregisterModule(this.$store, namespace)
  },
  components: {
    AddForm,
    DisplayForm
  }
}
</script>
