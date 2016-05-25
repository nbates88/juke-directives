'use strict';


juke.directive('songList', function(PlayerFactory){

  return {
  	templateUrl: '/js/song/templates/song-list.html',
 
    scope: {
      songs: '='
    },

    
    link: function(s, e, a){

    	console.log('ss: ', s.songs)
	  s.getCurrentSong = function () {
	    return PlayerFactory.getCurrentSong();
	  }

	  s.isPlaying = function (song) {
	    return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
	  }

	  s.toggle = function (song) {
	    if (song !== PlayerFactory.getCurrentSong()) {
	      PlayerFactory.start(song, s.songs);
	    } else if ( PlayerFactory.isPlaying() ) {
	      PlayerFactory.pause();
	    } else {
	      PlayerFactory.resume();
	    }
	  }
    }
  }
})

.directive('doubleClick', function () {
  return {
    restrict: 'A',
    scope: {
      doubleClick: '&'
    },
    link: function (scope, element) {
      element.on('dblclick', function () {
        scope.doubleClick();
      });
    }
  };
});


