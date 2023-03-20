//21) Date le variabili x = "John" e y = "Doe", mostra in console "John <> Doe"

        let x = "John"
        let y = "Doe"
        console.log(x +"<>" + y)

//22) Crea un oggetto con le seguenti proprietà: name, surname, email

        let user = {
          name:"Viviana",
          surname:"Di Leonardo",
          email:"dileonardov@yahoo.com",
        }

        console.log(user);

//23) Cancella la proprietà email dall'oggetto appena creato
        
        delete user.email // per eliminare una proprietà da un oggetto
        
//24) Crea un array contenente 10 stringhe

        let stringhe = ["1v","2v","3v","4v","5v","6v","7v","8v","9v","10v"]
        console.log(stringhe)

//25) Mostra in console ogni stringa del precedente array

        for (const  i of stringhe) {
          console.log(i)
        }

//26) Crea un array contenente 100 numeri random

        let nRandom = [] 
        for (let i = 0; i < 100; i++) {
          let numeri = Math.floor(Math.random()*100)
          nRandom.push(numeri)
        }
        console.log(nRandom)
        
//27) Scrivi una funzione per trovare il valore massimo e il valore minimo dall'array appena creato

        
        let nMin = nRandom [0];
        let nMax = nRandom [0];
       
          function minMax (){
     
          for (let i = 0; i < nRandom.length; i++) {
            if (nRandom[i] > nMax) {
              nMax = nRandom[i];
            }
            if (nRandom[i] < nMin) {
              nMin = nRandom[i];
            }
          }
          console.log('risultato max :'+ nMax);
          console.log('risultato min :'+ nMin);
        }

        console.log(minMax());


//28) Crea un array di array, nel quale ogni array "figlio" ha 10 numeri random


        function getArrayWithRandomNumber() {

            const array10 = []

            for (let i = 0; i < 10; i++) {
                const element = Math.floor(Math.random()*100)
                array10.push(element);
            }
            return array10
        }
          const array = []
          for (let i = 0; i < 3; i++); {
          const elem = getArrayWithRandomNumber();
          array.push(elem)
        }
        console.log("ARRAY: ", array)


// 29) Crea una funzione che riceve 2 array come parametri e ritorni quello con più elementi

        let array1 = ["ciao", "bao", "miao"];
        let array2 = ["miao", "miao"]

        function arrayLungo () {
            if (array1.length > array2.length){
                return array1;
            } else  (array1.length < array2.length)
                return array2;
        }
        console.log(arrayLungo(array1,array2));


//30) Crea una funzione che riceve 2 array numerici come parametri e ritorna quello con la somma totale degli elementi maggiore

        let array11 = [1,2,4,5,6,7,8]
        let array22 = [9,8,7,5,6,7,4]


        function dueArraySum (x,y) {
            let xSum = 0;
            for (let i = 0; i < x.length; i++){
              xSum += i;  
            }
            
            let ySum = 0;
            for (let i = 0; i <= y.length; i++){
              ySum += i;  
            }
      
      
            if (xSum > ySum) {
              return console.log('somma elementi maggiore = ', xSum);
            }
      
            else {
              return console.log('somma elementi maggiore = ', ySum);
            }
          }
      
          console.log(dueArraySum(array11,array22));



        // ESERCIZI SUL DOM

//31) Seleziona l'elemento con id "container" nella pagina

        let container = document.getElementById("container")
         
//32) Seleziona tutti gli elementi di tipo <td> nella pagina

        let allTDs = document.querySelectorAll("td")


//33) Usa un ciclo per stampare in console il testo contenuto in ogni elemento <td> nella pagina

          for (td of allTDs){
            console.log(td.innerText)
          }


//34) Scrivi una funzione per cambiare il titolo della pagina

          function newTitle () {
            let title = document.querySelector("h1");
            title.textContent = "Serie TV americane";
          }

          console.log(newTitle());


//35) Scrivi una funzione per aggiungere una nuova riga alla tabella nella pagina

          function addRow() {
            let table = document.getElementById("myTable");
            let row = table.insertRow(3);
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);
            let cell4 = row.insertCell(3);
            let cell5 = row.insertCell(4);
            
            cell1.innerHTML = "NEW CELL1";
            cell2.innerHTML = "NEW CELL2";
            cell3.innerHTML = "NEW CELL3";
            cell4.innerHTML = "NEW CELL4";
            cell5.innerHTML = "NEW CELL5";
          }
          console.log(addRow());
          


//36) Scrivi una funzione per aggiungere la classe "test" ad ogni riga nella tabella
      
//non va bene perché  cambia solo 1 testo
/*const changeTxt = function (newTxt) {
  let txt = document.querySelector('td')
  txt.innerText = newTxt
}
changeTxt('test')*/ 

//NON VA XKE CAMBIA IL TESTO E NON LA CLASSE
/*const changeTxt = function () {
  let rowz = document.querySelectorAll('td')
  for (let i = 0; i < rowz.length; i++){
    const txtTxt = rowz[i];
    txtTxt.innerText = 'test'
  }
}
changeTxt ();*/

const addClass = function () {
    let righe = document.querySelectorAll("table, tr, td");
    for (list of righe) {
    list.classList.add('test')
  }
}
  addClass()

//37) Scrivi una funzione per aggiungere uno sfondo rosso a ogni link presente nella pagina
          
const colorRed = function () {
  let linkin = document.querySelectorAll('td a');
  for (list of linkin) {
    list.classList.add('a-bg');
  }
}
  colorRed();

//38) Mostra in console "Page loaded" quando la pagina ha finito di caricarsi
          

window.onload = function () {
  alert('PAGE LOADED')
}


//39) Scrivi una funzione per aggiungere nuovi elementi alla lista non ordinata nella pagina

const addToTheList = function (content) {
  let newElement = document.querySelector('ul')
  newElement.innerHTML += '<li>' + content + '</li>'
  newElement.innerHTML += '<li>' + content + '</li>'
  newElement.innerHTML += '<li>' + content + '</li>'
}
addToTheList('REDRUM - quote')
          


//40) Scrivi una funzione per svuotare una lista nella pagina

/*const ulHidden = function () {
  let disappearedList = document.querySelectorAll('ul', 'li')[0];
  disappearedList.remove();
}
ulHidden();
*/