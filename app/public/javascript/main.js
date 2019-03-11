$(document).ready(function(){

    var name = $('#name');
    var link = $('#link');
    var options0 = $('#options-0');
    var options1 = $('#options-1');
    var options2 = $('#options-2');
    var options3 = $('#options-3');
    var options4 = $('#options-4');
    var options5 = $('#options-5');
    var options6 = $('#options-6');
    var options7 = $('#options-7');
    var options8 = $('#options-8');
    var options9 = $('#options-9');
    var submit = $('#submit');
    var best_match = $('#best-match');
    var bm_name = $('#bm-name');
    var bm_photo = $('#bm-photo');
    var invalideEntry =$('.invalideEntry');
    var apiResponse = $('#apiResponse');
              
    invalideEntry.hide();
    var answer = {};
    var userName;
    var userPhotoLink;

    submit.on('click', () =>{
      $('.modal-body').empty();
        userName = name.val();
        userPhotoLink = link.val();
        answer = [
            parseInt(options0.val()),
            parseInt(options1.val()),
            parseInt(options2.val()),
            parseInt(options3.val()),
            parseInt(options4.val()),
            parseInt(options5.val()),
            parseInt(options6.val()),
            parseInt(options7.val()),
            parseInt(options8.val()),
            parseInt(options9.val()),
        ];

       var validation = {
        error : [],
        valid : true
      }
        for(var i =0; i < answer.length; i ++){
          if (answer[i] === 0 || userName === '' || userPhotoLink === ''){
            validation.valid = false;
            if(answer[i] === 0){
              var err = 'error'+i;
              validation.error.push(err);
            } else if(userName === ''){
              var err = 'nameError';
              validation.error.push(err);
            } else if(userPhotoLink === ''){
              var err = 'photoError';
              validation.error.push(err);
            }
          }
        }

        if(validation.valid){
          $.post("/api/friend",
            {
              name: userName,
              photo: userPhotoLink,
              answers: answer
            },
            
            (data, status) =>{
              // console.log("Post Data: " + data + "\nStatus: " + status);
            });

           $.get('/survey.html/submit', (data, status) =>{
            // console.log("Get Data: " + JSON.stringify(data) + "\nStatus: " + status);
              var resultName = data[0].name;
            var resultURL = data[0].photo;
            console.log(resultName, resultURL);
            var h3 = $('<h3>');
            var div = $('<div>');
            var img = $('<img>');
            img.attr({
              src: resultURL,
              alt: 'Best match Photo',
              width: '200px',
              height: '200px'
            });
            div.append(img);
            h3.append(resultName);
            $('.modal-body').append(h3, div);
           });
        } else{
          for(var i = 0; i < validation.error.length; i++){
            if(validation.error[i] === 'nameError'){$('#nameError').css('display', 'block')};
            if(validation.error[i] === 'photoError'){$('#photoError').css('display', 'block')};
            $('#'+validation.error[i]).css('display', 'block');
          }
        }
    });
    apiResponse.on('click', ()=>{
     window.open('./friends.html','_blank');
    });

    // function result(friend){
      
    // }
});