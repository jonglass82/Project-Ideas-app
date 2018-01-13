// Check off ideas - toggle color between gray and black

$("ul").on("click", "li", function(){
$(this).toggleClass("completed");
});

// Delete ideas

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
      $(this).remove();
    });
    event.stopPropagation();
});

// Add a new idea into queue

$("input[type='text'").keypress(function(event){
    if(event.which === 13){
       var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
});

//drop down

$(".fa-plus").click(function(){
    $("input[type='text'").fadeToggle();
});