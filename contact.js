function toggleSlider() {
    var isChecked = $("#toggleSlider").prop("checked");

    if (isChecked) {
        // Action when slider is toggled on
        console.log("Slider is toggled on");
        $('.title').css('color','white');
        $('.sub-container-1').css('background-color', 'black');
        $('.sub-container-1').css('color', 'white');
        $('.sub-container-2').css('background-color', 'black');
        $('.sub-container-2').css('color', 'white');
        $('.sub-container-3').css('background-color', 'black');
        $('.sub-container-3').css('color', 'white');
        $('.sub-container-4').css('background-color', 'black');
        $('.sub-container-4').css('color', 'white');
        $('.navbar').css('background-color','black');
        $('a').css('color', 'white');
        $('.curPage').css('color', '#264653');
        $('.footer').css('background-color', 'black');
        $('.dm-title').css('color', 'white');
    
        // Add overlay
        $('body').addClass('dark-mode-active');

    } else {
        // Action when slider is toggled off
        console.log("Slider is toggled off");
        // Elements reverted back to normal state
        $('.title').css('color','#264653');
        $('.sub-container-1').css('background-color', '#D9D9D9');
        $('.sub-container-1').css('color', '#264653');
        $('.sub-container-2').css('background-color', '#D9D9D9');
        $('.sub-container-2').css('color', '#264653');
        $('.sub-container-3').css('background-color', '#D9D9D9');
        $('.sub-container-3').css('color', '#264653');
        $('.sub-container-4').css('background-color', '#D9D9D9');
        $('.sub-container-4').css('color', '#264653');
        $('.navbar').css('background-color','#FFFFFF');
        $('a').css('color', '#264653');
        $('.curPage').css('color', '#D9D9D9');
        $('.footer').css('background-color', '#FFFFFF');
        $('.dm-title').css('color', '#264653');

        // Remove the overlay
        $('body').removeClass('dark-mode-active');

    }
}
