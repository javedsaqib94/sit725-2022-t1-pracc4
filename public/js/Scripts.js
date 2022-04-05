
///////////notes Take this array and add into server.js (backend)

// const cardList = [
//     {
//         title: "Kuala 2",
//         image: "images/kuala2.jpeg",
//         link: "About Kuala 2",
//         description: "Demo description about Kuala 2"
//     },
//     {
    //         title: "Kuala 3",
    //         image: "images/kuala3.jpg",
    //         link: "About Kuala 3",
    //         description: "Demo description about Kuala 3"
    //     }
    // ]
    
const clickMe = () => {
       alert("Thanks for clicking me. Hope you have a nice day!")
};

const addProjectToApp = (project) => {
    $.ajax({
        url: '/api/projects',
        data: project,
        type: 'POST',
        success: (result) => {
            alert(result.message);
            location.reload(); //auto reload and we can see data comes from API
        }
    })
}

    
    
// const submitForm = () => {
//     let formData = {};
//     formData.first_name = $('#first_name').val();
//     formData.last_name = $('#last_name').val();
//     formData.password = $('#password').val();
//     formData.email = $('#email').val();

//     console.log("Form Data Submitted: ", formData);
// };
const submitForm = () => {
    let formData = {};
    formData.title = $('#title').val();
    formData.image = $('#image').val();
    formData.link = $('#link').val();
    formData.description = $('#description').val();

    console.log("Form Data Submitted: ", formData);
    addProjectToApp(formData); //call project API

}

const getProjects = () => {

    $.get('/api/projects',(response) => {
        if (response.statusCode==200){
            console.log(response);
            addCards(response.data);
        } else {
            console.log(response); }
    });
}

const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align">'+
    '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="'+item.image+'">'+
    '</div><div class="card-content">'+
    '<span class="card-title activator grey-text text-darken-4">'+item.title+'<i class="material-icons right">more_vert</i></span><p><a href="#">'+item.link+'</a></p></div>'+
    '<div class="card-reveal">'+
        '<span class="card-title grey-text text-darken-4">'+item.title+'<i class="material-icons right">close</i></span>'+
        '<p class="card-text grey-text text-darken-4">'+item.description+'</p>'+
      '</div></div></div>';
      $("#card-section").append(itemToAppend)
    });
}

$(document).ready(function(){
    $('.materialboxed').materialbox();
    $('#formSubmit').click(()=>{
        submitForm();
    });
    //console.log("I am working FIne");
    getProjects();
    //addCards(cardList);
    $('.modal').modal();
  });

 

















 /// mine extra ////
// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.modal');
//     var instances = M.Modal.init(elems, options);
// });

// // Or with jQuery

// $(document).ready(function(){
//     $('.modal').modal();
// });

// const clickMe = () => {
//     alert("Thanks for clicking me. Hope you have a nice day!");

// }
// $(document).ready(function(){
//     $('.materialboxed').materialbox();
//     $('#clickMeButton').click(()=>{
//         clickMe();
//     })
//  });