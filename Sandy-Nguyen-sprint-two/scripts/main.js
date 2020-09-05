/*When the button of the form is pushed, the values input in the boxes will be pushed into the arrays with the values of the 3 comments*/

const commentsForm = document.querySelector('.comments-section__form');
commentsForm.addEventListener('submit', commentsFormHandler);

function commentsFormHandler(event) {
    event.preventDefault();
    let name = event.target.name.value;
    names.push(name);
    let comment = event.target.comment.value;
    comments.push(comment);

    function1()
}

/*Values for 3 comments put into arrays*/

const guestbook = document.querySelector('.comments-section__guestbook');
const names = ["Michael Lyons", "Gary Wong", "Theodore Duncan"];
const dates = ["12/18/2018", "12/12/2018", "11/15/2018"];
const comments = ["They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.", "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!", "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!"];

/*These functions create the comment sections*/

const divider = document.querySelector('.comments-section__guestbook-divider');

function function1() {
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
    guestbookName.innerHTML = names[0];
    let guestbookDate = document.createElement('div');
    guestbookDate.classList.add('comments-section__guestbook-date');
    guestbookDate.innerHTML = dates[0];
    let guestbookText = document.createElement('div');
    guestbookText.classList.add('comments-section__guestbook-text');
    guestbookText.innerHTML = comments[0];

    divider.insertBefore(guestbookContainer, null);
    guestbookContainer.appendChild(guestbookPhoto);
    guestbookContainer.appendChild(guestbookEntry);
    guestbookEntry.appendChild(guestbookName);
    guestbookEntry.appendChild(guestbookDate);
    guestbookEntry.appendChild(guestbookText);
    guestbook.appendChild(divider);
}

setTimeout(function1, 0);

function function2 () {
    for (let i = 0; i < 2; i++) {
        function1(i)
    }
}

setTimeout(function2, 0);
