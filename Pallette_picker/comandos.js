// encontrando los elementos

const nose_bg = document.getElementById("nose-bg")
const eye_bg = document.getElementById("eye-bg")

const nose_t = document.getElementById("nose-t")
const eye_t = document.getElementById("eye-t")

const mouth = document.getElementById("mouth")


//BACKGROUND

// tomando resistencia al inicio de sesión (background)
eye_bg.style.background = localStorage.setcolor_bg
eye_bg.innerHTML = localStorage.setcolor_bg
mouth.style.background = localStorage.setcolor_bg
nose_bg.setAttribute("value", localStorage.setcolor_bg)

nose_bg.addEventListener("input", ()=>{
    eye_bg.style.background = nose_bg.value
    eye_bg.innerHTML = nose_bg.value
    mouth.style.background = nose_bg.value

    // generando resistencia (background)
    localStorage.setItem("setcolor_bg", nose_bg.value)
})


//TEXTO. tomando resistencia al inicio de sesión (texto)
eye_t.style.background = localStorage.setcolor_t
eye_t.innerHTML = localStorage.setcolor_t
mouth.style.color = localStorage.setcolor_t
nose_t.setAttribute("value", localStorage.setcolor_t)

nose_t.addEventListener("input", ()=>{
    eye_t.style.background = nose_t.value
    eye_t.innerHTML = nose_t.value
    mouth.style.color = nose_t.value

    //generando resistencia (texto)
    localStorage.setItem("setcolor_t", nose_t.value)
})


// Paletas Guardadas

var bg =[]
var t=[] 

const save = document.getElementById("save_b")
const fragment = document.createDocumentFragment()
const lista = document.getElementById("paletas")

save.addEventListener("click", ()=>{
    bg.push(nose_bg.value)
    t.push(nose_t.value)
    const palete = document.createElement("div1")
    palete.textContent = `Paleta ${t.length}`
    palete.style.color = t[t.length - 1]
    palete.style.backgroundColor = bg[bg.length - 1]
    palete.classList= "paleta"
    fragment.appendChild(palete)
    lista.appendChild(fragment)
})

// limpiar paletas guardadas

const clear = document.getElementById("clear_b")

clear.addEventListener("click", ()=>{
    window. location. reload() 
})
 