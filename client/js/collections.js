tags = new Mongo.Collection("tags");
links = new Mongo.Collection("links");
Meteor.subscribe('tags',function(){
    //Session.set("tagSpinner","off");
});
linksubscription = Meteor.subscribe("links","carousels",function(){
    Session.set("listSpinner","off");
});
