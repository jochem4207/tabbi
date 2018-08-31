export default {
  install: function(Vue) {
    Vue.prototype.$filtered = function(filter, data, isBoard) {

      let compare = function(a, b) {
        if (!b) return true;
        let newA = a.toLowerCase();
        if (b.constructor === Array) {
          if (!b.length) return true;
          for (var i = b.length - 1; i >= 0; i--) {
            let newB = b[i].toLowerCase();
            if (newB.indexOf(newA) > -1) return false;
          }
          return true;
        } else {
          let newB = b.toLowerCase();
          return newB.indexOf(newA) < 0;
        }
      }

      let find = function(thing, arr) {
        let result = [];
        for (var l = arr.length - 1; l >= 0; l--) {
          if (thing == 'str') result.push(arr[l].name);
          else if (arr[l].tags && arr[l].tags.length) {
            for (var t = arr[l].tags.length - 1; t >= 0; t--) {
              result.push(arr[l].tags[t]);
            }
          }
        }
        return result;
      }

      let pool = [];
      if (!filter.active) return false;
      if (isBoard && filter.by == 'board') pool = data.name
      if (isBoard && filter.by == 'tag') pool = find('tags', data.links)
      if (isBoard && filter.by == 'string') pool = find('str', data.links)

      if (!isBoard && filter.by == 'board') return false
      if (!isBoard && filter.by == 'tag') pool = data.tags
      if (!isBoard && filter.by == 'string') pool = data.name

      return compare(filter.key, pool)

    }
  }
}