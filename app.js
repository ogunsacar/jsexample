let userForm = document.querySelector("#userForm")
userForm.addEventListener("submit", e => {
    e.preventDefault()
    const USER_NAME = document.querySelector("#username")
    const SCORE = document.querySelector("#score")
    if (USER_NAME.value && SCORE.value) {
        addItem(USER_NAME.value,SCORE.value)
        USER_NAME.value = ""
        SCORE.value = ""
    } else{
        alertDOM.innerHTML = ALERT("Hey there!","Eksik Bilgi")
    }
})

const alertDOM = document.querySelector("#alert")

const ALERT = (title,message) => `
<div class="alert alert-danger alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
`


const userListDOM = document.querySelector("#userList") //ul

const addItem = (userName,score) => {
    let liDOM = document.createElement("li");
    liDOM.innerHTML = `
    ${userName} 
    <span class="badge badge-primary badge-pill">${score}</span>
    
    `
    liDOM.classList.add("list-group-item",
        "d-flex",
        "justify-content-between",
        "align-items-center",
        "mt-3")
    userListDOM.appendChild(liDOM);
}

