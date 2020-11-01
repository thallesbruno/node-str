'use strict';

const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');

exports.get = async(data) => {
    var res = await Customer.find({});
    return res;
};

exports.create = async(data) => {
    var customer = new Customer(data);
    await customer.save();
};

exports.delete = async(id) => {
    await Customer
        .findByIdAndRemove(id);
};

exports.authenticate = async(data) => {
    const res = await Customer.findOne({
        email: data.email,
        password: data.password
    });
    return res;
};