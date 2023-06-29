/**2)Exibir no console o resultado das seguintes validações,vamos dizer o filme que está passando no cinema de acordo com a fruta, dado o valor de fruta = laranja:
a) Se fruta for igual a banana, mostrar: O filme é Os minions.
b) Se fruta for igual a laranja, mostrar: O filme é Laranja Mecânica.
c) Se fruta for igual a maçã, mostrar: O filme é Branca de neve.
d) Se não for nenhum dos valores acima, mostrar: O cinema tá fechado.*/

var fruta = 'banana';

switch('banana'){
    case 'banana':
        console.log('O filme é Os minions');
        break
    
    case 'laranja':
        console.log('O filme é Laranja Mecânica.');
        break
    
    case 'maçã':
        console.log('O filme é Branca de neve.');
        break
    
    case 'Chrome OS':
        console.log('O Chrome OS é um sistema operacional da empresa Google.');
        break
    
    default:
        console.log('O cinema tá fechado.')
       
    }




