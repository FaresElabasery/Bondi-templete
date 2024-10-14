const search = document.getElementById('search');
$(function () {
    let data = ["design", "web", "app", "photo"]; // Replace with your data

    $("#search").autocomplete({
        source: data,
        open: function () {
            $(this).autocomplete('widget').css({
                'background-color': '#EFF7FA',
                'color': 'black',
                'font-weight': 'normal',
                'border': 'none',
                'padding': '40px 0 5px 0',
            });
        }
    });
});
function position() {
    search.style.width = "10rem";
    search.style.opacity = "1";
    
}
function positionX() {
    search.style.width = "0";
    search.style.opacity = "0";
    
}


