import Subject from './Subject.js'

export default class Observer {
    update(subject) {
        this._throwsIfNotSubject(subject)
    }

    _throwsIfNotSubject(object) {
        if (!(object instanceof Subject)) throw new Error("Subject object required")
    }
}