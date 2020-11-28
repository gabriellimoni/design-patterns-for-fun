import Observer from './Observer.js'

export default class Subject {
    _observers = []
    
    attach (observer) {
        this._throwIfNotObservableObject(observer)
        this._observers.push(observer)
    }
    detach (observer) {
        this._throwIfNotObservableObject(observer)
        const remove_idx = this._observers.indexOf(observer)
        this._observers.splice(remove_idx, 1)
    }
    notify () {
        for (const ob of this._observers) {
            ob.update(this)
        }
    }

    _throwIfNotObservableObject(object) {
        if (!(object instanceof Observer)) throw new Error("Observer object required")
    }
}