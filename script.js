let input = document.getElementById('inputbox');
document.querySelectorAll('button').forEach(button =>{
    button.onclick = () =>{
        let value = button.innerHTML;
        if(value === '='){
        input.value = eval(input.value);
        }else if(value === 'AC'){
            input.value =  "";
        }else if( value === 'DEL'){
            input.value = input.value.slice(0,-1);
        }else{
            input.value +=value;
        }
    };
})





