// let commentContainer = document.createElement('div');
// commentContainer.classList.add('comment-section__comments-container');
// console.log(commentContainer);

// let comment1 = document.createElement('p');
// comment1.classList.add('comment');
// comment1.innerText = 'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.'

// let referenceNode = document.querySelector('.comments-section__button-comment');

// let commentSection = document.querySelector('.comments-section__container');

// let comment2 = document.createElement('p');
// comment2.classList.add('comment');
// comment2.innerText = 'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!'

// let comment3 = document.createElement('p');
// comment3.classList.add('comment');
// comment3.innerText = 'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!'

// commentSection.insertBefore(comment1, referenceNode);
// commentSection.insertBefore(comment2, referenceNode);
// commentSection.insertBefore(comment3, referenceNode);

// const commentsForm = document.querySelector('.comments-section__form');
// commentsForm.addEventListener ('submit', commentsFormHandler);

// console.log('elements', commentsForm.elements);
// console.log('name element', commentsForm.elements[0]);
// console.log('by field name', commentsForm.elements.name);

// function commentsFormHandler(e) {
//     e.preventDefault;
//     const name = e.target.name.value;
//     const comment = e.target.comment.value;
//     function uploadData (name, comment) {
//         guestbookName.innerHTML = name;
//         guestbookText.innerHTML = comment;
//         console.log(name);
//         console.log(comment);
//     }
// }

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
guestbookName.innerHTML = "Sandy Nguyen";

let guestbookDate = document.createElement('div');
guestbookDate.classList.add('comments-section__guestbook-date');
guestbookDate.innerHTML = "04/09/2020";

let guestbookText = document.createElement('div');
guestbookText.classList.add('comments-section__guestbook-text');
guestbookText.innerHTML = 'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.'


/*Take data input from the comments form and upload it to the webpage as a block of content 
Each comment should have a circle photo, the person's name, and their comment.
Each comment will have a divider, a comments container, an entry div for the name, date and text
The page will not refresh when the button is clicked*/

let guestbook = document.querySelector('.comments-section__guestbook');
guestbook.appendChild(divider);
guestbook.appendChild(guestbookContainer);
guestbookContainer.appendChild(guestbookPhoto);
guestbookContainer.appendChild(guestbookEntry);
guestbookEntry.appendChild(guestbookName);
guestbookEntry.appendChild(guestbookDate);
guestbookEntry.appendChild(guestbookText);

function commentsFormHandler(event) {
    event.preventDefault();
    alert("The form was submitted");
    const name = e.target.name.value;
    const comment = e.target.comment.value;
    console.log(name);
    console.log(comment);
    
}

const commentsForm = document.querySelector('.comments-section__form');
commentsForm.addEventListener('submit', commentsFormHandler);
