radio.onReceivedString(function (receivedString) {
    music.playMelody("F D G E C5 D B C ", 210)
    basic.showString(receivedString)
})
radio.setGroup(255)
