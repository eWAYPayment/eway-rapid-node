'use strict';

/**
 * eWAY Rapid SDK base model.
 *
 * @module Rapid/Model
 * @see module:Rapid/Model
 */

var _ = require('lodash');

/**
 * Base Model
 *
 * @constructor
 * @params {Object} attributes
 * @params {Object} options
 * @classdesc
 */
function Model(attributes, options) {
  var _attributes = attributes || {};
  options = options || {};
  this.attributes = Object.create(null);
  this.set(_attributes, options);
  this.initialize.apply(this, arguments);
}

Model.prototype.initialize = function () {
};

/**
 * @method
 * @param {(Array|String)} attribute The name of the attribute to retrieve.
 * @param {*=} defaultValue
 * @returns {*} Attribute value.
 */
Model.prototype.get = function (attribute, defaultValue) {
  return _.get(this.attributes, attribute, defaultValue);
};

/**
 * @method
 * @param {string|Object} attribute Attribute name, or hash of attribute names and values.
 * @param {mixed=} value If a string was provided for `attribute`, the value to be set.
 * @returns {Model} This model.
 */
Model.prototype.set = function (attribute, value) {
  if (attribute == null) {
    return this;
  }
  var attributes;

  if (typeof attribute === 'object') {
    attributes = attribute;
  } else {
    (attributes = {})[attribute] = value;
  }

  for (var _attribute in attributes) {
    if (attributes.hasOwnProperty(_attribute)) {
      value = attributes[_attribute];

      this.attributes[_attribute] = value;
    }
  }
  return this;
};

/**
 * @method
 * @returns {Object} Serialized model as a plain object.
 */
Model.prototype.serialize = function () {
  return _.clone(this.attributes);
};

/**
 * @method
 * @private
 * @returns String representation of the object.
 */
Model.prototype.toString = function () {
  return '[Object Model]';
};

/**
 * @method
 * @param {(Array|String)} attribute The attribute to check.
 * @returns {boolean} True if `attribute` is set, otherwise null.
 */
Model.prototype.has = function (attribute) {
  return _.has(this.attributes, attribute);
};

/**
 * @method
 * @return {Array}
 */
Model.prototype.getErrors = function () {
  var errors = this.get('Errors');
  return errors ? errors.split(',') : [];
};

module.exports = Model;
