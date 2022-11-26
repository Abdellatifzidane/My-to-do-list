let counter = 0 
let addtxt = document.getElementById('addtxt')
let list = document.getElementById('liste')
let btnclear = document.getElementById('reset')
let compteur = document.getElementById('counter')
let txt = document.getElementById('text') 
let title = document.getElementsByTagName('title')
compteur.style.visibility = 'hidden'
addtxt.addEventListener('submit',(event)=>{
        event.preventDefault()
        let listitem = document.createElement('li')
        let btndelet = document.createElement('button')
        if (txt.value===""){
            alert("you didnt add a task !! ") 
        }else{
         list.appendChild(listitem)
         listitem.innerText = txt.value 
         listitem.appendChild(btndelet)
         counter++
         compteur.innerHTML = counter  
         compteur.style.visibility = 'visible'
         document.title = "To do list ("+counter+")"
         txt.value = "" 
        }
        btnclear.addEventListener('click',function(){
            list.removeChild(listitem)
            counter = 0 
            compteur.innerHTML = counter 
            if(counter===0){
                compteur.style.visibility = 'hidden'
                document.title="To do list "
            }
        })
        btndelet.addEventListener('click',function(){
            listitem.remove(listitem)
            counter -- 
            compteur.innerHTML = counter
            document.title = "To do list ("+counter+")"
            if(counter===0){
                compteur.style.visibility = 'hidden'
                document.title="To do list "

            }
        })
});

