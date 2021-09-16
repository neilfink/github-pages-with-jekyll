kaboom({
    global: true,
    width: 320,
    height: 240,
    stretch: true,
    letterbox: true,
    clearColor: [ 0, 0, 0],
});

loadRoot('https://i.imgur.com/');
loadSprite('ship','7poQcIP.png');

const player = add([
    sprite('ship'),
    pos(160,120),
]) ;

const scoreLabel = add([
    text("Test label"),
    scale(0.5),
    pos(40, 8),
])
