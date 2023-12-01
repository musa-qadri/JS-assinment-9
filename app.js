var name1 = prompt('Enter your name')

if( name1 !== null){
    var phone = prompt('Enter your phone no')
    if(phone !== null){
        var password = prompt('Enter your password')
        if(password !== null){
            var conf = prompt('comform password');
            if(conf === password){
                 alert('you are successfully registered ')
            }
            else{alert('write a same password')}
        }
        else{alert('please fill in the input')}
    }
    else{alert('please fill in the input')}
}
else{alert('please fill in the input')}