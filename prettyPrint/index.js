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

const printRecordLiteral = (rl, indent) => {
    return indent + '[' + prettyPrint(rl.content, '') + ']';
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

const printSection = (sect, indent) => {
    let res = '';
    if (sect.maybeLiteralAttributes) {
	res += prettyPrint(sect.maybeLiteralAttributes, indent) + '\n';
    }
    res += 'section';
    if (sect.maybeName) {
	res += ' ' + sect.maybeName.literal;
    }

    res += ';\n';

    res += prettyPrint(sect.sectionMembers);

    return res;
};

const printSectionMember = (sm, indent) => {
    let res = '';
    if (sm.maybeLiteralAttributes) {
	res += prettyPrint(sm.maybeLiteralAttributes, indent) + '\n';
    }
    if (sm.maybeSharedConstant) {
	res += indent + 'shared ';
	indent = '';
    }
    res += prettyPrint(sm.namePairedExpression, indent);

    res += ';\n\n';

    return res;
};

const printFieldSelector = (fs, indent) => {
    return indent + '[' + prettyPrint(fs.content, '') + ']';
};

const printFunctionExpression = (fe, indent) => {
    let res = '';

    res += indent + prettyPrint(fe.parameters, '');

    if (fe.maybeFunctionReturnType) {
	res += ' ' + prettyPrint(fe.maybeFunctionReturnType);
    }

    res += ' =>\n';

    res += prettyPrint(fe.expression, fours);

    return res;
};

const printParameterList = (pl, indent) => {
    let res = '';

    res += '(';

    res += prettyPrint(pl.content, '');

    res += ')';

    return res;
};

const printParameter = (p, indent) => {
    let res = '';

    if (p.maybeOptionalConstant) {
	res += prettyPrint(p.maybeOptionalConstant, '') + ' ';
    }

    res += prettyPrint(p.name, '');

    if (p.maybeParameterType) {
	res += ' ' + prettyPrint(p.maybeParameterType, '');
    }

    return res;
};

const printEachExpression = (e, indent) => {
    return 'each ' + prettyPrint(e.paired, '');
};

const printAsNullablePrimitiveType = (anpt, indent) => {
    return indent + 'as ' + prettyPrint(anpt.paired, '');
};

const printParenthesizedExpression = (pe, indent) => {
    return indent + '(' + prettyPrint(pe.content, '') + ')';
};

const printEqualityExpression = (ee, indent) => {
    return indent + prettyPrint(ee.left, '') + ' = ' + prettyPrint(ee.right, '');
};

const printItemAccessExpression = (iae, indent) => {
    return indent + '{' + prettyPrint(iae.content, '') + '}';
};

const printArithmeticExpression = (ae, indent) => {
    return indent + prettyPrint(ae.left, '') + ' ' + ae.operator + ' ' +
	prettyPrint(ae.right, '');
};

const printTableType = (tt, indent) => {
    return indent + 'table ' + prettyPrint(tt.rowType, '');
};

const printFieldSpecificationList = (fsl, indent) => {
    let res = '';

    res += '[';

    res += prettyPrint(fsl.content, '\n' + fours);

    res += ']';

    return res;
};

const printFieldSpecification = (fs, indent) => {
    let res = '';

    res += indent;

    if (fs.maybeOptionalConstant) {
	res += prettyPrint(fs.maybeOptionalConstant, '') + ' ';
    }

    res += prettyPrint(fs.name, '');

    if (fs.maybeFieldTypeSpecification) {
	res += ' ' + prettyPrint(fs.maybeFieldTypeSpecification, '');
    }

    return res;
};

const printFieldTypeSpecification = (fts, indent) => {
    let res = '';

    res += indent;

    res += '= ';

    res += prettyPrint(fts.fieldType, '');

    return res;
};

const prettyPrint = (ast, indent) => {
    indent = indent || '';
    switch (ast.kind) {
    case 'ArithmeticExpression':
	return printArithmeticExpression(ast, indent);
    case 'ArrayWrapper':
	return printArrayWrapper(ast, indent);
    case 'AsNullablePrimitiveType':
	return printAsNullablePrimitiveType(ast, indent);
    case 'Constant':
	return printConstant(ast, indent);
    case 'Csv':
	return printCsv(ast, indent);
    case 'EachExpression':
	return printEachExpression(ast, indent);
    case 'EqualityExpression':
	return printEqualityExpression(ast, indent);
    case 'FieldSelector':
	return printFieldSelector(ast, indent);
    case 'FieldSpecificationList':
	return printFieldSpecificationList(ast, indent);
    case 'FieldSpecification':
	return printFieldSpecification(ast, indent);
    case 'FieldTypeSpecification':
	return printFieldTypeSpecification(ast, indent);
    case 'FunctionExpression':
	return printFunctionExpression(ast, indent);
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
    case 'ItemAccessExpression':
	return printItemAccessExpression(ast, indent);
    case 'LetExpression':
	return printLet(ast, indent);
    case 'ListExpression':
	return printListExpression(ast, indent);
    case 'LiteralExpression':
	return printLiteralExpression(ast, indent);
    case 'Parameter':
	return printParameter(ast, indent);
    case 'ParameterList':
	return printParameterList(ast, indent);
    case 'ParenthesizedExpression':
	return printParenthesizedExpression(ast, indent);
    case 'PrimitiveType':
	return printPrimitiveType(ast, indent);
    case 'RecordExpression':
	return printRecordExpression(ast, indent);
    case 'RecordLiteral':
	return printRecordLiteral(ast, indent);
    case 'RecursivePrimaryExpression':
	return printRecursivePrimaryExpression(ast, indent);
    case 'Section':
	return printSection(ast, indent);
    case 'SectionMember':
	return printSectionMember(ast, indent);
    case 'TableType':
	return printTableType(ast, indent);
    case 'TypePrimaryType':
	return printTypePrimaryType(ast, indent);
    }
    console.log(ast);
    return indent + 'pretty';
};

module.exports = prettyPrint;
