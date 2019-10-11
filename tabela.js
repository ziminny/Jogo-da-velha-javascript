
 var matriz = [
        [' ',' ',' '],
        [' ',' ',' '],
        [' ',' ',' '],];

(function(){
    preencheTabelaDdefault()
    preenche()
    verificaGanhador()
    document.getElementById("btn-reiniciar").addEventListener("click",reset)
})()

function preenche() {
    var contador = 0
   
    
       for (let i = 0; i <=2; i++) {          
       for (let x = 0; x <=2; x++) {
            var acumuladorX =""
            var acumuladorY =""
             document.getElementById("id"+i+x).addEventListener("click",function(){
                this.style.fontSize = "20px"
             if(this.innerHTML == " ") {
             if(contador%2==0){
             this.innerHTML ="X"
             this.style.color = "red"
             acumuladorX+="id"+i+""+x
             console.log(acumuladorY)
             
             if(verificaGanhador(acumuladorX)){
                alert("O jogador X Ganhou !")
                acumuladorX="" 
                acumuladorY ="" 
                reset()

                            
               
                     }
            
             } else {
            
              this.innerHTML = "O"
              acumuladorY+="id"+i+""+x
              this.style.color = "blue"
              console.log(acumuladorY)
             
              if(verificaGanhador(acumuladorY)){
                alert("O jogador O Ganhou !")
                acumuladorY =""
                acumuladorX=""
                reset()                       }}
             console.log(contador)

              
             
             

             contador++
           
  
             
   
                    }
                    else {
                        alert("Ja esta preenchido")
                    }})}
     }
    
    }

function verificaGanhador(condicao) {

   /* 'id00','id01','id02'
    'id10','id11','id12'
    'id20','id21','id22'

    'id00','id10','id20'   combinacoes possiveis
    'id01','id11','id21'
    'id02','id12','id22'

    'id00','id11','id22'
    'id02','id11','id20'*/



  
    
    var regexp = new RegExp(/((id\d{2})?(id\d{2})?(id\d{2})?(id0[012])(id\d{2})?(id\d{2})?(id\d{2})?(id0[012])(id\d{2})?(id\d{2})?(id\d{2})?(id0[012]))|((id\d{2})?(id\d{2})?(id\d{2})?(id1[012])(id\d{2})?(id\d{2})?(id\d{2})?(id1[012])(id\d{2})?(id\d{2})?(id\d{2})?(id1[012]))|((id\d{2})?(id\d{2})?(id\d{2})?(id2[012])(id\d{2})?(id\d{2})?(id\d{2})?(id2[012])(id\d{2})?(id\d{2})?(id\d{2})?(id2[012]))|((id\d{2})?(id\d{2})?(id\d{2})?(id[012]0)(id\d{2})?(id\d{2})?(id\d{2})?(id[012]0)(id\d{2})?(id\d{2})?(id\d{2})?(id[012]0))|((id\d{2})?(id\d{2})?(id\d{2})?(id[012]1)(id\d{2})?(id\d{2})?(id\d{2})?(id[012]1)(id\d{2})?(id\d{2})?(id\d{2})?(id[012]1))|((id\d{2})?(id\d{2})?(id\d{2})?(id[012]2)(id\d{2})?(id\d{2})?(id\d{2})?(id[012]2)(id\d{2})?(id\d{2})?(id\d{2})?(id[012]2)|((id\d{2})?(id\d{2})?(id\d{2})?(id(00|11|22))(id\d{2})?(id\d{2})?(id\d{2})?(id(00|11|22))(id\d{2})?(id\d{2})?(id\d{2})?(id(00|11|22)))|((id(02|11|20))(id\d{2})?(id\d{2})?(id\d{2})?(id(02|11|20))(id\d{2})?(id\d{2})?(id\d{2})?(id(02|11|20))))/i);
    var n = regexp.test(condicao);
   console.log(n)
    if(n)
    {return true}
    else
    {return false}
}

function preencheTabelaDdefault() {

    var tabela = document.createElement("table")
    var jogadas = 10;

       for (let tr = 0; tr <=2; tr++) {

       var TR = document.createElement("tr")
    
       for (let td = 0; td <=2; td++) {
           
        var TD = document.createElement("td")
        TD.style.height = "6rem"
        TD.style.width = "6rem"
        TD.id = "id"+tr+td
        TD.innerHTML = matriz[tr][td];
        TR.appendChild(TD);
        console.log(tr+td)
       }
       tabela.classList.add('border')
       //tabela.classList.add('table')
       tabela.classList.add('table-bordered')
       tabela.appendChild(TR);
    }
var idTabela = document.getElementById("idTabela")
idTabela.appendChild(tabela);   
}

function reset() {

    for (let i = 0; i<3; i++) {

        for (let x = 0; x<3; x++) {
        document.getElementById('id'+i+x).innerHTML = ' '
          }
}
}