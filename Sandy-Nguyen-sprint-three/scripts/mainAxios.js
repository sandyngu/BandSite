let API_KEY = '9a757c70-5aa3-46d0-b4fd-b232e544ed82';

const commentsForm = document.querySelector('.comments-section__form');
commentsForm.addEventListener('submit', function commentsFormHandler(event) {
    event.preventDefault();
    let name = event.target.name.value;
    
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();
    date = month + '/' + day + '/' + year;
    
    let comment = event.target.comment.value;    
    let newComment = {name:name, 
        date:date,
        comment:comment};
        comments.unshift(newComment); /*NEED TO CHANGE COMMENTS*/
        
        commentsForm.reset();
        deleteAll();
        parentFunction();
});
    
function deleteAll() {
    document.querySelector('.comments-section__guestbook').remove();
};
    
window.onload = parentFunction(); 

function parentFunction() {
    let parentElement = document.createElement('div');
    parentElement.classList.add('comments-section__guestbook');
    let divider = document.createElement('div');
    divider.classList.add('divider', 'comments-section__guestbook-divider');
    let parentParent = document.querySelector('.comments-section');
    parentParent.appendChild(parentElement);
    parentElement.appendChild(divider);      
};

let commentsURL = ('https://project-1-api.herokuapp.com/comments?api_key=9a757c70-5aa3-46d0-b4fd-b232e544ed82')

axios.get(commentsURL)
    .then(res => {
    
    res.data.forEach(res => {
        
    let divider = document.createElement('div');
    divider.classList.add('divider', 'comments-section__guestbook-divider');
    let guestbookContainer = document.createElement('div');
    guestbookContainer.classList.add('comments-section__guestbook-container');
    let guestbookPhoto = document.createElement('div');
    guestbookPhoto.classList.add('comments-section__guestbook-photo');
    let guestbookEntry = document.createElement('div');
    guestbookEntry.classList.add('comments-section__guestbook-entry');
    let guestbookName = document.createElement('h4');
    guestbookName.classList.add('comments-section__guestbook-name');
    let guestbookDate = document.createElement('div');
    guestbookDate.classList.add('comments-section__guestbook-date');
    let guestbookText = document.createElement('div');
    guestbookText.classList.add('comments-section__guestbook-text');

    let guestbook = document.querySelector('.comments-section__guestbook');
    
    guestbook.appendChild(guestbookContainer);
    guestbookContainer.appendChild(guestbookPhoto);
    guestbookContainer.appendChild(guestbookEntry);
    guestbookEntry.appendChild(guestbookName);
    guestbookEntry.appendChild(guestbookDate);
    guestbookEntry.appendChild(guestbookText);
    guestbook.appendChild(divider);

    guestbookName.innerText = res.name;
    guestbookDate.innerText = res.timestamp;
    guestbookText.innerText = res.comment;
})
    .catch(err => console.log(err))
})