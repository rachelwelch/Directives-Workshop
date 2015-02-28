var app = angular.module('myDirectives', []);

app.directive('pending', function($q){
	var deferred = $q.defer();
	return {
		restrict: 'A',
		scope: {
			request: '&'
		},
		link: function(scope, element, attrs) {
			var body = angular.element(document).find('body');

			element.bind('click', function(){
				console.log(scope, element, attrs);
				scope.request();
				body.addClass('pointer')
				element.html('Pending');
			})
		}
	}

})


