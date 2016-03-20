'use strict';

/**
 * Allows creation of JQuery style Deferred objects, adapting just the better parts of native JS promises.
 * @method Deferred
 */
function Deferred() {
    let controller = {};

    let promise = new Promise(function(resolve, reject) {
        let fired = false;
        controller.resolve = function(data) {
            if (!fired) {
                fired = true;
                resolve(data);
            }
        };

        controller.reject = function(data) {
            if (!fired) {
                fired = true;
                reject(data);
            }
        };

        controller.assert = function(condition, message) {
            if (!condition) {
                controller.reject(message);
            }
        };

        controller.promise = function() {
            return promise;
        };

    });

    return controller;
}

module.exports = Deferred;
