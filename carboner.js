
elements.mayo = {
    color: "#ffffff",
    behavior: behaviors.LIQUID,
    category: "liquids",
    viscosity: 100000,
    state: "liquid",
    density: 720,
};


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


