function cifrar(){
    let text= document.getElementById("texto_input");
    let texto=text.innerText
    let array_original= ['a','b','c','d','e','f','g','h','i','h','k','l','m',
'n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J',
'K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9']
let array_cifrado = ['d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t'
,'u','v','w','x','y','z','a','b','c','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P',
'Q','R','S','T','U','V','W','X','Y','Z','A','B','C','3','4','5','6','7','8','9','0','1','2']
let array_vacio=[];
    if((texto.length)>0){
        let array_texto_input = Array.from(texto);
        for(i=0;i<(texto.length);i++){
            let indice = array_original.indexOf(array_texto_input[i])
            if(indice !=-1){
                array_vacio.push(array_cifrado[indice])
            }
            else{
                array_vacio.push(array_texto_input[i])
            }
        }
        return document.getElementById("texto_output").innerHTML=(array_vacio.join(''))
    }
    else{
        return document.getElementById("texto_output").innerHTML="No se ingreso texto para cifrar"
    }
}