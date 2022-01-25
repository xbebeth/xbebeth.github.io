$(document).ready(function(){
    $('.submit').click(function(event){
        
        var email = $('.email').val()
        var subject = $('.subject').val()
        var message = $('.message').val()
        var statusElm = $('.status')
        statusElm.empty()

        if(email.length > 5 && email.includes('@') && email.includes('.')){
            statusElm.append('<p>email is valid</p>')
        } else{
            event.preventDefault()
            statusElm.append('<p>email is not valid</p>')
        }
        if(subject.length >= 2){
            statusElm.append('<p>Subject is valid</p>')
        }else{
            event.preventDefault()
            statusElm.append('<p>Subject is too short</p>')
        }
        if(message.length > 10){
            statusElm.append('<p>Message is valid</p>')
        }else{
            event.preventDefault()
            statusElm.append('<p>Message is too short</p>')
        }
    })
})