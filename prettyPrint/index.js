const fours = '    ';

const printLet = (eLet, indent) => {
    return indent + 'let' +
	prettyPrint(eLet.variableList, '\n' + indent + fours) +
	'\n' +
	indent + 'in' +
	'\n' +
	indent + prettyPrint(eLet.expression, fours);
};

const printIdentifierExpression = (eIdentifier, indent) => {
    return indent + eIdentifier.identifier.literal;
};

const printArrayWrapper = (arrayWrapper, indent) => {
    return arrayWrapper.elements.map(el => prettyPrint(el, indent)).join('');
};

const printCsv = (csv, indent) => {
    return prettyPrint(csv.node, indent) +
	(csv.maybeCommaConstant && ', ' || '');
};

const printIdentifierPairedExpression = (ipe, indent) => {
    return indent + prettyPrint(ipe.key, '') + ' = ' +
	prettyPrint(ipe.value, '');
};

const printGeneralizedIdentifierPairedExpression = (gipe, indent) => {
    return indent + prettyPrint(gipe.key, '') + ' = ' +
	prettyPrint(gipe.value, '');
};

const printIdentifier = (identifier, indent) => {
    return indent + identifier.literal;
};

const printGeneralizedIdentifier = (gid, indent) => {
    return indent + gid.literal;
};

const printRecursivePrimaryExpression = (rpe, indent) => {
    return prettyPrint(rpe.head, indent) + prettyPrint(rpe.recursiveExpressions, '');
};

const printInvokeExpression = (ie, indent) => {
    return indent + '(' + prettyPrint(ie.content, '') + ')';
};

const printLiteralExpression = (le, indent) => {
    return indent + le.literal;
};

const printRecordExpression = (re, indent) => {
    return indent + '[' + prettyPrint(re.content, '') + ']';
};

const printListExpression = (le, indent) => {
    return indent + '{' + prettyPrint(le.content, '') + '}';
};

const printTypePrimaryType = (tpt, indent) => {
    return indent + 'type ' + prettyPrint(tpt.paired, '');
};

const printPrimitiveType = (pt, indent) => {
    return indent + prettyPrint(pt.primitiveType, '');
};

const printConstant = (c, indent) => {
    return indent + c.constantKind;
};

const prettyPrint = (ast, indent) => {
    indent = indent || '';
    switch (ast.kind) {
    case 'ArrayWrapper':
	return printArrayWrapper(ast, indent);
    case 'Constant':
	return printConstant(ast, indent);
    case 'Csv':
	return printCsv(ast, indent);
    case 'GeneralizedIdentifier':
	return printGeneralizedIdentifier(ast, indent);
    case 'GeneralizedIdentifierPairedExpression':
	return printGeneralizedIdentifierPairedExpression(ast, indent);
    case 'Identifier':
	return printIdentifier(ast, indent);
    case 'IdentifierExpression':
	return printIdentifierExpression(ast, indent);
    case 'IdentifierPairedExpression':
	return printIdentifierPairedExpression(ast, indent);
    case 'InvokeExpression':
	return printInvokeExpression(ast, indent);
    case 'LetExpression':
	return printLet(ast, indent);
    case 'ListExpression':
	return printListExpression(ast, indent);
    case 'LiteralExpression':
	return printLiteralExpression(ast, indent);
    case 'PrimitiveType':
	return printPrimitiveType(ast, indent);
    case 'RecordExpression':
	return printRecordExpression(ast, indent);
    case 'RecursivePrimaryExpression':
	return printRecursivePrimaryExpression(ast, indent);
    case 'TypePrimaryType':
	return printTypePrimaryType(ast, indent);
    }
    console.log(ast);
    return indent + 'pretty';
};

module.exports = prettyPrint;
