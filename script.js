//check off specific todos by clicking
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});

//click on x to delete ToDo
$("ul").on("click","span",function(event){
	//fades out the parent of span(i.e. li)
	$(this).parent().fadeOut(500,function(){ 
		//removes entry from code
		$(this).remove();
	});
	//stops from bubbling up(going from span to li to ul to conatiner)
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}

});

//the 'on' helps in performing the operation not only on the current li but potential to
//'13' no stands for 'enter' key 
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});