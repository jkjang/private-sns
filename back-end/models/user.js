const mongoose = require('mongoose')
const Schema = mongoose.Schema
const crypto = require('crypto')
const config = require('../config')

/** cb_user schema */
const User = new Schema(
    {
        _id: Schema.Types.ObjectId,
        email: String,
        password: String,
        admin: { type: Boolean, default: false }
    },
    { collection: 'cb_user' }
)

// create new User document
User.statics.create = function(username, password) {
    const encrypted = crypto
        .createHmac('sha1', config.secret)
        .update(password)
        .digest('base64')

    const user = new this({
        username,
        password: encrypted
    })

    // return the Promise
    return user.save()
}

// find one user by using username
User.statics.findOneByUsername = function(email) {
    return this.findOne({
        email
    }).exec()
}

// verify the password of the User documment
User.methods.verify = function(password) {
    const encrypted = crypto
        .createHmac('sha1', config.secret)
        .update(password)
        .digest('base64')
    console.log(this.password === encrypted)

    return this.password === encrypted
}

User.methods.assignAdmin = function() {
    this.admin = true
    return this.save()
}

module.exports = mongoose.model('User', User)
