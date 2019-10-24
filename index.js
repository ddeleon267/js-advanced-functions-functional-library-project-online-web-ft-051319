const fi = (function() { //
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let newCollection = []

      if (Array.isArray(collection)) {
        newCollection = collection.slice()
      } else {
        newCollection = Object.values(collection)
      }

      for(let i = 0; i < newCollection.length; i++){
        callback(newCollection[i])
      }
      return collection
    },

    map: function (collection, callback) {
      let values = []
      let newCollection = []

      if (Array.isArray(collection)) {
        values = collection.slice()
      } else {
        values = Object.values(collection)
      }

      for(let i = 0; i < values.length; i++){
        newCollection.push(callback(values[i]))
      }
      return newCollection
    },

    reduce: function(collection, callback, acc) {
      let i = 0
      let total = acc

      if (!acc){
        total = collection[0]
        i = 1
      }
      for(i; i < collection.length; i++){
        total = callback(total, collection[i], collection)
      }
      return total
    },

    find: function(collection, predicate) {
      let values = []
      if (Array.isArray(collection)) {
        values = collection.slice()
      } else {
        values = Object.values(collection)
      }
      for(let i = 0; i < values.length; i++){
        if (predicate(values[i])){
          return values[i]
        }
      }
    },
    filter: function(collection, predicate) {
      let values = []
      let newCollection = []
      if (Array.isArray(collection)) {
        values = collection.slice()
      } else {
        values = Object.values(collection)
      }
      for(let i = 0; i < values.length; i++){
        if (predicate(values[i])){
          newCollection.push(values[i])
        }
      }
      return newCollection
    },

    size: function(collection){
      let newCollection = 0
      if (Array.isArray(collection)) {
        newCollection = collection.slice()
      } else {
        newCollection = Object.values(collection)
      }
      return newCollection.length
    },

    first: function(collection, n){
      let newCollection = 0
      if (Array.isArray(collection)) {
        newCollection = collection.slice()
      } else {
        newCollection = Object.values(collection)
      }

      if (n){
        return newCollection.slice(0, n)
      }
      return newCollection[0]
    },

    last: function(collection, n){
      let newCollection = 0
      if (Array.isArray(collection)) {
        newCollection = collection.slice()
      } else {
        newCollection = Object.values(collection)
      }

      if (n){
        return newCollection.slice(-1*n)
      }
      return newCollection[newCollection.length-1]
    },

    compact: function (collection) {
      let values = []
      let newCollection = []

      if (Array.isArray(collection)) {
        values = collection.slice()
      } else {
        values = Object.values(collection)
      }

      for(let i = 0; i < values.length; i++){
        if (values[i]){
          newCollection.push(values[i])
        }
      }
      return newCollection
    },

    sortBy: function (collection, callback) {
      let newCollection = collection.slice()
      return newCollection.sort(function(a, b){
        return callback(a) - callback(b)
      })
    },

    flatten: function (array, shallow) {
      let newArr = []

      function handleArr(){
      for(let i = 0; i < array.length){
        if (Array.isArray(array[i])){

        } else {

        }
      }
    }
    },

    functions: function(array, callback) {

    },


  }
})()

fi.libraryMethod()
