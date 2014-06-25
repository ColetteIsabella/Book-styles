var book = book || {};

book.BookView = Backbone.View.extend({
  tagName: "div",
  className: "shelf",
  template: _.template( $("#bookTemplate").html() ),

  render: function() {
    this.$el.html( this.template( this.model.toJSON() ) );

    return this;
  }
  events: {
  "click.button.new": "displayNewBook",
},

initialize: function() {
    this.listenTo(this.model, "change", this.render);
  },

