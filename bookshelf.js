var Bookshelf = Backbone.Collection.extend({
  model: book.BookModel
)};
$(function() {
  var books = [
    { id: 42,
      title: "Hitchhiker's Guide to the Galaxy",
      coverImage:"/hhg2tg.jpg",
      author: "Douglas Adams", }
    { id: 6,
      title: "Extremely Loud and Incredibly Close",
      coverImage: "extreme.jpg",
      author: "Jonathan Safran Foer" }
    ];
  new book.Bookshelf.bookshelfView(books);
});
