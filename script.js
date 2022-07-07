console.log('this is a javascript file');
showNotes();

let addBtn = document.getElementById("addBtn");
// console.log(typeof addBtn);
addBtn.addEventListener("click", ()=> {

    
    let addTxt = document.getElementById("addTxt");  

    let notes = localStorage.getItem("notes");
    console.log(notes);
    if (notes == null) {
        notesObj = [];
 
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notesObj);
    showNotes();
})
function showNotes(){
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
 
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html ="";
    notesObj.forEach(function(element,index) {
        html += `
            <div class="noteCard card mx-2 my-2" style="width: 18rem;">
                
                    <div class="card-body">
                    <h5 class="card-title">Note ${index+1}</h5>
                    <p class="card-text"> ${element}</p>
                    <button id ="${index}" onclick ="deleteNote(this.id)" class="btn btn-primary">Delete Notes</button>
                    </div>
                </div> `;
    });
    let notesElm = document.getElementById("notes");
    if(notesObj.length!=0){
        notesElm.innerHTML = html;
    }else{
        notesElm.innerHTML = `Noting to show use "Add a note" section above to add notes`;
    }
}
function deleteNote(index){
    console.log("i am deleting");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
 
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}   
let search = document.getElementById("searchTxt");
search.addEventListener("input", function(){
    
    let inputVal =  search.value.toLowerCase();
    console.log("Input event fired:", inputVal);

    let noteCards = document.getElementsByClassName("noteCard");
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        console.log(cardTxt);

        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }else{
            element.style.display = "none";
        }
    })


})


                                    // @coderjerry
// Let = let is Block scoped.
//       let does not allow to redeclare variables.
//       Hoisting does not occur in let.

// Var = 
    //   var is function scoped.
    //   var allows to redeclare variables.
    //   Hoisting occurs in war.
// const = 
//      const is also a function scoped.
//      It cannot be Reassined and Redeclare.
//      Hoisting does not occur in const.
 






























