
$(document).ready(function() {

    // $(".resize").click(function() {
    //   var currentClass = $(this).parent().attr('class');
    //   var currentCol  = parseInt(currentClass.charAt(currentClass.length-1));
    //   var resetCol = 1;

    //   console.log('current_col ='+currentCol);

    //   if(currentCol == 4){    
    //       $(this).parent().removeClass('col_'+currentCol).addClass('col_'+resetCol);
    //   }
    //   else{
    //       var newCol = currentCol + 1;
    //       $(this).parent().removeClass('col_'+currentCol).addClass('col_'+newCol);
    //   }
    // });

    $("#container").sortable({
            connectWith: "#sortable_2",
            containment: "#container",
            delay: 150,
            cursor: "move", 
            cursorAt: { top: 0, left: 0 }

        }).disableSelection();

    $("#sortable_2").sortable({
            helper:"clone",
            connectWith: "#container",
            snap: "#container",
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

        function stop_resize(el) {
            $(el).on('click', function(e) {
                e.stopPropagation();
            });
        }       

        $('#container > div').on('click', (function() {         
            if ($(this).hasClass('col_1')) {
                $(this).removeClass('col_1');
                $(this).addClass('col_2');
            }
            else if ($(this).hasClass('col_2')) {
                $(this).removeClass('col_2');
                $(this).addClass('col_3');
            }
            else if ($(this).hasClass('col_3')) {
                $(this).removeClass('col_3');
                $(this).addClass('col_4');
            }
            else {
                $(this).removeClass('col_4');
                $(this).addClass('col_1');
            }
        }));

        $('#toggle_borders').on('click', function(e) {
            e.preventDefault();
            $('#container div').toggleClass('resizeable');
        });

        /*
        $('.resize').on('click', function(e) {
            e.preventDefault();
            var new_col = $(this).attr('data-setcol');
            $(this).parent().removeClass();
            $(this).parent().addClass('col_' + new_col);
            
        });
        */


});


