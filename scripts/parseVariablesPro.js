const { saveJson, flattenAll } = require('./helpers/utils');
const { parseFigmaObj, parseNestedFigmaObj } = require('./helpers/figma');

// this nodejs script parses styles in a json as exported from Variables Pro Figma plugin

function processPrimitives(fileContent) {
  const primitives = fileContent[0].Primitives.modes

  const modePrimitives = primitives["Mode 1"]

  return Object.keys(modePrimitives).reduce((a, key) => {
    const parsed = parseNestedFigmaObj(modePrimitives[key])
    a[key] = flattenAll(parsed)
    return a
  }, {})
}

function processTokens(fileContent) {
  const tokens = fileContent[1].Tokens.modes

  return Object.keys(tokens).reduce((a, mode) => {
    const modeTokens = tokens[mode]
    const parsed = parseNestedFigmaObj(modeTokens)
    const parsedFlat = flattenAll(parsed);
    a[mode] = parsedFlat
    return a
  }, {});
}

function processTypography(fileContent) {
  const typography = fileContent[2].Typography.modes

  return Object.keys(typography).reduce((a, mode) => {
    const modeTypography = typography[mode].font
    a = {
      fontFamily: { ...a.fontFamily, [mode]: parseFigmaObj(modeTypography.family) },
      fontWeight: { ...a.fontWeight, [mode]: parseFigmaObj(modeTypography.weight) },
      fontSize: { ...a.fontSize, [mode]: parseFigmaObj(modeTypography.size) },
      lineHeight: { ...a.lineHeight, [mode]: parseFigmaObj(modeTypography["line-height"]) },
    }
    return a;
  }, {})
}

function processComponents(fileContent) {
  const components = fileContent[3]?.Components.modes
  if (!components) return null
  return Object.keys(components).reduce((a, mode) => {
    const modeComponents = components[mode]
    const parsed = parseNestedFigmaObj(modeComponents)
    const parsedFlat = flattenAll(parsed);
    a[mode] = parsedFlat
    return a
  }, {});
}

const args = process.argv.slice(2);
if (args.length == 0) return console.error("missing source json path")

const figmaJsonPath = args[0];
let exportJsonPath = './src/styles'
if (args[1])
  exportJsonPath = args[1]
else console.warn("using default export path")

const fileContent = require(figmaJsonPath);
console.log('Readed figma json content from ' + figmaJsonPath);

saveJson(processPrimitives(fileContent), exportJsonPath + '/primitives.json')
saveJson(processTokens(fileContent), exportJsonPath + '/tokens.json')
saveJson(processTypography(fileContent), exportJsonPath + '/typography.json')
saveJson(processComponents(fileContent), exportJsonPath + '/components.json')
