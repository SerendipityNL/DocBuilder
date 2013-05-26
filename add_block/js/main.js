jQuery(document).ready(function() {

	// html divs for iconselector (dont want this inline);
	var more_icon_set ='<div class="more_icons"><div class="icon block_youtube"></div><div class="icon block_music"></div><div class="icon block_undo"></div></div>';
	var icon_set = '<div class="icon_selector">'+ more_icon_set +'<div class="close_icon"></div><div class="normal_icons"><div class="icon block_text"></div><div class="icon block_list"></div><div class="icon block_image"></div><div class="icon block_more"></div></div></div>';
	

	// add extra block, show the blocks menu and hide the plus icon
	jQuery(".plus_icon").click(function() {	
		jQuery(this).parent().find('.plus_icon').hide();
		jQuery(this).parent().append(icon_set);
		jQuery(this).parent().find('.icon_selector').show();


		// once clicked on a icon, get the classname and add this block
		jQuery(".icon").click(function() {

			var classes = jQuery(this).attr("class").split(/\s/);
			var add_block = true;

			if(classes[1] == "block_more"){
				console.log('more');

				jQuery(this).parent().hide();
				jQuery(this).parent().parent().find('.more_icons').show();

				add_block = false;
			}

			if(classes[1] == "block_undo"){
				jQuery(this).parent().parent().find('.normal_icons').show();
				jQuery(this).parent().hide();

				add_block = false;
			}

			if(add_block == true){
				//no more selected, add class to parent block and hide the menu
				jQuery(this).parent().parent().parent().removeClass('emptyBlock');
				jQuery(this).parent().parent().parent().addClass(classes[1]);
				
				//removes the icon selector
				jQuery(this).parent().parent().remove();
			}
		});

			// close the block selector
			jQuery(".close_icon").click(function() {
				jQuery(this).parent().parent().find('.plus_icon').show();
				jQuery(this).parent().remove();

			});
	});
});
