import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'

Vue.use(Vuex)

const state = {
  // local
  ver: 1,
  idKey: 3,
  lastUsed: 1,

  // bookmarks
  boards: [{
    id: 1,
    name: "Inbox",
    idKey: 7,
    links: [{
      id: 1, name: "pinnd - testing 1",
      link: "http://localhost:4000", tags: ["dev", "home"]
    },{
      id: 2, name: "pinnd - testing 2",
      link: "http://localhost:4000", tags: []
    },{
      id: 3, name: "pinnd - testing 3",
      link: "http://localhost:4000", tags: []
    },{
      id: 4, name: "pinnd - testing 4",
      link: "http://localhost:4000", tags: []
    },{
      id: 5, name: "pinnd - testing 5",
      link: "http://localhost:4000", tags: []
    },{
      id: 6, name: "pinnd - testing 6",
      link: "http://localhost:4000", tags: []
    }]
  },{
    id: 2,
    name: "Inbox 2",
    idKey: 7,
    links: [{
      id: 1, name: "testing 1",
      link: "http://localhost:4000", tags: []
    },{
      id: 2, name: "testing 2",
      link: "http://localhost:4000", tags: []
    },{
      id: 3, name: "testing 3",
      link: "http://localhost:4000", tags: []
    },{
      id: 4, name: "testing 4",
      link: "http://localhost:4000", tags: []
    },{
      id: 5, name: "testing 5",
      link: "http://localhost:4000", tags: []
    },{
      id: 6, name: "testing 6",
      link: "http://localhost:4000", tags: []
    }]
  }],

  trash: {
    name: "Trash",
    links: [],
    boards: []
  },

  // visul config
  view: {
    cols: 3,
    rows: 5,
    trash: false
  },

  // filtering
  filter: {
    by: false,
    active: false,
    key: 'string'
  },
}

export default new Vuex.Store({ state, mutations })