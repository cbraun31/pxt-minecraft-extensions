// Add your code here
namespace wip {
    /**
     * Current position of player
     */
    //% block
    export function whereAmI(){
        player.say(player.position())
    }

    export function direction(){
        player.say(player.getOrientation())
    }
}