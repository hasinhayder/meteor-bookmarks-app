links = new Mongo.Collection("links");
if(links.find().count==0){
    db.links.insert({
        name: "Owl Carousel",
        url: "http://owlgraphic.com/owlcarousel/",
        "new":1,
        active:1,
        description: "A fantastic carousel plugin you can use in your responsive projects",
        tags:["carousels"]
    });

    db.links.insert({
        name: "Transit",
        url: "http://ricostacruz.com/jquery.transit/",
        "new":1,
        active:1,
        description: "CSS3 Transition and Animation Library",
        tags:["animations"]
    });

    db.links.insert({
        name: "Nanimator",
        url: "http://github.com/hasinhayder/Nanimator",
        "new":1,
        active:1,
        description: "jQuery Nano Animation library for content blocks",
        tags:["animations"]
    });

    db.links.insert({
        name: "WOW JS",
        url: "http://mynameismatthieu.com/WOW/",
        "new":1,
        active:1,
        description: "jQuery Animation library for content blocks",
        tags:["animations"]
    });

    db.links.insert({
        name: "ElementTransition",
        url: "http://dan-silver.github.io/ElementTransitions.js/",
        "new":1,
        active:1,
        description: "Simple & beautiful transitions for web pages",
        tags:["animations"]
    });
s

}