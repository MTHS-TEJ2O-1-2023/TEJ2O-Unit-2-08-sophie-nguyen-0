/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Sophie
 * Created on: Oct 2023
 * This program ...
*/


basic.clearScreen()
basic.showIcon(IconNames.Heart)
basic.pause(1000)
// red
pins.digitalWritePin(DigitalPin.P16, 0)
// green
pins.digitalWritePin(DigitalPin.P15, 0)
// blue
pins.digitalWritePin(DigitalPin.P14, 0)

input.onButtonPressed(Button.A, function() {
  // red
  pins.digitalWritePin(DigitalPin.P16, 1)
  basic.showString('red')
  basic.pause(1000)
  pins.digitalWritePin(DigitalPin.P16, 0)
  // green
  pins.digitalWritePin(DigitalPin.P15, 1)
  basic.showString('green')
  basic.pause(1000)
  pins.digitalWritePin(DigitalPin.P15, 0)
  // blue
  pins.digitalWritePin(DigitalPin.P14, 1)
  basic.showString('blue')
  basic.pause(1000)
  // magenta
  pins.digitalWritePin(DigitalPin.P16, 1)
  basic.showString('magenta')
  basic.pause(1000)
  pins.digitalWritePin(DigitalPin.P16, 0)
  // cyan
  pins.digitalWritePin(DigitalPin.P15, 1)
  basic.showString('cyan')
  basic.pause(1000)
  pins.digitalWritePin(DigitalPin.P14, 0)
  // yellow
  pins.digitalWritePin(DigitalPin.P16, 1)
  basic.showString('yellow')
  basic.pause(1000)
  // white
  pins.digitalWritePin(DigitalPin.P14, 1)
  basic.showString('white')
  pins.digitalWritePin(DigitalPin.P16, 0)
  pins.digitalWritePin(DigitalPin.P15, 0)
  pins.digitalWritePin(DigitalPin.P14, 0)
})
