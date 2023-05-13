elements.oofman = {
    color: "#656869",
    category: "machines",
    state: "solid",
    tick: function(pixel) {
            createPixel("carbon_dioxide", pixel.x, pixel.y+1);
    },
};
