basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 0) {
        basic.showNumber(1)
    }
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        basic.showNumber(0)
    }
})
