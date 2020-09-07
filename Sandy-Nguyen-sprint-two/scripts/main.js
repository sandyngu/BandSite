const comments = [{
    name: 'Michael Lyons',
    date: '12/18/2018',
    comment: 'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.'
}, {
    name: 'Gary Wong',
    date: '12/12/2018',
    comment: 'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!'
}, {
    name: 'Theodore Duncan',
    date: '11/15/2018',
    comment: 'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!'
}];

/*When the button of the form is clicked, the values put in the fields will be pushed into the front of the array with the values of the other 3 comments. The date will also be determined and added to the array. The contents of the form will clear, the loaded comments will be deleted and a parent container will be made*/

const commentsForm = document.querySelector('.comments-section__form');
commentsForm.addEventListener('submit', commentsFormHandler);

function commentsFormHandler(event) {
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
        comments.unshift(newComment);
        
        commentsForm.reset();
        deleteAll();
        parentFunction();
    };

/*This function deletes the container holding the comments elements*/

function deleteAll() {
    document.querySelector('.comments-section__guestbook').remove();
};

/*This function creates the parent div for the comments section and loads the other comments*/
    
window.onload = parentFunction(); 

function parentFunction() {
    let parentElement = document.createElement('div');
    parentElement.classList.add('comments-section__guestbook');
    let divider = document.createElement('div');
    divider.classList.add('divider', 'comments-section__guestbook-divider');
    let parentParent = document.querySelector('.comments-section');
    parentParent.appendChild(parentElement);
    parentElement.appendChild(divider);
        
    loadComment();
};

    
/*These functions create the comment sections, using data from the array*/
    
function loadComment() {
    comments.forEach((data) => displayComment(data));
};
    
function displayComment(comment) {
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

    guestbookName.innerText = comment.name;
    guestbookDate.innerText = comment.date;
    guestbookText.innerText = comment.comment;
};
