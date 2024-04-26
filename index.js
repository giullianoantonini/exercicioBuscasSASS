import "./index.scss"

console.log("Funcionou")

document.getElementById("findButton")
    .addEventListener("click", iniciarExercicioFind)

document.getElementById("filterButton")
    .addEventListener("click", iniciarExercicioFilter)

function iniciarExercicioFind() {
    console.log("Find Iniciado!")
}

function iniciarExercicioFilter() {
    console.log("Filter Iniciado!")
}

