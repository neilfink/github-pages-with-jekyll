# Hello! Thank you for landing here.

This is my portfolio site, where I host my work.

-- **UNDER CONSTRUCTION** --

This portfolio is still under construction, and most likely will be for quite a while.

**My links in the top-right of the page work though.** Be sure to go to my github repos and have a look through my **python stuff** and my **java stuff**. All my favourite source code is hosted in those repos.

## My name is Neil Fink, I'm a software development student.
I also consider myself a hobbyist game designer, and I am working towards a stronger skillset every day of the week.
I have quite a few games and lots of example code. Down below, I'll feature some of my all-time favourite snippets of code that I've written.

## Here is the main class of a Java game called ChickenTime.

<details><summary>Click me to see ChickenTime!</summary>
<p>

```java

package ChickenTime;

import java.util.Scanner;

/**
 * @author Neil Fink, 2021
 */

public class ChickenPen {
    /**
     * Amount of chickens in the world object.
     **/
    static int chickens = 1;
    /**
     * Maximum capacity of chickens the coop can hold.
     **/
    static int maxCapacity = 10;
    /**
     * Instantiated reference array to keep all chicken objects indexed.
     **/
    static Chicken[] chick = new Chicken[maxCapacity];

    /**
     * Shows the summary of all chickens in the coop.
     * No parameters.
     **/
    public static void showStatus() {
        for (int i = 0; i < chickens; i++) {
            System.out.println(chick[i].toString());
        }
        System.out.print("\n");
    }

    /**
     * The main loop of the program.
     *
     * @param args String array
     * @throws InterruptedException Usage of Thread.sleep
     */
    public static void main(String[] args) throws InterruptedException {
        Scanner scan = new Scanner(System.in); // Scanner object to get input
        int myInput = -1; // myInput is an integer which represents the user selection
        int i = 0; // i represents the currently selected chicken index,
        // it will be set by other methods throughout the program

        System.out.println("Welcome to ChickenTime!");
        chick[i] = new Chicken();
        chick[i].setName();
        chick[i].setIndex(i);
        Thread.sleep(1000);

        while (myInput != 0) {

            showStatus();
            myInput = -1;
            while (myInput < 0 || myInput > 6) {
                System.out.println("What do you want to do?\n[1]-Feed seeds, [2]-Hit a chicken, [3]-Spawn a chicken, [4]-Rename, [5]-Get eggs, [6]-Play together, [0]-Quit");
                while (!scan.hasNextInt()) {
                    System.out.println("Not valid!");
                    scan.next();
                }
                myInput = scan.nextInt();
            }

            // Switch case for user selection, 1-2-3-4-5-6...
            switch (myInput) {
                // User wants to feed chicken
                case 1 -> {
                    i = selectChicken();
                    if (chick[i].getStatus()) {
                        System.out.println("How many kilos of seeds? ( 0.1 - 2.0 kilos )");
                        while (!scan.hasNextFloat()) {
                            System.out.println("Not valid!");
                            scan.next();
                        }
                        float seeds = scan.nextFloat();
                        if (chick[i].feedSeeds(seeds)) {
                            System.out.println("You feed " + chick[i].getName() + " " + seeds + " kilos of seeds.");
                        } else {
                            System.out.println("You can't feed that many seeds!");
                        }
                        if (!chick[i].getStatus()) {
                            System.out.println(chick[i].getName() + " was overfed and died. You suck.");
                        }
                    } else {
                        System.out.println("You can't feed a dead chicken, it literally can't do anything.");
                    }
                    scan.nextLine();
                    Thread.sleep(1000);
                }
                // User wants to hit chicken
                case 2 -> {
                    i = selectChicken();
                    if (chick[i].getStatus()) {
                        System.out.println("You hit " + chick[i].getName() + ", how could you?");
                    } else {
                        System.out.println("Why are you still beating a dead chicken?");
                    }
                    scan.nextLine();
                    Thread.sleep(1000);
                    chick[i].hitChicken();
                }
                // User wants to spawn a new chicken object
                case 3 -> {
                    if (chickens < maxCapacity) {
                        System.out.println("Spawned a chicken!");
                        chick[chickens] = new Chicken();
                        chick[chickens].setName();
                        chick[chickens].setIndex(chickens);
                        chickens += 1;
                    } else {
                        System.out.println("Your coop is full!");
                    }
                    scan.nextLine();
                    Thread.sleep(1000);
                }
                // User wants to rename a chicken
                case 4 -> {
                    i = selectChicken();
                    System.out.println("Chicken #" + (i + 1) + "'s new name:");
                    chick[i].newName(scan.next());
                    scan.nextLine();
                    System.out.println("Chicken #" + (i + 1) + "'s new name is " + chick[i].getName());
                    Thread.sleep(1000);
                }
                // User wants to collect eggs
                case 5 -> {
                    i = selectChicken();
                    if (chick[i].getStatus()) {
                        int myEggs = chick[i].getEggs(); // Represents how many eggs the chicken can make
                        if (myEggs == 0) {
                            System.out.println("Feed " + chick[i].getName() + " more seeds!");
                        } else {
                            System.out.println("You get " + myEggs + " eggs.");
                        }
                    } else {
                        System.out.println("Dead chickens can't make eggs!");
                    }
                    scan.nextLine();
                    Thread.sleep(1000);
                }
                // User wants to make chickens play together
                case 6 -> {
                    int chickFirst, chickSecond; // Integer to represent selected chickens

                    if (chickens > 1) {
                        System.out.print("\nSelect a chicken: ");
                        chickFirst = selectChicken();
                        System.out.print("\nSelect a chicken for " + chick[chickFirst].getName() + " to play with: ");
                        chickSecond = selectChicken();
                        if (chick[chickFirst].getStatus() && chick[chickSecond].getStatus()) {
                            if (chickFirst == chickSecond) {
                                System.out.println(chick[chickFirst].getName() + " can't play with themself!");
                            } else {
                                System.out.println(chick[chickFirst].getName() + " and " + chick[chickSecond].getName() + " play together!");
                                chick[chickFirst].setMood();
                                chick[chickSecond].setMood();
                            }
                        } else {
                            System.out.println("Dead chickens can't play!");
                        }
                    } else {
                        System.out.println("You need more chickens!");
                    }
                    scan.nextLine();
                    Thread.sleep(1000);
                }
            }
        }
    }

    /**
     * Method asks the user which chicken they will select out of all indexes occupied in the chick[] array.
     *
     * @return Returns the integer index of the selected chicken.
     */
    public static int selectChicken() {
        Scanner scan = new Scanner(System.in);
        int myChicken = 0; // Represents the chicken that the user selects
        if (chickens > 1) {
            myChicken = -1;
            while (myChicken < 0 || myChicken >= chickens) {
                System.out.println("Which chicken? [ 1 - " + chickens + " ]");
                while (!scan.hasNextInt()) {
                    System.out.println("Not valid!");
                    scan.next();
                }
                myChicken = scan.nextInt() - 1;
            }
        }
        return myChicken;
    }

}

```

</p>
</details>
