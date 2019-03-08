$(document).ready(function(){

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
    
    var answer = {};
    submit.on('click', () =>{
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
        ]
       
        // console.log(answer);
    
            $.post("/api/friend",
            {
              name: "Donald Duck",
              photo: "test.com",
              answers: answer
            },
            
            (data, status) =>{
              // console.log("Post Data: " + data + "\nStatus: " + status);
            });

            $.get('/api/friend', (data, status) =>{
              // console.log("Get Data: " + data + "\nStatus: " + status);
            });

           $.get('/survey.html/submit', (data, status) =>{
            console.log("Get Data: " + data + "\nStatus: " + status);
           });
    });
    
});