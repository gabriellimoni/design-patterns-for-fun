import Subject from './core/Subject.js'

export default class ClockTimer extends Subject {
    hour = 0
    minute = 0
    second = 0
    milli = 0

    tick() {
        const date = new Date()
        this.hour = date.getHours()
        this.minute = date.getMinutes()
        this.second = date.getSeconds()
        this.milli = date.getMilliseconds()
        this.notify()
    }
}