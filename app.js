let projects=[]
let documents=[]

const statuses=["NEW","VALIDATION","AGREEMENT","DONE","REJECTED"]

function login(){

const login=document.getElementById("loginInput").value
const pass=document.getElementById("passInput").value
const role=document.getElementById("role").value

if(login==="TEST" && pass==="123456"){

document.getElementById("login").style.display="none"

const id=Math.floor(Math.random()*1000)

if(role==="customer"){

document.getElementById("customer").classList.remove("hidden")
document.getElementById("customerId").innerText=id

renderCustomerDocs()

}else{

document.getElementById("contractor").classList.remove("hidden")
document.getElementById("contractorId").innerText=id

}

}else{

alert("Wrong credentials")

}

}

function createProject(){

const name=prompt("Название проекта")
const customerId=prompt("ID заказчика")

projects.push({name,customerId})

renderProjects()

}

function addProject(){

const id=prompt("ID проекта")

projects.push({id})

renderProjects()

}

function uploadDoc(){

const name=prompt("Имя документа")

documents.push({
name,
version:1,
status:"VALIDATION"
})

renderDocs()

}

function renderProjects(){

let html=""

projects.forEach(p=>{
html+=`<div class="doc">${p.name||"Project"} | ${p.customerId||p.id}</div>`
})

document.getElementById("contractorProjects").innerHTML=html
document.getElementById("projects").innerHTML=html

}

function renderDocs(){

let html=""

documents.forEach(d=>{
html+=`
<div class="doc">
${d.name}
<br>
Версия ${d.version}
<span class="status ${d.status}">
${d.status}
</span>
<button onclick="viewDoc()">Просмотр</button>
</div>
`
})

document.getElementById("contractorDocs").innerHTML=html
document.getElementById("customerDocs").innerHTML=html

}

function renderCustomerDocs(){
renderDocs()
}

function viewDoc(){
alert("Открытие документа (demo)")
}
