const state = {

  meta: {
    ver:        1,
    linkIndex:  1,
    boardIndex: 2,
    lastBoard:  1,
    updatedAt:  0,
    createdAt:  Date.now(),
    syncData:   false
  },

  view: {
    grid:    3,
    links:   5,
    splash:  true,
    sidebar: true,
    tab:     "boards"
  },

  boards:   [ { id: 1, name: "Inbox", links: [] } ],

  sessions: [],
  
  trash:    { 
    name: "Trash",
    links: [],
    boards: []
  },

  // local
  _: {
    config: false,
    mobile: false,
    filter: {
      key:   "",
      type:  "string",
      active: false
    }
  }
}

export default state