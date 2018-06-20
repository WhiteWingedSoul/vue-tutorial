<template>
  <div class="col-sm-6">
    <div class="list-group">
      <a href="#" class="list-group-item" v-for="(event, index) in events">
        <h4 class="list-group-item-heading">
          <i class="glyphicon glyphicon-bullhorn"></i>
          {{ event.name }}
        </h4>

        <h5>
          <i class="glyphicon glyphicon-calendar" v-if="event.date"></i>
          {{ event.date  }}
        </h5>

        <p class="list-group-item-text" v-if="event.description">
          {{ event.description  }}
        </p>

        <button class="btn btn-xs btn-danger" v-on:click="deleteEvent(index)">Delete</button>
      </a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DisplayEvents',
  props: [
    'events',
    'deleteEvent',
  ],
}

</script>
