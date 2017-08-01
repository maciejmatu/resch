'use strict';

const bb = (des, a1, a2) => (
    Object.keys(des).reduce((res, key) => {
        res[key] = des[key](a1)(a2);
        return res;
    }, {})
);

module.exports = React => des => {

    const comps = bb(des, React, genForm);

    function genForm (config) {
        const schema = config.schema
            , path = config.path;

        const type = schema.type
            , widget = schema.widget;

        if (schema.enum !== undefined) {
            return comps.enum(config);
        }

        if (typeof type !== 'string') {
            throw new Error(
                'Unxpected type: `' + (typeof type) + '`' +
                ' of node: ' + JSON.stringify(path)
            );
        }
        const key = type + (widget ? ('_' + widget) : '');
        const fn = comps[key];
        if (typeof fn !== 'function') {
            throw new Error(
                'Unexpected type: `' + key + '`' +
                ' of node: ' + JSON.stringify(path)
            );
        }
        return fn(config);
    }

    return genForm;
};
