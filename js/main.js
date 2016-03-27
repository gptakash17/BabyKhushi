/**
 * Main AngularJS Web Application
 */
var app = angular.module('angularjs', ['ngRoute']);

app.controller('MainCtrl', function($scope){

    $scope.onClickScrollToBottom = function(){
    	$("html, body").animate({ scrollTop: $(document).height() }, 1000);
    }

    $scope.onClickScrollToTop = function(){
    	$("html, body").animate({ scrollTop: 0 }, 1000);
    }

    $scope.onClickNav = function(){
    	var targetSection   = document.querySelector(event.target.hash),
    		oldActiveMenu   = document.querySelector('#navbar a.active'),
    		curntActiveMenu = event.target,
    	    topOffset       = $(targetSection).offset().top;

		$(oldActiveMenu).removeClass('active');
		$(curntActiveMenu).addClass('active');
    	$("html, body").animate({ scrollTop: topOffset }, 1000);
    }
});
