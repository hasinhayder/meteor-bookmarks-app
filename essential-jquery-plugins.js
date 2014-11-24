if (Meteor.isClient) {
    Session.set("listSpinner","on");

    Tracker.autorun(function () {
        var listSpinner = Session.get("listSpinner");

        if("off"==listSpinner){
            jQuery("#lspin").hide();
            jQuery("#linkcontainer").show();
        }else if("on"==listSpinner){
            jQuery("#linkcontainer").hide();
            jQuery("#lspin").show();
        }


    });
    Template.banner.helpers({
        tags: function () {
            return tags.find({},{sort: {name: 1}});
        },
        isactive:function(){
            if("carousels"==this.name)
                return "active";
            return "";
        }

    });

    Template.banner.events({
       "click ul.tags li":function(event,template){
           Session.set("listSpinner","on");
           jQuery("ul.tags li").removeClass("active");
           jQuery(event.target).addClass("active");
           var tag = event.target.innerHTML;
           linksubscription.stop();
           linksubscription = Meteor.subscribe("links",tag.trim(),function(){
               Session.set("listSpinner","off");
           });
       }
    });

    Template.alllinks.helpers({
        links: function () {
            return links.find({},{sort: {name: 1}});
        },
        alltags:function(){
            return this.tags.join(", ");
        }
    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
