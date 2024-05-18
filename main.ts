enum MOTOR_PORTS {
    E,
    F,
    G,
    H
}

enum SERVO_PINS {
    //% block="1"
    P1,
    //% block="8"
    P8,
    //% block="12"
    P12,
    //% block="2"
    P2
}

enum LINE_FOLLOWER_PINS {
    //% block="1"
    P1,
    //% block="8"
    P8,
    //% block="12"
    P12,
    //% block="2"
    P2
}

enum LED_PORTS {
    B,
    C,
    D,
    E,
    F,
    G,
    H
}

enum BUTTON_PORTS {
    A,
    E,
    F,
    G,
    H
}

enum DIRECTIONS {
    //% block="ρολογιού"
    CW = 1023,
    //% block="αντίστροφη ρολογιού"
    CCW = 0
}

enum LED_STATES {
    //% block="άναψε"
    HIGH = 1,
    //% block="σβήσε"
    LOW = 0
}

//% weight=0 color=#3CB371 icon="\uf2db" block="Gigo"
namespace spacevoyager78_gigo {
    //% blockID="LEDrgb" block="LED θύρα %port %state"
    //% port.fieldEditor="gridpicker" port.fieldOptions.columns=4
    //% port.fieldOptions.tooltips="false" port.fieldOptions.width="300"
    //% port.defl=LED_PORTS.B
    export function LEDstate(port: LED_PORTS, state: LED_STATES): void {
        let ledPin = DigitalPin.P0;
        if (port == LED_PORTS.B) {
            ledPin = DigitalPin.P14;
        } else if (port == LED_PORTS.C) {
            ledPin = DigitalPin.P2;
        } else if (port == LED_PORTS.D) {
            ledPin = DigitalPin.P8;
        } else if (port == LED_PORTS.E) {
            ledPin = DigitalPin.P15;
        } else if (port == LED_PORTS.F) {
            ledPin = DigitalPin.P13;
        } else if (port == LED_PORTS.G) {
            ledPin = DigitalPin.P12;
        } else if (port == LED_PORTS.H) {
            ledPin = DigitalPin.P1;
        }
        pins.digitalWritePin(ledPin, state);
    }
    
    //% blockId="ButtonPullup" block="Κουμπί πίεσης θύρα %port ενεργοποίηση"
    //% port.fieldEditor="gridpicker" port.fieldOptions.columns=4
    //% port.fieldOptions.tooltips="false" port.fieldOptions.width="300"
    //% port.defl=BUTTON_PORTS.E
    export function ButtonActivate(port: BUTTON_PORTS): void {
        let buttonPin = DigitalPin.P0;
        if (port == BUTTON_PORTS.A) {
            buttonPin = DigitalPin.P20;
        } else if (port == BUTTON_PORTS.E) {
            buttonPin = DigitalPin.P16;
        } else if (port == BUTTON_PORTS.F) {
            buttonPin = DigitalPin.P14;
        } else if (port == BUTTON_PORTS.G) {
            buttonPin = DigitalPin.P2;
        } else if (port == BUTTON_PORTS.H) {
            buttonPin = DigitalPin.P8;
        }
        pins.setPull(buttonPin, PinPullMode.PullUp);
    }
    
    //% blockId="ButtonPressed" block="Κουμπί πίεσης θύρα %port είναι πατημένο"
    //% port.fieldEditor="gridpicker" port.fieldOptions.columns=4
    //% port.fieldOptions.tooltips="false" port.fieldOptions.width="300"
    //% port.defl=BUTTON_PORTS.E
    export function ButtonIsPressed(port: BUTTON_PORTS): boolean {
        let buttonPin = DigitalPin.P0;
        if (port == BUTTON_PORTS.A) {
            buttonPin = DigitalPin.P20;
        } else if (port == BUTTON_PORTS.E) {
            buttonPin = DigitalPin.P16;
        } else if (port == BUTTON_PORTS.F) {
            buttonPin = DigitalPin.P14;
        } else if (port == BUTTON_PORTS.G) {
            buttonPin = DigitalPin.P2;
        } else if (port == BUTTON_PORTS.H) {
            buttonPin = DigitalPin.P8;
        }
        return pins.digitalReadPin(buttonPin) == 0;
    }
    
