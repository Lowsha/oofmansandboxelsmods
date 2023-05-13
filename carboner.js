

elements.oofman = {
    color: "#656869",
    category: "machines",
    state: "solid",
    density: 720,
    behavior: behaviors.SOLID,
    tick: function(pixel) {
            createPixel("carbon_dioxide", pixel.x, pixel.y+1);
    },
};


