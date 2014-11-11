var app = angular.module("lizkaApp", []);


app.directive('product', function(){
    
    return {
        restrict: 'E',
        scope: {
            tile: '=',
            filtering: '=',
            hideSpecial: '=',
            basket: '=',
            total: '='
        },
        templateUrl: 'product.html',
        link: function(scope) {
          
            scope.isChecked = false;
          
            scope.addToBasket = function(){
               if(scope.isChecked){
                scope.total.total -= parseFloat(scope.tile.price);
                  scope.basket.splice(scope.basket.indexOf(scope.tile),1);
                
               }
               else{
                 scope.total.total += parseFloat(scope.tile.price);
                scope.basket.push(angular.copy(scope.tile));
               }
          
            };
            
            scope.tagSearching = function(name) {
            if(!scope.filtering.search){
              scope.filtering.search = name;
              scope.filtering.strict = true;
            }
            else{
              scope.filtering.search = '';
              scope.filtering.strict = false;
            }
         }
      }
    };
});

app.directive('sortBtn', function(){
    
    return {
        restrict: 'E',
        scope: {
            value: '@',
            sorting: '='
        },
        templateUrl: 'sortBtn.html'
    }
});

app.controller("MyFirstCtrl", function ($scope) {
  $scope.sorting = 
    {
      by : 'price',
      desc : true
    };
    
    $scope.filtering = {
      search: '',
      strict: false
    };
    
    $scope.total = {
      total:10
    }
    
     $scope.sortBy = function(byWhat, desc) {
        $scope.sorting.by = byWhat; 
        $scope.sorting.desc = desc;
    };
    
    $scope.basket = [];
    
    $scope.tiles = [
        {
          name: 'iPhone',
          price: 500,
          description: 'Lorem ipsum dolor sit amet augue. Vestibulum consectetuer adipiscing elit. Lorem ipsum primis in faucibus lectus orci, id lacus. Maecenas mi vitae felis vitae felis mollis sodales. Vivamus iaculis, purus eu libero. Nulla posuere cubilia Curae, In tempus ipsum. Aenean urna vitae lacinia quam. Vestibulum sollicitudin. Donec at justo arcu.',
          special: true,
          tags: [{
            'name': 'electronic'
          },
          {
            'name': 'tablet'
          },
          {
            'name': 'pro'
          },
          {
            'name': 'it'
          }]
        },
        {
          name: 'Angular book',
          price: 49.99,
          description: 'Lorem ipsum dolor sit amet augue. Vestibulum consectetuer adipiscing elit. Lorem ipsum primis in faucibus lectus orci, id lacus. Maecenas mi vitae felis vitae felis mollis sodales. Vivamus iaculis, purus eu libero. Nulla posuere cubilia Curae, In tempus ipsum. Aenean urna vitae lacinia quam. Vestibulum sollicitudin. Donec at justo arcu.',
          tags: [{
            'name': 'book'
          },
          {
            'name': 'it'
          }]
        },
        {
          name: 'Orange juice',
          price: 0,
         description: 'Lorem ipsum dolor sit amet augue. Vestibulum consectetuer adipiscing elit. Lorem ipsum primis in faucibus lectus orci, id lacus. Maecenas mi vitae felis vitae felis mollis sodales. Vivamus iaculis, purus eu libero.Nulla posuere cubilia Curae, In tempus ipsum. Aenean urna vitae lacinia quam. Vestibulum sollicitudin. Donec at justo arcu.',
         tags: [
          {
            'name': 'food'
          }]
        }
    ];
});
