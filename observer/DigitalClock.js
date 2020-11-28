import Observer from './core/Observer.js'

export default class DigitalClock extends Observer {
    constructor(element) {
        super()
        this._element = element
    }

    update(subject) {
        this.draw(subject)
    }
    draw(subject) {
        const hour = String(subject.hour).padStart(2, '0')
        const minute = String(subject.minute).padStart(2, '0')
        const second = String(subject.second).padStart(2, '0')
        const milli = String(subject.milli).padStart(3, '0')
        this._element.innerHTML = `${hour}:${minute}:${second}.${milli}`
    }
}