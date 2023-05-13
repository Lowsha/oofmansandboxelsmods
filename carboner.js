elements.carboner = {
    color: ["#f5eac6","#d4c594","#a89160","#7a5733","#523018","#361e0e"],
    category: "machines",
    properties: {
        on: true,
        
    },
    tick: function(pixel) {
       
            createPixel("carbon_dioxide", pixel.x, pixel.y+1);
            
        
       
    },
};
