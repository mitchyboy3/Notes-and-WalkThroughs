(function(){
  angular
    .module('app')
    .controller('mainCtrl', function($scope, $q, mainService){

      // //NESTING CALLBACKS aka CALLBACK HELL






// function add(val1, val2, cb){
//   setTimeout(function(){
//     cb(val1 + val2)
//   }, 500)
// }

// add(1, 2, function(val){
//   //do something with that value 
//   console.log('step 1')
//   add(val, 6, function(val){
//     //do something with that value
//     console.log('step 2')
//     add(val, 11, function(val){
//       //do something with that value
//       console.log('step 3')
//       add(val, 30, function(val){
//         //do something with that value
//         console.log('step 4')
//         add(val, 50, function(val){
//           console.log(val)
//         })
//       })
//     })
//   })
// })



 //Promise Chaining  
    
      function otheradd(val1, val2){

        var defered = $q.defer()

        setTimeout(function(){
          defered.resolve(val1 + val2);
        }, 500)


        return defered.promise
      }


otheradd(5, 5)
.then(function(result){
  console.log('step 1')
  return otheradd(result, 10)
})
.then(function(result){
  console.log('step 2')
  return otheradd(result, 30)
})
.then(function(result){
  console.log('step 3')
  return otheradd(result, 50)
})
.then(function(result){
  console.log(result)
})







      // add(4, 4)
      //   .then(function(result){
      //     //do something with the result
      //     console.log('step 1')
      //     return add(result, 8)
      //   })
      //   .then(function(result){
      //     //do something with the result
      //     console.log('step 2')
      //     return add(result, 16)
      //   })
      //   .then(function(result){
      //     //do something with the result
      //     console.log('step 3')
      //     return add(result, 32)
      //   })
      //   .then(function(result){
      //     //do something with the result
      //     console.log('step 4')
      //     return add(result, 36)
      //   })
      //   .then(function(result){
      //     //do something with the result
      //     console.log('step 5')
      //     console.log(result)
      //   })




    })
})();