const fi = (function() { //
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const newCollection = Array.isArray(collection) ? collection.slice() : Object.values(collection);
      for (let i = 0; i < newCollection.length; i++) {
        callback(newCollection[i], i, newCollection);
      }
      return collection;
    },

    map: function (collection, callback) {
      const values = Array.isArray(collection) ? collection.slice() : Object.values(collection);
      const newCollection = []

      for(let i = 0; i < values.length; i++){
        newCollection.push(callback(values[i], i, collection))
      }
      return newCollection
    },

    reduce: function(collection, callback, acc) { // works, and gets around having to set a default of -2 for acc
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
  //   reduce: function(collection, callback, acc = -2) { // works, but hacky
  //     for (let i = 0; i < collection.length; i++) {
  //       acc = callback(acc, collection[i], collection);
  //     }
  //     return acc;
  //   },
   //
  //   reduce: function(array, callback, acc) { // also works, still hacky
  //    acc = acc ? acc : -2
  //    for (let i = 0; i < array.length; i++) {
  //      acc = callback(acc, array[i])
  //    }
  //    return acc
  //  },

    find: function(collection, predicate) {
      const values = Array.isArray(collection) ? collection.slice() : Object.values(collection);
      for(let i = 0; i < values.length; i++){
        if (predicate(values[i])){
          return values[i]
        }
      }
    },

    filter: function(collection, predicate) {
      const values = Array.isArray(collection) ? collection.slice() : Object.values(collection);
      const newCollection = []

      for(let i = 0; i < values.length; i++){
        if (predicate(values[i])){
          newCollection.push(values[i])
        }
      }
      return newCollection
    },

    size: function(collection){
      const newCollection = Array.isArray(collection) ? collection.slice() : Object.values(collection);
      return newCollection.length
    },

    first: function(collection, n){
      const newCollection = Array.isArray(collection) ? collection.slice() : Object.values(collection);
      if (n){
        return newCollection.slice(0, n)
      } else {
        return newCollection[0]
      }
    },

    last: function(collection, n){
      const newCollection = Array.isArray(collection) ? collection.slice() : Object.values(collection);
      if (n){
        return newCollection.slice(-1*n)
      } else {
        return newCollection[newCollection.length-1]
      }
    },

    compact: function (collection) {
      const values = Array.isArray(collection) ? collection.slice() : Object.values(collection);
      const newCollection = []

      for(let i = 0; i < values.length; i++){
        if (values[i]){
          newCollection.push(values[i])
        }
      }
      return newCollection
    },

    sortBy: function (collection, callback) {
      const newSort = collection.slice()
      return newSort.sort(function (a, b) {
        // ranked in ascending order by the results of running each value through callback.
        // The values from the original
        // array should be retained within the sorted copy, just in ascending order.
          return callback(a) - callback(b)
        })
    },

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
    // for (let currentValue of collection){
    //     if (shallow && Array.isArray(currentValue)) {
    //         for (let newValue of currentValue) {
    //             newArr.push(newValue)
    //         }
    //     } else if (!shallow && Array.isArray(currentValue)) {
    //         fi.flatten(currentValue, false, newArr)
    //     } else {
    //         newArr.push(currentValue)
    //     }
    // }
    //
    // return newArr
  },

  uniq: function(collection, sorted, callback) {
   const uniqueVals = []
   const uniqueCallbackVals = []

   for (const value in collection) {
       if (callback) {
           if (!uniqueCallbackVals.includes(callback(collection[value]))) {
               uniqueCallbackVals.push(callback(collection[value]))
               uniqueVals.push(collection[value])
           }
       } else {
           if (!uniqueVals.includes(collection[value])) {
               uniqueVals.push(collection[value])
           }
       }
   }
   return uniqueVals
  },

  keys: function(collection) {
    const keys = []
    for (const key in collection) {
      keys.push(key)
    }
    return keys
  },

  values: function(collection) {
    const values = []
    for (const key in collection) {
      values.push(collection[key])
    }
    return values
  },

  functions: function(object) {
    const functionNames = []
    for (const property in object) {
      if (typeof object[property] == 'function') {
        functionNames.push(property)
      }
    }
    return functionNames.sort()
  },


  }
})()

fi.libraryMethod()