    //% blockId="LineFollowed" block="Αισθητήρας γραμμής θύρα %pin πατάει γραμμή"
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=4
    //% pin.fieldOptions.tooltips="false" pin.fieldOptions.width="300"
    //% pin.defl=LINE_FOLLOWER_PINS.P1
    export function LineIsFollowed(pin: LINE_FOLLOWER_PINS): boolean {
        let linePin = AnalogPin.P0;
        if (pin == LINE_FOLLOWER_PINS.P1) {
            linePin = AnalogPin.P1;
        } else if (pin == LINE_FOLLOWER_PINS.P8) {
            linePin = AnalogPin.P8;
        } else if (pin == LINE_FOLLOWER_PINS.P12) {
            linePin = AnalogPin.P12;
        } else if (pin == LINE_FOLLOWER_PINS.P2) {
            linePin = AnalogPin.P2;
        }
        return pins.digitalReadPin(linePin) == 1;
    }
    
    //% blockId="ServoAngle" block="Σέρβο θύρα %pin γωνία %angle"
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=4
    //% pin.fieldOptions.tooltips="false" pin.fieldOptions.width="300"
    //% pin.defl=SERVO_PINS.P1
    //% angle.min=0 angle.max=180 angle.defl=180
    export function ServoState(pin: SERVO_PINS, angle: number): void {
        let servoPin = AnalogPin.P0;
        if (pin == SERVO_PINS.P1) {
            servoPin = AnalogPin.P1;
        } else if (pin == SERVO_PINS.P8) {
            servoPin = AnalogPin.P8;
        } else if (pin == SERVO_PINS.P12) {
            servoPin = AnalogPin.P12;
        } else if (pin == SERVO_PINS.P2) {
            servoPin = AnalogPin.P2;
        } else if (pin == SERVO_PINS.P13) {
            servoPin = AnalogPin.P13;
        } else if (pin == SERVO_PINS.P14) {
            servoPin = AnalogPin.P14;
        } else if (pin == SERVO_PINS.P15) {
            servoPin = AnalogPin.P15;
        } else if (pin == SERVO_PINS.P16) {
            servoPin = AnalogPin.P16;
        }
        pins.servoWritePin(servoPin, angle);
    }
    
    //% blockId="Motor" block="Κινητήρας θύρα %port φορά %direction ταχύτητα %speed"
    //% speed.min=0 speed.max=100 speed.defl=0
    //% port.fieldEditor="gridpicker" port.fieldOptions.columns=4
    //% port.fieldOptions.tooltips="false" port.fieldOptions.width="300"
    //% port.defl=MOTOR_PORTS.E
    export function Motor(port: MOTOR_PORTS, direction: DIRECTIONS, speed: number): void {
        let directionPin = AnalogPin.P0, speedPin = AnalogPin.P0;
        if (port == MOTOR_PORTS.E) {
            directionPin = AnalogPin.P15;
            speedPin = AnalogPin.P16;
        } else if (port == MOTOR_PORTS.F) {
            directionPin = AnalogPin.P13;
            speedPin = AnalogPin.P14;
        } else if (port == MOTOR_PORTS.G) {
            directionPin = AnalogPin.P12;
            speedPin = AnalogPin.P2;
        } else if (port == MOTOR_PORTS.H) {
            directionPin = AnalogPin.P1;
            speedPin = AnalogPin.P8;
        }
        pins.analogWritePin(directionPin, direction);
        pins.analogWritePin(speedPin, pins.map(speed, 0, 100, 0, 1023));       
    }
}
