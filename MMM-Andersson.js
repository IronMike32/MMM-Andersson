Module.register("MMM-Andersson", {
    // Default module config.
    defaults: {
        text: "Välkommen till Skogsvägen"
    },

    // Override dom generator
    getDom: function () {
        var wrapper = document.createElement("div");
        wrapper.innerHTML = this.config.text;
        return wrapper;
    }
});