import { ActionTypes } from '@/store/action-types'
import { MutationTypes } from '@/store/mutation-types'

const state = {
  events: []
}

const getters = {}

const mutations = {
  [MutationTypes.events.ADD_EVENT] (state, event) {
    state.events.push(event)
  },
  [MutationTypes.events.DELETE_EVENT] (state, index) {
    state.events.splice(index, 1)
  },
  [MutationTypes.events.SET_EVENTS] (state, events) {
    state.events = events
  }
}

const actions = {
  [ActionTypes.events.FETCH_EVENTS] ({commit}) {
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
    commit(MutationTypes.events.SET_EVENTS, events)
  }
}

export default {
  // namespace: true, あった方がいいけど複雑すぎるかも？
  state,
  getters,
  mutations,
  actions
}
