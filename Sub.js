AFRAME.registerComponent("spawn-sub", {
    schema : { 
        itemId: { default: "", type: "string"},
        //itemDescription: { default: "", type: "string"}
    },

    update : function () {
       this.createSub();
    },

    createSub: function () {
        subsRef = {
            
            "spidermanSub": {
                title: "Spider-Man",
                url: "./assets/posters/spidermanPosterSub.jpg",
                description: "American teenager Peter Parker, a poor sickly orphan, is bitten by a radioactive spider. As a result of the bite, he gains superhuman strength, speed, and agility, along with the ability to cling to walls, turning him into Spider-Man."
            },
            "ironmanSub": {
                title: "Iron Man",
                url: "./assets/posters/ironmanPosterSub.jpg",
                description: "Tony Stark, a genius inventor and billionaire playboy, is the superhero known as Iron Man. He developed the powerful Iron Man Armor after being kidnapped by the Ten Rings and forced to build a devastating weapon."
            },
            "incredibleHulkSub": {
                title: "Incredible Hulk",
                url: "./assets/posters/hulkPosterSub.jpg",
                description: "Scientist Bruce Banner desperately seeks a cure for the gamma radiation that contaminated his cells and turned him into The Hulk. Cut off from his true love Betty Ross and forced to hide from his nemesis, Gen. Thunderbolt Ross, Banner soon comes face-to-face with a new threat: a supremely powerful enemy known as The Abomination."
            },
            "captainAmericaSub": {
                id: "Captain America",
                url: "./assets/posters/captainamericaPosterSub.jpg",
                description: "It is 1941 and the world is in the throes of war. Steve Rogers wants to do his part and join America's armed forces, but the military rejects him because of his small stature. Finally, Steve gets his chance when he is accepted into an experimental program that turns him into a supersoldier called Captain America."
            },
        };
        const { itemId } = this.data;
  
        const fadeBackgroundEl = document.querySelector("#fadeBackground");
    
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("id", `${itemId}`);
    
        entityEl.setAttribute("geometry", {
          primitive: "plane",
          width: 0.9,
          height: 1,
        });
    
        entityEl.setAttribute("material", { color: "#000" });
        entityEl.setAttribute("position", { x: 0, y: 0.1, z: -1 });
    
        const item = subsRef[itemId];
    
        const imageEl = this.createImage(item);
        const descriptionEl = this.createText(item);
    
        entityEl.appendChild(imageEl);
        entityEl.appendChild(descriptionEl);
    
        fadeBackgroundEl.appendChild(entityEl);
    },

    createImage: function (item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("geometry", {
          primitive: "plane",
          width: 0.85,
          height: 0.4,
        });
        entityEl.setAttribute("material", {src:item.url});
        entityEl.setAttribute("position", { x: 0, y: 0.3, z: 0.05 });
        return entityEl;
    },

    createText: function(item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("text", {
            shader: "msdf",
            anchor: "left",
            font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
            width: 0.75,
            height: 2,
            color: "#fff",
            wrapCount: "40",
            value: item.description,
          });

        entityEl.setAttribute("position", { x: 0, y: 0, z: 0.1});
        //entityEl.setAttribute("material", { src: url });

        return entityEl;
    },


});

