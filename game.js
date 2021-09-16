            kaboom({
                stretch: true,
                letterbox: true,
                width: 320,
                height: 240,
                scale: 3,
                font: "sinko",
                clearColor: [ 60, 0, 30, ],
            });

            loadRoot('https://i.imgur.com/');
            loadSprite('ship','7poQcIP.png');

            const player = add([
                sprite('ship'),
                pos(160,120),
            ]) ;

            const scoreLabel = add([
                text("Test label"),
                scale(1),
                pos(40, 8),
            ])
