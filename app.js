/*
1. Dom Selection
2. Add EventListener
3. Form Validation
4. Create Elements
5. Display in UI

*/
// DOM selection 
let title = document.querySelector('#title'); 
let author = document.querySelector('#author'); 
let year = document.querySelector('#year'); 
let btn = document.querySelector('.btn'); 
let bookList = document.querySelector('#book-list')

// Add Event Listener 
btn.addEventListener('click', function(e){
    e.preventDefault();
   
    // Form Validation

    if (title.value =='' && author.value =='' && year.value ==''){
        alert('Please Fill up the form information');
    }
    else{
        let newRow = document.createElement('tr');

        // Create Title
        let newTitle = document.createElement('th');
        newTitle.innerHTML = title.value;
        newRow.appendChild(newTitle);

        // Create Author
        let newAuthor = document.createElement('th');
        newAuthor.innerHTML = author.value;
        newRow.appendChild(newAuthor);

        // Create Year
        let newYear = document.createElement('th');
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear);

        bookList.appendChild(newRow);
    }
    author.value = '';
    title.value = '';
    year.value = '';
})