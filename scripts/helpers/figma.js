const { isObject } = require("./utils");

function parseFigmaObj(obj) {
    return Object.keys(obj).reduce((a, key) => {
        a[key] = obj[key]["$value"];
        if(typeof a[key] === "string" && a[key].startsWith("{"))
            a[key] = a[key].slice(1, -1)
        return a
    }, {});
}

function parseNestedFigmaObj(obj) {
    return Object.keys(obj).reduce((a, key) => {
        const child = obj[key]
        if (key === "$value") {
            if(typeof child === "string" && child.startsWith("{"))
                return child.slice(1, -1)
            return child;
        }
        else if (isObject(child)) {
            a[key] = parseNestedFigmaObj(child);
        }
        return a
    }, {});
}

module.exports = { parseFigmaObj, parseNestedFigmaObj }