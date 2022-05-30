input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 25; index++) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        music.playTone(988, music.beat(BeatFraction.Double))
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        music.playTone(698, music.beat(BeatFraction.Double))
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 25; index++) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        music.playTone(988, music.beat(BeatFraction.Half))
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        music.playTone(698, music.beat(BeatFraction.Half))
    }
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P15, 25, NeoPixelMode.RGB)
basic.showString("Juan")
basic.forever(function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        # # # # #
        . . . . .
        `)
})
