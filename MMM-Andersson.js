Module.register("MMM-Andersson", {
    // Default module config.
    defaults: {
        text: "V�lkommen till Skogsv�gen"
    },

    // Override dom generator
    getDom: function () {
        var wrapper = document.createElement("div");
        wrapper.innerHTML = this.config.text;
        return wrapper;
    }
});