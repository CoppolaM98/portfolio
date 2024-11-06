const { writeFile } = require('fs');

function saveJson(obj, path) {
    const stringified = JSON.stringify(obj ?? {}, null, 2)

    writeFile(path, stringified, function writeJSON(err) {
        if (err) {
            return console.error("Error writing file to " + path, err);
        }
        console.log('json file with processed data available at ' + path);
        return 0
    });
}

function mergePrefix(prefix, key) {
    if (prefix?.length) return prefix + "-" + key
    return key
}

function flatten(source, targetLevel, currentLevel, prefix) {
    if (currentLevel === targetLevel) return Object.keys(source).reduce((a, key) => {
        a[mergePrefix(prefix, key)] = source[key];
        return a
    }, {});
    return Object.keys(source).reduce((a, key) => {
        const newEntriesObj = flatten(source[key], targetLevel, (currentLevel ?? 0) + 1, mergePrefix(prefix, key))
        return {
            ...a,
            ...newEntriesObj,
        }
    }, {});
}

function isObject(obj) {
    return (typeof obj === "object" || Array.isArray(obj))
}

function flattenAll(source, prefix) {
    if (!isObject(source))
        return { [prefix]: source };

    return Object.keys(source).reduce((a, key) => {
        const newEntriesObj = flattenAll(source[key], mergePrefix(prefix, key))
        return {
            ...a,
            ...newEntriesObj,
        }
    }, {});
}

module.exports = { saveJson, flatten, flattenAll, isObject }