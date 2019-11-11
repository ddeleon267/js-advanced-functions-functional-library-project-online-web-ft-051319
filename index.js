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

      let newSort = collection.slice()
      return newSort.sort(function (a, b) {
        // ranked in ascending order by the results of running each value through callback.
        // The values from the original
        // array should be retained within the sorted copy, just in ascending order.
          return callback(a) - callback(b)
        })
    },

//     unpack: function(receiver, arr) {
//   for (let val of arr)
//     receiver.push(val)
// },

// fi.flatten([1, [2], [3, [[4]]]]);
// => [1, 2, 3, 4];
//
// fi.flatten([1, [2], [3, [[4]]]], true);
// => [1, 2, 3, [[4]]];

  flatten: function(collection, shallow, newArr=[]) { // basically makings sure this arr exists and has a default initially

    if (shallow) {
        for (let currentValue of collection){ // iterate through current val in collection
            if (Array.isArray(currentValue)){ // it it's array, go through and grb each item and push it
                for (let newValue of currentValue) {
                  newArr.push(newValue)
                }
            } else { // if not, just push current value.
                newArr.push(currentValue)
            }
        }
    } else {
        for (let currentValue of collection) { // iterate through current value in collction
            if (Array.isArray(currentValue)) {
              fi.flatten(currentValue, false, newArr) // repeat process for this value - handle nestedness
            } else {
              newArr.push(currentValue)
            }
        }
    }

    return newArr

    // refactored version
    for (let currentValue of collection){
        if (shallow && Array.isArray(currentValue)) {
            for (let newValue of currentValue) {
                newArr.push(newValue)
            }
        } else if (!shallow && Array.isArray(currentValue)) {
            fi.flatten(currentValue, false, newArr)
        } else {
            newArr.push(currentValue)
        }
    }

    return newArr
  },

    uniq: function (collection, isSorted = false, callback = false) {
      // collection = collection.sortBy(callback)
      let newCollection = []
      for (let i = 0; i < collection.length; i++) {
        let currentValue = collection[i]
        // let value = currentValue

        if (!newCollection.includes(currentValue)){
          newCollection.push(currentValue)
        } else {
          collection.splice(i, 1)
        }
      }
      return collection
    },

    functions: function(array, callback) {

    },


  }
})()

fi.libraryMethod()
