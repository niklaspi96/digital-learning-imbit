/**
 * 
 */

/* TODO Config auslagern -> JSON, INI, XML -> zu klÃ¤ren */

var dotsspace;

$(window).on('load', function(){
<<<<<<< HEAD
	jQuery(document).on("swiperight",function(e){
		if($(e.target).is('p,a,img,h1,h2,h3,h4,h5,span')) return false;	
=======
	/**
	* Added hash to navigate page
	*/
	var nameHash = window.location.hash;
	switch(nameHash) {
		case "#imbit":
			changePage(false);
			break;
		case "#digitalLearning":
			changePage(true);
			break;
	}
	
	jQuery(document).on("swiperight",function(){
>>>>>>> refs/remotes/origin/master
		changePage(true);
	}).on("swipeleft",function(e){
		if($(e.target).is('p,a,img,h1,h2,h3,h4,h5,span')) return false;	
		changePage(false);
	}).on("keydown", function(e){
		switch (e.keyCode) {
        case 37:
        	changePage(true);
            break;
        case 39:
        	changePage(false);
            break;
		}
	});
			
	$('#arrowLeft').click(function(){
		changePage(true);		
		return false;		
	});		
			
	$('#arrowRight').click(function(){	
		changePage(false);		
		return false;		
	});
	 
	$('.dotstyle-fillup li a').click(function(e){
		e.preventDefault();
		var target = $(e.target);
		if (!target.is('.current')){
			var current = jQuery('.current');
			
			if (!(target.parent().hasClass('home') ^ mystickybar.currentstate == "hide"))
				mystickybar.toggle();
			current.toggleClass('current');
			target.parent().toggleClass('current');
			
			jQuery.ajax({
				url: target.attr('href')
			}).done(function(data){
				jQuery('#content').empty().unbind().append(data);
			})
		}		
		return false;
	});
	
	dotsspace = $(window).height() - $('#dots').position().top - $('#dots').outerHeight();
	
	jQuery.ajax({
		url: jQuery('.home').find('a').attr('href')
	}).done(function(data){
		jQuery('#content').append(data);
	});
	
	
});

$(document).ready(function(){		
 	$('#dots').css({		
 		top: $('#dots').position().top		
 	});		
 });

/**
 * 
 * @param left is navigation leftwards
 * @returns true if successfull
 */
function changePage(left){
	if (typeof left != "boolean"){
		return false;
	}
	
	var current = jQuery('.current');
	var target = left ? current.prev() : current.next();
	
	if (target.length == 0){
		return false;
	}
	
	var behindTarget = left ? target.prev() : target.next();		
 			
 	if (behindTarget.length == 0){		
 		$(left ? '#arrowLeft' : '#arrowRight').hide();		
 	} else {		
 		$('#arrowLeft, #arrowRight').show();		
 	}
	
	if (!(target.hasClass('home') ^ mystickybar.currentstate == "hide"))
		mystickybar.toggle();
	current.toggleClass('current');
	target.toggleClass('current');
	
	jQuery.ajax({
		url: target.find('a').attr('href')
	}).done(function(data){
		jQuery('#content').empty().unbind().append(data);
	})
	
	return true;
}
