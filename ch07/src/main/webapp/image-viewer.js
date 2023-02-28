
$(function(){

	
	$("#btn-slideshow").click(function(){
		var interval =setInterval(function(){
		var index = Math.floor(Math.random()*imageViewer._images.length);
			$("img").attr('src',imageViewer._images[index].file)
	},1500); 
	$("#btn-slideshow").replaceWith("<button id='btn'>stop</button>");
	$("#btn").click(function(){
		clearInterval(interval);
	});
	
		
	});
	
	
	$("#btn-change").click(function(){
		var index = Math.floor(Math.random()*imageViewer._images.length);
		$("img").attr('src',imageViewer._images[index].file);
	});
	
	
	
	
});
imageViewer={
	init: function(){
		
		for(var i = 0; i<100; i++){
			this._changeImage();
		}
	},
	_changeImage: function(){
		var index = Math.floor(Math.random()*this._images.length);
		console.log(index);
	},
	
	_intervalId:null
	

	
	
	,
	_images:[
		{name: 'Chrysanthemum',file: 'images/Chrysanthemum.jpg'},
		{name: 'Desert',file: 'images/Desert.jpg'},
		{name: 'Hydrangeas',file: 'images/Hydrangeas.jpg'},
		{name: 'Jellyfish',file: 'images/Jellyfish.jpg'},
		{name: 'Koala',file: 'images/Koala.jpg'},
		{name: 'Lighthouse',file: 'images/Lighthouse.jpg'},
		{name: 'Penguins',file: 'images/Penguins.jpg'},
		{name: 'Tulips',file: 'images/Tulips.jpg'}
		]

};
