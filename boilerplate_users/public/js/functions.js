var col = "";


$(document).ready(function() {

    $("#document").sortable({
            connectWith: "#elements",
            containment: "#container",
            delay: 150,
            cursor: "move", 
            placeholder: 'ui-state-highlight',
            cursorAt: { top: 0, left: 0 },
             update : function () {          
                var newOrder = $(this).sortable('toArray').toString();
                console.log(newOrder);

                $.ajax('http://localhost:1337/test-data', {
                    type: 'POST',
                    data: JSON.stringify(newOrder),
                    contentType: 'text/json',
                    success: function(result){
                        return result;
                    },
                    error: function(e){
                        console.log('Error: ' + e);
                    }
                });
            } ,

                sort : function (event, ui) {          
                } 

        }).disableSelection();


    $("#elements").sortable({
            helper:"clone",
            connectWith: "#document",
            snap: "#document",
            placeholder: "ui-state-highlight",
            start: function(event, ui){
                $(ui.item).show();
                clone = $(ui.item).clone();
                before = $(ui.item).prev();
            },
            stop:function(event, ui){
                before.after(clone);
            }
        }).disableSelection();

        $('.actions .edit').on('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            var target = $(this).parent().parent();

            if ($(this).text() == 'bewerken') {

                $(this).text('opslaan');
                var text = target.next('p').text();

                if (text.length > 0) {
                    target.next('p').remove();
                    target.parent().append('<textarea>'+text+'</textarea>');
                }

                target.parent().next('textarea').focus();

                stop_resize('textarea');                
            }
            else {
                $(this).text('bewerken');
                var text = target.next('textarea').val();
                console.log(text);
                target.next('textarea').remove();
                target.parent().append('<p>' + text + '</p>');
            }           
        });
  

        $('#toggle_borders').on('click', function(e) {
            e.preventDefault();
            $('#container div').toggleClass('resizeable');
        });

        $(".resize").click(function() {
              var currentClass = $(this).parent().attr('class');
              var currentCol  = parseInt(currentClass.charAt(currentClass.length-1));
              var resetCol = 1;

              saveCol(currentCol);

              if(currentCol == 4){    
                  $(this).parent().removeClass('col_'+currentCol).addClass('col_'+resetCol);
              }
              else{
                  var newCol = currentCol + 1;
                  $(this).parent().removeClass('col_'+currentCol).addClass('col_'+newCol);
              }
            });


});

function saveCol(col){
    console.log('saved that this is now '+col+'');
}

