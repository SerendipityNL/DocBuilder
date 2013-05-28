
$(document).ready(function() {

    $(".resize").click(function() {
      var currentClass = $(this).parent().attr('class');
      var currentCol  = parseInt(currentClass.charAt(currentClass.length-1));
      var resetCol = 1;

      console.log('current_col ='+currentCol);

      if(currentCol == 4){    
          $(this).parent().removeClass('col_'+currentCol).addClass('col_'+resetCol);
      }
      else{
          var newCol = currentCol + 1;
          $(this).parent().removeClass('col_'+currentCol).addClass('col_'+newCol);
      }
    });

    $("#sortable_1").sortable({
            connectWith: "#sortable_1",
            placeholder: "ui-state-highlight"

        }).disableSelection();

    $("#sortable_2").sortable({
            helper:"clone",
            connectWith: "#sortable_1",
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
});


