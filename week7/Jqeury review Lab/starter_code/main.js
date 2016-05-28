$(function(){
	$("#submit-btn").on('click', function(event){
		event.preventDefault();
		//on submit we are going to start a function
		var city = $('#city-type').val();
		//this will get the city type
		if(city === 'New York' || city +== 'nyc'){
			$('body').attr("class", 'nyc')
		}
		//comparing the city itself to the input we expect from the user
		//then you're changing the class in the body
		else if(){
			//else if city === san fran, etc
		}
		else{
			//will restore the original class if none other
		}
	})
	
});