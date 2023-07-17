AFRAME.registerComponent("spawn-posters", {
    init: function () {
        this.comicsContainer = this.el; 
        this.createImages();
        console.log("Hiyall");

    },

    createImages: function () {
        const postersRef = [
            {
                id: "spiderMan",
                url: "./assets/posters/spidermanPoster.jpg"
            },
            {
                id: "ironMan",
                url: "./assets/posters/ironmanPoster.jpg"
            },
            {
                id: "incredibleHulk",
                url: "./assets/posters/hulkPoster.jpg"
            },
            {
                id: "captainAmerica",
                url: "./assets/posters/captainamericaPoster.jpg"
            },
        ];
        let previousXPosition = -63;

        for (var item of postersRef) {
            const posX = previousXPosition+25;
            const posY = 15;
            const posZ = -10;
            const position = {
                x: posX,
                y: posY,
                z: posZ,
            }
        
            previousXPosition = posX;
            const borderEl = this.createBorder(position, item.id);
            const poster = this.createPoster(item);
            borderEl.appendChild(poster);
            this.comicsContainer.appendChild(borderEl);
        }
    },

    createBorder: function (position, id){
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("id", id);
        entityEl.setAttribute("visible", true)
        entityEl.setAttribute("geometry", {
            primitive: "plane",
            width: 22,
            height: 30
        });
        entityEl.setAttribute("position", position);
        entityEl.setAttribute("material", {
            color: '#fff'
        })
        entityEl.setAttribute("cursor-listener", {});
        return entityEl;
    },

    createPoster: function(item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("geometry", {
            primitive: "plane",
            width: 20,
            height: 28,
        });

        entityEl.setAttribute("position", { x: 0, y: 0, z: 0.1});
        entityEl.setAttribute("material", { src: item.url });

        return entityEl;
    },


});