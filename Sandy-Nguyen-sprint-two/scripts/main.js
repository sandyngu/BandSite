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

const commentsForm = document.querySelector('.comments-section__form');
console.log('elements', commentsForm.elements);
console.log('name element', commentsForm.elements[0]);
console.log('by field name', commentsForm.elements.name);

function commentsFormHandler(e) {
    e.preventDefault
    console.log(e);
    const name = e.target.name.value;
    console.log(name);
    const comment = e.target.comment.value;
    console.log(comment);
}

commentsForm.addEventListener ('submit', commentsFormHandler);


