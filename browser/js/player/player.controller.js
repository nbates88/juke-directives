'use strict';

juke.controller('PlayerCtrl', function ($scope, $rootScope, PlayerFactory) {

})

.directive('audioPlayer', function(PlayerFactory){
	return{
		restrict: 'A',
		templateUrl: '/js/player/player.html',

		link: function(s, e, a){

		angular.extend(s, PlayerFactory);
			
		s.toggle = function () {
			if ( PlayerFactory.isPlaying() ) PlayerFactory.pause();
			else PlayerFactory.resume();
		};

			s.getPercent = function () {
				return PlayerFactory.getProgress() * 100;
  			};
		}
	}
})
