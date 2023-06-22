const users = document.querySelector(".users")
const input = document.querySelector(".input")
axios(`https://jsonplaceholder.typicode.com/users`)
    .then((res) => {
        console.log(res.data)
        const person = res.data
        function view() {
            person.map((el) => (
                users.innerHTML +=  `
            <div class="user">
                <button><h1>${el.id}</h1>${el.username} </button>
            </div>`
            ))
        }
        view()
        input.addEventListener('input', () => {
            const inputvalue = input.value.trim().toLowerCase()
            const filter = inputvalue
        })
    })
// https://jsonplaceholder.typicode.com/users
// innerHTML.button