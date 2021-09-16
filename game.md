<script type="module">

            // import kaboom lib
            import kaboom from "https://unpkg.com/kaboom@next/dist/kaboom.mjs";
            
            kaboom({
                width: 320,
                height: 240,
                stretch: true,
                letterbox: true,
                clearColor: [ 20, 0, 30, ],
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
                font("sink"),
                pos(40, 8),
            ])
            
        </script>
