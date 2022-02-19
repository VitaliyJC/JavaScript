'use strict';

class Post {
   constructor(author, text, date) {
      this.author = author;
      this.text = text;
      this.date = date;
   }

   edit(text) {
      this.text = text;
   }
}

const post1 = new Post('автор1', 'какое-то название книги1', 'дата1');
post1.edit('введеное название книги1');
console.log(post1);

class AttachedPost extends Post {
   constructor(author, text, date) {
      super(author, text, date);
      this.highlighted = false;
   }

   makeTextHighlighted() {
      this.highlighted = true;
   }
}

const attachedPost1 = new AttachedPost('Имя автора', this.text, 'дата2');
attachedPost1.makeTextHighlighted();
attachedPost1.edit('введеное название книги2');
console.log(attachedPost1)