$(document).ready(function() {
    
    var list = $("#dropdown ul");

    list.hide();

    $("#freebie-container #dropdown").hover(
        function () {
            list.stop(false, true).slideDown();
        },
        function () {
            list.stop(false, true).slideUp();
        }
    );
});