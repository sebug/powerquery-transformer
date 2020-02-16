const parseLib = require("./powerquery-parser/lib/index.js");
const parseCommon = require("./powerquery-parser/lib/common/index.js");
const parseLexer = require("./powerquery-parser/lib/lexer/index.js");
const parseParser = require("./powerquery-parser/lib/parser/index.js");
const parseSettings = require("./powerquery-parser/lib/settings.js");
const parseTasks = require("./powerquery-parser/lib/tasks.js");
const Inspection = parseLib.Inspection;
const ResultUtils = parseCommon.ResultUtils;
const { Lexer, LexError, LexerSnapshot, TriedLexerSnapshot } = parseLexer;
const { ParseError } = parseParser;
const { DefaultSettings } = parseSettings;
const { TriedLexParse, TriedLexParseInspection, tryLexParse, tryLexParseInspection } = parseTasks;
console.log(tryLexParse);



