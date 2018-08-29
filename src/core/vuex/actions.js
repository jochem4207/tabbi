const actions = {

  esc({commit, state}) {
    if (state._.filter.active) {
      return commit('update_local', { filter: { key: '', active: false } } )
    }
    if (state.view.info) return commit('update_view', { info: false })
  },

  enable_sync({commit, state}, sync) {
    sync.enable(state).then((data) => { 
      if (data.state) {
        commit('update_meta', data.state.meta)
        commit('update_view', data.state.view)
        commit('update_trash', data.state.trash)
        //TODO: Merge instead of replace boards/sessions
        commit('update_boards', data.state.boards)
        commit('update_sessions', data.state.sessions)
      }
      else commit('update_meta', { syncData: data.sync }) 
    })
  },

  disable_sync({commit, state}, sync) {
    sync.disable().then(() => { commit('update_meta', { syncData: false }) })
  },

  parse_bookmarks({commit, state}, data) {
    let file = data.target.files[0]
    if (!file) return alert("No File Uploaded")
    let r = new FileReader()
    r.onload = function(e) {
      // I hope I figure out a better way to do this
      let boards = {}

      // render file as dummy DOM 
      let dummy = document.createElement('html')
      dummy.innerHTML = e.target.result
      let bookmarks = dummy.getElementsByTagName('a')

      // process every link for import
      Array.prototype.forEach.call(bookmarks, (el) => {
        let result = { tags: [] }
        let c = el.closest('DL').previousElementSibling
        let cat = c.innerText

        // loop through all parent folders
        // add the sub folders as tags
        while (c.closest('DL')) {
          c = c.closest('DL').previousElementSibling
          if (c.innerText != "Bookmarks" && c.innerText != "Bookmarks Bar") {
            result.tags.push(cat)
            cat = c.innerText
          }
        }

        // generate board if doesn't exist
        if (!boards[cat]) boards[cat] = { name: cat, links: [] }

        // add link to board
        result.name = el.innerText ? el.innerText : el.href
        result.link = el.href
        boards[cat].links.push(result)
      })

      commit('import_bookmarks', boards)
    }
    r.readAsText(file)
  }

}

export default actions