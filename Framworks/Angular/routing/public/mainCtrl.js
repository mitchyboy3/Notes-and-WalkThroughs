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

      // add(2, 2, function(result){
      //   //do something with the result
      //   console.log('step 1')
      //   add(result, 4, function(result){
      //     //do something with the result
      //     console.log('step 2')
      //     add(result, 16, function(result){
      //       //do something with the result
      //       console.log('step 3')
      //       add(result, 26, function(result){
      //         //do something with the result
      //         console.log('step 4')
      //         add(result, 50, function(result){
      //           //do something with the result
      //           console.log('step 5')
      //           console.log(result)
      //         })
      //       })
      //     })
      //   })
      // })


      // //Promise Chaining  
    
      // function add(val1, val2){
      //   var defered = $q.defer()
      //   setTimeout(function(){
      //     defered.resolve(val1 + val2);
      //   }, 500)
      //   return defered.promise
      // }

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