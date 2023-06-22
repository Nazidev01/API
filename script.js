const hero = document.querySelector(".hero")
const btn = document.querySelector("button")
const input = document.querySelector("input")
const select = document.querySelectorAll("select")

// const option = document.querySelectorAll(".option")

let all = null
function getAPI(API){
    axios(`https://restcountries.com/v3.1/${API}`)
        .then((res) => {
            all = res.data
            console.log(res.data)
            view(res.data)
        })
}
getAPI("all")


function view(data){
    window.scroll(0,0)
    hero.innerHTML = ""
    data.slice(0,30).map(el =>(
        hero.innerHTML+= `<div class="box">
<img src="${el.flags.svg}" width="150px" alt="">
<h1>${el.name.common}</h1>
<h2>${el.region}</h2>
<h3>${el.area} KB <sup>2</sup></h3>
<h3>${el.population}</h3>
<a href="${el.maps.googleMaps}" target="_blank"></a>
<!--<h6>${el.capital}</h6>-->
</div>`
    ))
}
// function view2(data){
//     window.scroll(0,0)
//     hero.innerHTML = ''
// data.map(el =>{
//
// })
// }
btn.addEventListener("click" ,() =>{
    getAPI(`name/${input.value}`)
})
input.addEventListener("input",(e) => {
    getAPI(`name/${e.target.value}`)
})
select[0].addEventListener("change",(e) =>{
    let target = e.target.value
    if (target === "asia"){
        const res = all.filter((el) => {
            return el.region === "Asia"
        })
        view(res)
    }else if (target === "europa"){
        const res = all.filter((el) => {
            return el.region ===  "Europa"
        })
        view(res)
    }else if (target === "africa"){
        const res = all.filter((el) => {
            return el.region ===  "Africa"
        })
        view(res)
    }else if (target === "americas"){
        const res = all.filter((el) => {
            return el.region ===  "Americas"
        })
        view(res)
    }


})

select[1].addEventListener("change",(e) => {
    let target = e.target.value
    if (target === `population`){
        const arr = all.sort((a,b) => {
            return b.population - a.population
        })
        view(arr)
    }
})
select[1].addEventListener("change",(e) => {
    let target = e.target.value
    if (target === `area`){
        const arr = all.sort((a,b) => {
            return b.area - a.area
        })
        view(arr)
    }
})

select[1].addEventListener("change",(e) => {
    let target = e.target.value
    if (target === `A-Z`){
        const arr = all.sort((a,b) => {
            return a.name.common - b.name.common ? 1 : -1
        })
        view(arr)
    }
})
select[1].addEventListener("change",(e) => {
    let target = e.target.value
    if (target === `Z-A`){
        const arr = all.sort((a,b) => {
            return a.name.common - b.name.common ? 1 : -1
        })
        view(arr)
    }
})

