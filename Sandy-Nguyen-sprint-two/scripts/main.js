// let guestbookContainer = document.createElement('div');
// guestbookContainer.classList.add('comments-section__guestbook-container');

// let guestbookPhoto = document.createElement('div');
// guestbookPhoto.classList.add('comments-section__guestbook-photo');

// let guestbookEntry = document.createElement('div');
// guestbookEntry.classList.add('comments-section__guestbook-entry');

// let guestbookName = document.createElement('h4');
// guestbookName.classList.add('comments-section__guestbook-name');
// guestbookName.innerHTML = "Micheal Lyons";

// let guestbookDate = document.createElement('div');
// guestbookDate.classList.add('comments-section__guestbook-date');
// guestbookDate.innerHTML = "12/18/2018";

// let guestbookText = document.createElement('div');
// guestbookText.classList.add('comments-section__guestbook-text');
// guestbookText.innerHTML = 'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.'

// let divider = document.createElement('div');
// divider.classList.add('divider', 'comments-section__guestbook-divider');

// let guestbookContainer2 = document.createElement('div');
// guestbookContainer2.classList.add('comments-section__guestbook-container');

// let guestbookPhoto2 = document.createElement('div');
// guestbookPhoto2.classList.add('comments-section__guestbook-photo');

// let guestbookEntry2 = document.createElement('div');
// guestbookEntry2.classList.add('comments-section__guestbook-entry');

// let guestbookName2 = document.createElement('h4');
// guestbookName2.classList.add('comments-section__guestbook-name');
// guestbookName2.innerHTML = "Gary Wong";

// let guestbookDate2 = document.createElement('div');
// guestbookDate2.classList.add('comments-section__guestbook-date');
// guestbookDate2.innerHTML = "12/12/2018";

// let guestbookText2 = document.createElement('div');
// guestbookText2.classList.add('comments-section__guestbook-text');
// guestbookText2.innerHTML = 'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!'

// let divider2 = document.createElement('div');
// divider2.classList.add('divider', 'comments-section__guestbook-divider');

// let guestbookContainer3 = document.createElement('div');
// guestbookContainer3.classList.add('comments-section__guestbook-container');

// let guestbookPhoto3 = document.createElement('div');
// guestbookPhoto3.classList.add('comments-section__guestbook-photo');

// let guestbookEntry3 = document.createElement('div');
// guestbookEntry3.classList.add('comments-section__guestbook-entry');

// let guestbookName3 = document.createElement('h4');
// guestbookName3.classList.add('comments-section__guestbook-name');
// guestbookName3.innerHTML = "Theodore Duncan";

// let guestbookDate3 = document.createElement('div');
// guestbookDate3.classList.add('comments-section__guestbook-date');
// guestbookDate3.innerHTML = "11/15/2018";

// let guestbookText3 = document.createElement('div');
// guestbookText3.classList.add('comments-section__guestbook-text');
// guestbookText3.innerHTML = 'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!'

// let divider3 = document.createElement('div');
// divider3.classList.add('divider', 'comments-section__guestbook-divider');

/*Take data input from the comments form and upload it to the webpage as a block of content 
Each comment should have a circle photo, the person's name, and their comment.
Each comment will have a divider, a comments container, an entry div for the name, date and text
The page will not refresh when the button is clicked*/

// let guestbook = document.querySelector('.comments-section__guestbook');
// guestbook.appendChild(guestbookContainer);
// guestbookContainer.appendChild(guestbookPhoto);
// guestbookContainer.appendChild(guestbookEntry);
// guestbookEntry.appendChild(guestbookName);
// guestbookEntry.appendChild(guestbookDate);
// guestbookEntry.appendChild(guestbookText);
// guestbook.appendChild(divider);

// guestbook.appendChild(guestbookContainer2);
// guestbookContainer2.appendChild(guestbookPhoto2);
// guestbookContainer2.appendChild(guestbookEntry2);
// guestbookEntry2.appendChild(guestbookName2);
// guestbookEntry2.appendChild(guestbookDate2);
// guestbookEntry2.appendChild(guestbookText2);
// guestbook.appendChild(divider2);

// guestbook.appendChild(guestbookContainer3);
// guestbookContainer3.appendChild(guestbookPhoto3);
// guestbookContainer3.appendChild(guestbookEntry3);
// guestbookEntry3.appendChild(guestbookName3);
// guestbookEntry3.appendChild(guestbookDate3);
// guestbookEntry3.appendChild(guestbookText3);
// guestbook.appendChild(divider3);

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

const guestbook = document.querySelector('.comments-section__guestbook');
const names = ["Michael Lyons", "Gary Wong", "Theodore Duncan"];
const dates = ["12/18/2018", "12/12/2018", "11/15/2018"]
const comments = ["They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.", "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!", "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!"]

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

    guestbook.appendChild(guestbookContainer);
    guestbookContainer.appendChild(guestbookPhoto);
    guestbookContainer.appendChild(guestbookEntry);
    guestbookEntry.appendChild(guestbookName);
    guestbookEntry.appendChild(guestbookDate);
    guestbookEntry.appendChild(guestbookText);
    guestbook.appendChild(divider);
}

setTimeout(function1, 0);

function function2 () {
    function1()
}

setTimeout(function2, 0)

function function3 () {
    function1()
}

setTimeout(function3, 0);






