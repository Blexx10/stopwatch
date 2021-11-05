input.onButtonPressed(Button.A, function() {
    let start = 0
    input.onButtonPressed(Button.A, function() {
        start = input.runningTime()
    })
})
input.onButtonPressed(Button.B, function() {
    let start = 0
    input.onButtonPressed(Button.B, function () {
        let elaspsed = input.runningTime() - start
        basic.showNumber(Math.idiv(elaspsed, 1000))
    })
})