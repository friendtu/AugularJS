// File: chapter7/notesApp1.js
angular.module('notesApp1Mocks', [])
  .factory('ItemService', [function() {
    var items = [
      {id: 1, label: 'Mock'},
    ];
    return {
      list: function() {
        return items;
      }
    };
  }]);