

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, options);
});

// Or with jQuery

$(document).ready(function(){
    $('.modal').modal();
});

const clickMe = () => {
    alert("Thanks for clicking me. Hope you have a nice day!");

}
$(document).ready(function(){
    $('.materialboxed').materialbox();
    $('#clickMeButton').click(()=>{
        clickMe();
    })
 });