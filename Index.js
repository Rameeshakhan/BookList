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
    let titleValue = title.value
    let authorValue = author.value
    let isbnValue = isbn.value

    if( titleValue ==="" || authorValue==="" || isbnValue === ""){
        alert.classList.add("alert-danger")
        alert.innerHTML = "Fill all the fields"
        setTimeout(function(){
            alert.classList.remove("alert-danger")
            alert.innerHTML=""
        }, 3000)
    }else{
        const book = new bookList(titleValue, authorValue, isbnValue);
        // const storedItems = localStorage.getItem("booklist");
        let localStorageData = [];
        // if (storedItems) {
        //   localStorageData = JSON.parse(storedItems);
        // }
        localStorageData.push(book); // Add the new book to the array
        localStorage.setItem("booklist", JSON.stringify(localStorageData));
    
        addToTable(book);

        
        
        if(addToTable){
            alert.classList.add("alert-success")
            alert.innerHTML = "Successfully Added"
            setTimeout(function(){
                alert.classList.remove("alert-success")
                alert.innerHTML=""
            }, 3000)
            //empty the input feilds
            title.value =""
            author.value =""
            isbn.value = ""
        }
    }
})


// function addToTable(obj) {
//     const tableBody = document.getElementById("table-body")
//     const row = document.createElement("tr")
//     const rd1 = document.createElement("td")
//     rd1.innerHTML = obj.title
//     const rd2 = document.createElement("td")
//     rd2.innerHTML = obj.author
//     const rd3 = document.createElement("td")
//     rd3.innerHTML = obj.isbn
//     //cross icon
//     const crossIcon = document.createElement("i");
//     crossIcon.classList.add("fas", "fa-times");
//     const rd4 = document.createElement("td");
//     rd4.appendChild(crossIcon);
//     row.appendChild(rd1)
//     row.appendChild(rd2)
//     row.appendChild(rd3)
//     row.appendChild(rd4)
//     tableBody.appendChild(row)
//     crossIcon.addEventListener("click", function (e) {
//         e.preventDefault()
//         localStorage.clear(obj)
//         console.log("rawnkjw")
//     })
// }

function addToTable(obj) {
    const tableBody = document.getElementById("table-body");
    const row = document.createElement("tr");
    const rd1 = document.createElement("td");
    rd1.innerHTML = obj.title;
    const rd2 = document.createElement("td");
    rd2.innerHTML = obj.author;
    const rd3 = document.createElement("td");
    rd3.innerHTML = obj.isbn;
    //cross icon
    const crossIcon = document.createElement("i");
    crossIcon.classList.add("fas", "fa-times");
    const rd4 = document.createElement("td");
    rd4.appendChild(crossIcon);
    row.appendChild(rd1);
    row.appendChild(rd2);
    row.appendChild(rd3);
    row.appendChild(rd4);
    tableBody.appendChild(row);
  
    crossIcon.addEventListener("click", function (e) {
      e.preventDefault();
      // Remove the row from localStorage
      const storedItems = localStorage.getItem("booklist");
      let localStorageData = [];
      if (storedItems) {
        localStorageData = JSON.parse(storedItems);
      }
  
    //   // Find the index of the object to be removed
      const index = localStorageData.findIndex(
        (item) =>
          item.title === obj.title &&
          item.author === obj.author &&
          item.isbn === obj.isbn
      );
  
      if (index > -1) {
        // Remove the object from the array
        localStorageData.splice(index, 1);
        // Update localStorage with the modified array
        localStorage.setItem("booklist", JSON.stringify(localStorageData));
        // Remove the row from the table
        tableBody.removeChild(row);
        alert.classList.add("alert-primary")
        alert.innerHTML = "Successfully Removed"
            setTimeout(function(){
                alert.classList.remove("alert-primary")
                alert.innerHTML=""
            }, 3000)
    }
    });
  }
  

