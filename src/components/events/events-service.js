import { ActionTypes } from '@/store/action-types'
import { MutationTypes } from '@/store/mutation-types'

export const EventsService = {
  registerModuleIfNeeded(store, name, module) {
    if (!(store && store.state && store.state[name])) {
        store.registerModule(name, module);
    }
  },
  unregisterModule ({unregisterModule}, name) {
    unregisterModule(name)
  },
  addEvent ({commit}, event) {
    commit(MutationTypes.events.ADD_EVENT, event)
  },
  deleteEvent ({commit}, index) {
    commit(MutationTypes.events.DELETE_EVENT, index)
  },
  fetchEvents ({dispatch}, namespace) {
    dispatch(ActionTypes.events.FETCH_EVENTS)
  }
}
