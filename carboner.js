elements.oofman = {
    color: "#656869",
    category: "machines",
    state: "solid",
    density: 720,
    tick: function(pixel) {
            createPixel("carbon_dioxide", pixel.x, pixel.y+1);
    },
};


behaviors.oofman.tick = function(pixel) {
    createPixel("carbon_dioxide", pixel.x, pixel.y+1);
};
