function moverse () {
    if (Pescado.get(LedSpriteProperty.Y) >= 4) {
        paso = -1
    } else if (Pescado.get(LedSpriteProperty.Y) <= 0) {
        paso = 1
    }
    Pescado.change(LedSpriteProperty.Y, paso)
}
input.onButtonPressed(Button.A, function () {
    moverse()
})
function zambullirse () {
    if (Pescado.get(LedSpriteProperty.X) >= 4) {
        paso = -1
    } else if (Pescado.get(LedSpriteProperty.X) <= 0) {
        paso = 1
    }
    for (let index = 0; index < 4; index++) {
        Pescado.change(LedSpriteProperty.X, paso)
        basic.pause(50)
    }
    game.addScore(1)
    basic.showString("Puntos!")
    basic.showNumber(game.score())
    basic.pause(1000)
}
input.onButtonPressed(Button.B, function () {
    zambullirse()
})
function atrapar () {
    pescador.change(LedSpriteProperty.Y, randint(-1, 1))
}
let paso = 0
let Pescado: game.LedSprite = null
let pescador: game.LedSprite = null
game.setScore(0)
basic.showNumber(game.score())
pescador = game.createSprite(2, randint(0, 4))
Pescado = game.createSprite(0, randint(0, 4))
paso = 1
basic.forever(function () {
    atrapar()
    if (Pescado.isTouching(pescador)) {
        game.gameOver()
    }
})
