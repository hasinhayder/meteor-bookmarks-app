tags = new Mongo.Collection("tags");

Meteor.publish('tags', function() {
    return tags.find();
});

Meteor.publish('links', function(tag) {
    return links.find({tags:tag});
});