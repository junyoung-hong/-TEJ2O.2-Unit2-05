/* Copyright (c) 2026 MTHS All rights reserved
 *
 * Created by: Junyoung
 * Created on: Feb 2026
 * This program shows the temperature with K
*/

// our variable for a random number
let temperatureValueCelsius: number
let temperatureValueKelvin: number

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    // get temperature value
    temperatureValueCelsius = input.temperature()
    temperatureValueKelvin = temperatureValueCelsius + 273.15
    // output answer
    basic.clearScreen()
    basic.showString('The temperature is:' + temperatureValueKelvin.toString() + 'K')
})
