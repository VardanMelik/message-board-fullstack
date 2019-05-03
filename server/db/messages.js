const db = require('./connection');
const joi = require('joi');

const schema = joi.object().keys({
    username: joi.string().alphanum().required(),
    subject: joi.string().required(),
    message: joi.string().max(500).required(),
    imageURL: joi.string().uri({
        scheme: [
            'git',
            /git\+https?/
        ]
    })
});


const messages = db.get('messages');

function getAllMessages() {
    return messages.find();
}

function insertMessage(message) {
    let result = joi.validate(message, schema);
    if (result.error == null) {
        message.created = new Date();
        return messages.insert(message);
    } else {
        return Promise.reject(result.error);
    }

};

module.exports = {
    insertMessage,
    getAllMessages
};