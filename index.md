# Hello! Thank you for landing here.

## My name is Neil Fink, I'm a software development student.
I also consider myself a hobbyist game designer, and I am working towards a stronger skillset every day of the week.
I have quite a few games and lots of example code. Down below, I'll feature some of my all-time favourite snippets of code that I've written.

This portfolio is still under construction, and most likely will be for quite a while.

**My links in the top-right of the page work though.**

I have much of my coding work stored in private repos for academic purposes. However, I have a showcase of my games recorded, and GameMaker source code listed here as well.

## Catacombs of Darhus

This is a game that I've written in Java. The game is made up coloured tiles generated with ASCII characters to represent an object (Mountains, Gold, Player, Cerberus). The game is played by clicking UI button prompts to move the player around the stage, collect all of the gold to unlock the sword, then with the sword you can kill the Cerberus. It's a very simple game, but the mechanics to achieve the result are impressive (at least in my opinion). This method of world generation can easily be tuned to account for a larger stage.

Here is the GameController constructor, it creates the world array and places objects randomly.

```Java
public GameController(int tileSize, int worldX, int worldY) {
        this.tileSize = tileSize;
        this.worldX = worldX;
        this.worldY = worldY;
        char[] newWorld = new char[worldSize];
        int index = 0, index2 = 0, playerPlace = (playerY * worldEdge) + playerX;

        Random rand = new Random(System.currentTimeMillis());
        Arrays.fill(newWorld, '-');

        while (index < newWorld.length - 2) {
            index += rand.nextInt(10);
            index2 += rand.nextInt(20);
            if (index > newWorld.length - 2) index = newWorld.length - 2;
            if (index2 > newWorld.length - 2) index2 = newWorld.length - 2;
            newWorld[index] = '+';
            newWorld[index2] = '^';
        }
        for (int i = 0; i < newWorld.length - 1; i++) {
            world = addCharElement(world.length, newWorld);
        }

        // Clear player square
        world[playerPlace] = '-';

        //Place the enemy
        while (enemyX == -1 && enemyY == -1) {
            enemyX = rand.nextInt(worldEdge);
            enemyY = rand.nextInt(worldEdge);
            int place = (enemyY * worldEdge) + enemyX;

            if (world[place] == '-' && place != playerPlace) {
                world[place] = 'x';
                break;
            }
        }

        for (int i = 0; i < worldTiles.length; i++) {
            worldTiles[i] = new WorldTile(tileSize);
            worldTiles[i].updateChar(world[i]);
        }
    }

```

Have a look at the game in action.

<iframe width="560" height="315" src="https://www.youtube.com/embed/-3AbFq_-tBo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## 3D FPS Dungeon Crawler Example

I made this to test out lighting and holding a sword in front of an FP cam. I liked it and thought it looked very cool, something I would like to turn into a fully-featured game eventually.
I made this piece without any sort of tutorials, I simply kept GML documentation open and experimented until I got a good result.

<iframe width="560" height="315" src="https://www.youtube.com/embed/GSoilj9MPO0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## Tower of Blackliffe

I had started this game in 2017. However, I made a revision early this year, and I improved the overall quality of the game.

<iframe width="560" height="315" src="https://www.youtube.com/embed/seOKVvTbWqo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


