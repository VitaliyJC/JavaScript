'use strict';

function Post(author, text, date) {
   this.author = author;
   this.text = text;
   this.date = date;
}

Post.prototype.edit = function (text) {
   this.text = text;
};

const post1 = new Post('автор1', 'какое-то название книги1', 'дата1');
post1.edit('введеное название книги1');
console.log(post1);

function AttachedPost(author, text, date) {
   Post.call(this, author, text, date);
   this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function () {
   this.highlighted = true;
}

const attachedPost1 = new AttachedPost('Имя автора', 'какое-то название книги2', 'дата2');
attachedPost1.makeTextHighlighted();
attachedPost1.edit('введеное название книги2');
console.log(attachedPost1);