
isNumber = (value)=> /^[0-9.]*$/.test(value) ? true : false; 

var calcular = ( tecla) => {
    var campo = document.getElementById('tela');
    var size = campo.value.length;
    if (isNumber(tecla)) {
        campo.value+=tecla;x
    } else {
        if (tecla==='c') {
            campo.value='';    
        } else {
            
         if (!isNumber(campo.value.charAt(size - 1)) && campo.value.charAt(size) !=='=') {
        
            campo.value = campo.value.slice(0, -1) + tecla;
        } else if (campo.value.charAt(size) ==='='){
            var resultado = eval(campo.value);
            campo.value = parseFloat(resultado.toString());
        }else{
            campo.value+=tecla; 
        }
    }
        
    }
    
}
