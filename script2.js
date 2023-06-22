const dogs = document.querySelector(".dogs")
const dogsImg = document.querySelector(".dogsImg")
const input = document.querySelector("input")
const select = document.querySelector(".select")
function getAll(){
    axios(`https://dog.ceo/api/breeds/list/all`)
        .then((res) => {
            Object.keys(res.data.message).map((el) => {
                dogs.innerHTML += `<button class="btn-breed">${el}</button>`
                    // select.innerHTML += `<option>${el}</option>`
            })
        })
        .then(() => btn())
}
getAll()


function option(){
    axios(`https://dog.ceo/api/breeds/list/all`)
.then((res)=>{
        Object.keys(res.data.message).map((el)=>{
            // dogs.innerHTML += <button class="btns">${el}</button>/
            select.innerHTML += `<option>${el}</option>`
        })
    })
        .then()
}
option()

function btn (){
    const breedsBtn = document.querySelectorAll(".btn-breed")
    breedsBtn.forEach(btn => {
        btn.addEventListener("click", () => {
            getImg(btn.innerHTML)
        })
    })
}
function getImg(name){
    axios(`https://dog.ceo/api/breed/${name}/images/random`)
.then((res)=>{
      dogsImg.innerHTML = `<img src=${res.data.message} width="300" heigth="300" style="object-fit:cover;" alt="">`
})
}
getImg()


// select.addEventListener("change", (e) => {
//     getImg(e.target.value)
// })
// input.addEventListener('keydown',(e)=>{
//     if(e.key === 'Enter'){
//         getImg(e.target.value)
//     }
// })
// input.addEventListener('input',(e)=>{
//     getImg(e.target.value)
// })
// delBtn.addEventListener('click',()=>{
//     getImg(${input.value})
// })
