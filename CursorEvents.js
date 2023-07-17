AFRAME.registerComponent("cursor-listener", {
    schema: {
        selectedItemId: { default: "", type: "string"}
    },

    init : function () {
        this.handleMouseEnterEvents();
        this.handleMouseLeaveEvents();
        this.handleClickEvents();
    },

    update : function () {
        const fadeBackgroundEl = document.querySelector("#fadeBackground");

        c = fadeBackgroundEl.children;
        if (c.length > 0) {
            var i;
            for (i=0; i <= c.length; i++) {
                fadeBackgroundEl.removeChild(c[i]);
            }
        } else {
            this.handleClickEvents();
        }
    },

    handleMouseEnterEvents : function () {
        this.el.addEventListener("mouseenter", ()=>{
            const id = this.el.getAttribute("id");
            const comicsId = ["spiderMan", "ironMan", "incredibleHulk", "captainAmerica"]
            if(comicsId.includes(id)){
                this.el.setAttribute("material", {
                    color: "blue",
                })
            }
        })
    },

    handleMouseLeaveEvents : function () {
        this.el.addEventListener("mouseleave", ()=>{
            const id = this.el.getAttribute("id");
            const comicsId = ["spiderMan", "ironMan", "incredibleHulk", "captainAmerica"]
            if(comicsId.includes(id)){
                const comicsContainer = document.querySelector(`#comics-container`)
                comicsContainer.setAttribute("cursor-listener", {
                    selectedItemId: this.data,
                })
                this.el.setAttribute("material", {
                    color: "white",
                })
            }
        })
    },

    handleClickEvents : function () {
        const { selectedItemId } = this.data;
        const fadeBackgroundEl = document.querySelector("#fadeBackground")
        this.el.addEventListener("click", ()=>{
            if (selectedItemId) {
                fadeBackgroundEl.setAttribute("visible", true);
                fadeBackgroundEl.setAttribute("spawn-sub", {
                    itemId: selectedItemId,
                });
            } else {
                fadeBackgroundEl.setAttribute("visible", false)
            }
        })
    }
})