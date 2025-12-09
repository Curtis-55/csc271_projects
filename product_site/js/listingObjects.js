document.addEventListener("DOMContentLoaded", function () {

    function Listing(itemName, price, condition) {
        this.itemName = itemName;
        this.price = price;
        this.condition = condition;

        this.display = function () {
            return "<p>" +
                "Item: " + this.itemName + "<br>" +
                "Price: " + this.price + "<br>" +
                "Condition: " + this.condition +
                "</p><hr>";
        };
    }

    var listing1 = new Listing("Cobb Accessport V3", 450, "Like New");
    var listing2 = new Listing("Enkei RPF1 Wheels", 800, "Used");

    var listings = [listing1, listing2];

    
    var container = document.getElementById("listingContainer");

    for (var i = 0; i < listings.length; i++) {
        container.innerHTML += listings[i].display();
    }

});