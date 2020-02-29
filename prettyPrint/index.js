const fours = '    ';

const printLet = (eLet, indent) => {
    return indent + 'let\n' +
	prettyPrint(eLet.variableList, indent + fours) +
	'\n' +
	indent + 'in' +
	'\n' +
	indent + prettyPrint(eLet.expression, fours);
};

const printIdentifierExpression = (eIdentifier, indent) => {
    return indent + eIdentifier.identifier.literal;
};

const printArrayWrapper = (arrayWrapper, indent) => {
    return arrayWrapper.elements.map(el => prettyPrint(el, indent)).join('\n');
};

const printCsv = (csv, indent) => {
    return prettyPrint(csv.node, indent) +
	(csv.maybeCommaConstant && csv.maybeCommaConstant.constantKind || '');
};

const printIdentifierPairedExpression = (ipe, indent) => {
    return indent + prettyPrint(ipe.key, '') + ' = ' +
	prettyPrint(ipe.value, '');
};

const printIdentifier = (identifier, indent) => {
    return indent + identifier.literal;
};

const prettyPrint = (ast, indent) => {
    indent = indent || '';
    switch (ast.kind) {
    case 'ArrayWrapper':
	return printArrayWrapper(ast, indent);
    case 'Csv':
	return printCsv(ast, indent);
    case 'Identifier':
	return printIdentifier(ast, indent);
    case 'IdentifierExpression':
	return printIdentifierExpression(ast, indent);
    case 'IdentifierPairedExpression':
	return printIdentifierPairedExpression(ast, indent);
    case 'LetExpression':
	return printLet(ast, indent);
    }
    console.log(ast);
    return indent + 'pretty';
};

module.exports = prettyPrint;
