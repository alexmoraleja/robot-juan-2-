input.onButtonPressed(Button.A, function () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    basic.pause(2000)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
    basic.pause(2000)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    basic.pause(2000)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 255)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    basic.pause(2000)
})
let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
basic.showString("Juan")
basic.forever(function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        # # # # #
        . . . . .
        `)
    music.rest(music.beat(BeatFraction.Double))
    music.playTone(262, music.beat(BeatFraction.Whole))
    strip.showColor(neopixel.rgb(0, 255, 0))
    music.playTone(262, music.beat(BeatFraction.Whole))
    strip.showColor(neopixel.rgb(255, 0, 0))
    music.playTone(262, music.beat(BeatFraction.Double))
    strip.showColor(neopixel.rgb(0, 0, 255))
    music.playTone(262, music.beat(BeatFraction.Whole))
    strip.showColor(neopixel.rgb(0, 255, 255))
    music.playTone(262, music.beat(BeatFraction.Whole))
    strip.showColor(neopixel.rgb(255, 0, 255))
    music.playTone(262, music.beat(BeatFraction.Whole))
    strip.showColor(neopixel.rgb(255, 255, 0))
    music.playTone(262, music.beat(BeatFraction.Whole))
    strip.showColor(neopixel.rgb(255, 0, 0))
    music.playTone(262, music.beat(BeatFraction.Whole))
    strip.showColor(neopixel.rgb(0, 0, 255))
    music.playTone(262, music.beat(BeatFraction.Whole))
    strip.showColor(neopixel.rgb(0, 255, 0))
    music.playTone(262, music.beat(BeatFraction.Double))
    strip.showColor(neopixel.rgb(0, 255, 255))
    music.playTone(262, music.beat(BeatFraction.Whole))
    strip.showColor(neopixel.rgb(255, 0, 255))
    music.playTone(262, music.beat(BeatFraction.Whole))
    strip.showColor(neopixel.rgb(255, 255, 0))
    music.playTone(262, music.beat(BeatFraction.Breve))
    strip.showColor(neopixel.rgb(0, 0, 255))
    music.playTone(262, music.beat(BeatFraction.Double))
    strip.showColor(neopixel.rgb(255, 0, 0))
    music.playTone(262, music.beat(BeatFraction.Whole))
    strip.showColor(neopixel.rgb(0, 255, 0))
    music.playTone(262, music.beat(BeatFraction.Whole))
    strip.showColor(neopixel.rgb(255, 0, 255))
    music.playTone(262, music.beat(BeatFraction.Double))
    strip.showColor(neopixel.rgb(255, 255, 0))
    music.playTone(262, music.beat(BeatFraction.Whole))
    strip.showColor(neopixel.rgb(0, 255, 255))
    music.playTone(262, music.beat(BeatFraction.Whole))
    strip.showColor(neopixel.rgb(20, 255, 75))
    music.playTone(262, music.beat(BeatFraction.Double))
    strip.showColor(neopixel.rgb(255, 100, 43))
    music.playTone(262, music.beat(BeatFraction.Whole))
    strip.showColor(neopixel.rgb(158, 32, 255))
    music.playTone(262, music.beat(BeatFraction.Double))
    strip.showColor(neopixel.rgb(12, 255, 190))
    music.playTone(262, music.beat(BeatFraction.Double))
    strip.showColor(neopixel.rgb(255, 0, 255))
    music.playTone(262, music.beat(BeatFraction.Double))
    strip.showColor(neopixel.rgb(255, 0, 0))
    music.playTone(262, music.beat(BeatFraction.Whole))
    strip.showColor(neopixel.rgb(255, 0, 0))
    music.playTone(262, music.beat(BeatFraction.Whole))
    strip.showColor(neopixel.rgb(100, 255, 23))
    music.playTone(262, music.beat(BeatFraction.Double))
    strip.showColor(neopixel.rgb(255, 0, 0))
    music.playTone(262, music.beat(BeatFraction.Whole))
    strip.showColor(neopixel.rgb(255, 200, 45))
    music.playTone(262, music.beat(BeatFraction.Breve))
    strip.showColor(neopixel.rgb(0, 100, 0))
})
