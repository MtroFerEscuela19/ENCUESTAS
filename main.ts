let VOTO_1 = 0
let VOTO_2 = 0
input.onButtonPressed(Button.A, function () {
    VOTO_1 += 1
    basic.showNumber(VOTO_1)
})
input.onGesture(Gesture.Shake, function () {
    if (VOTO_1 > VOTO_2) {
        basic.showString("VOTO 1 GANAOR")
    } else if (VOTO_1 < VOTO_2) {
        basic.showString("VOTO 2 GANAOR")
    } else {
        basic.showString("EMPATE")
    }
})
input.onButtonPressed(Button.AB, function () {
    VOTO_1 = 0
    VOTO_2 = 0
    basic.showNumber(VOTO_1)
    basic.showNumber(VOTO_2)
})
input.onButtonPressed(Button.B, function () {
    VOTO_2 = 1
    basic.showNumber(VOTO_2)
})
