const title = document.getElementById("title")
const author = document.getElementById("author")
const isbn = document.getElementById("isbn")
const btn = document.getElementById("btn")
const alert = document.getElementById("alert")

class bookList {
    constructor(title, author, isbn) {
        this.title = title,
            this.author = author,
            this.isbn = isbn
    }
}

btn.addEventListener("click", function (e) {
    e.preventDefault()
    const titleValue = title.value
    const authorValue = author.value
    const isbnValue = isbn.value

    if( titleValue || authorValue || isbnValue === ""){
        alert.classList.add("alert-danger")
        alert.innerHTML = "Fill all the fields"
        setTimeout(function(){
            alert.classList.remove("alert-danger")
            alert.innerHTML=""
        }, 3000)
    }else{
        const book = new bookList(titleValue, authorValue, isbnValue)
        // console.log(book)
        const objStringify = JSON.stringify(book)
        localStorage.setItem("booklist", objStringify)
        const storedItem = localStorage.getItem("booklist")
        const localStorageData = JSON.parse(storedItem);
        addToTable(localStorageData)
        if(addToTable){
            alert.classList.add("alert-success")
            alert.innerHTML = "Successfully Added"
        }

    }
})


function addToTable(obj) {
    const tableBody = document.getElementById("table-body")
    const row = document.createElement("tr")
    const rd1 = document.createElement("td")
    rd1.innerHTML = obj.title
    const rd2 = document.createElement("td")
    rd2.innerHTML = obj.author
    const rd3 = document.createElement("td")
    rd3.innerHTML = obj.isbn
    //cross icon
    const crossIcon = document.createElement("i");
    crossIcon.classList.add("fas", "fa-times");
    const rd4 = document.createElement("td");
    rd4.appendChild(crossIcon);
    row.appendChild(rd1)
    row.appendChild(rd2)
    row.appendChild(rd3)
    row.appendChild(rd4)
    tableBody.appendChild(row)
    crossIcon.addEventListener("click", function (e) {
        e.preventDefault()
        localStorage.clear(obj)
        console.log("rawnkjw")
    })
}

