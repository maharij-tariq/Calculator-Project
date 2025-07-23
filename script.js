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






// let input= document.getElementById('inputbox');
// document.querySelectorAll('button').forEach(button =>{
//     button.onclick = () => {
//         let value = button.innerHTML;
//         if( value === '='){
//          input.value = eval(input.value);
//         } else if( value === 'AC'){
//             input.value = "";
//         }else if( value === 'DEL'){
//             input.value = input.value.slice(0,-1);
//         }else{
//             input.value += value;
//         }
//     };
// })


// let input = document.getElementById('inputbox');
// document.querySelectorAll('button').forEach(button =>{
//     button.onclick = () =>{
//     let value = button.innerHTML;
//     if(value === '='){
//         input.value = eval(input.value);
//     }else if(value === 'AC'){
//         input.value = "";
//     } else  if (value === 'DEL'){
//         input.value = input.value.slice(0,-1);
//     }else{
//         input.value +=value;
//     }
//     };

// })


// let input = document.getElementById('inputbox');

// document.querySelectorAll('button').forEach(btn => {
//     btn.onclick = () => {
//         input.value = btn.innerHTML === '=' ? eval(input.value)
//                       :btn.innerHTML === 'AC' ? "" 
//                       :btn.innerHTML === 'DEL' ? input.value.slice(0, -1) 
//                      : input.value + btn.innerHTML;
//     };
// });