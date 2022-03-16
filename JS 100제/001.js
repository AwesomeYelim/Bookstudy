const level = 5;
        
for(var i = level; i >= 1; i--) {
    let tree = "";
    for(var k = 1; k <= level-i; k++) {
        tree += " ";
    }
    for(var j = 1; j <= i*2-1; j++) {
        tree += "*";
    }
    console.log(tree);
}
