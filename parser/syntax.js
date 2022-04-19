// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "input", "symbols": ["expression"]},
    {"name": "input", "symbols": ["expression", "_", "logicGate", "_", "expression"]},
    {"name": "input", "symbols": ["input", "_", "logicGate", "_", "input"]},
    {"name": "expression", "symbols": ["expressionOne"]},
    {"name": "expression", "symbols": ["expressionTwo"]},
    {"name": "expression", "symbols": ["expressionThree"]},
    {"name": "expressionOne", "symbols": ["categoryOne", "_", "operator", "_", "langaugesAvailable"]},
    {"name": "expressionTwo", "symbols": ["categoryTwo", "_", "operator", "_", "categoryAvailable"]},
    {"name": "expressionThree", "symbols": ["categoryThree", "_", "operator", "_", "ratingOptionsAvailable"]},
    {"name": "_", "symbols": [{"literal":" "}]},
    {"name": "operator", "symbols": [{"literal":"="}]},
    {"name": "operator$string$1", "symbols": [{"literal":"!"}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "operator", "symbols": ["operator$string$1"]},
    {"name": "logicGate$subexpression$1", "symbols": [/[oO]/, /[rR]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "logicGate", "symbols": ["logicGate$subexpression$1"]},
    {"name": "logicGate$subexpression$2", "symbols": [/[aA]/, /[nN]/, /[dD]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "logicGate", "symbols": ["logicGate$subexpression$2"]},
    {"name": "categoryOne$subexpression$1", "symbols": [/[lL]/, /[aA]/, /[nN]/, /[gG]/, /[uU]/, /[aA]/, /[gG]/, /[eE]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "categoryOne", "symbols": ["categoryOne$subexpression$1"]},
    {"name": "categoryTwo$subexpression$1", "symbols": [/[cC]/, /[aA]/, /[tT]/, /[eE]/, /[gG]/, /[oO]/, /[rR]/, /[yY]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "categoryTwo", "symbols": ["categoryTwo$subexpression$1"]},
    {"name": "categoryThree$subexpression$1", "symbols": [/[rR]/, /[aA]/, /[tT]/, /[iI]/, /[nN]/, /[gG]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "categoryThree", "symbols": ["categoryThree$subexpression$1"]},
    {"name": "langaugesAvailable$subexpression$1", "symbols": [/[tT]/, /[aA]/, /[mM]/, /[iI]/, /[lL]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "langaugesAvailable", "symbols": ["langaugesAvailable$subexpression$1"]},
    {"name": "langaugesAvailable$subexpression$2", "symbols": [/[eE]/, /[nN]/, /[gG]/, /[lL]/, /[iI]/, /[sS]/, /[hH]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "langaugesAvailable", "symbols": ["langaugesAvailable$subexpression$2"]},
    {"name": "langaugesAvailable$subexpression$3", "symbols": [/[tT]/, /[eE]/, /[lL]/, /[uU]/, /[gG]/, /[uU]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "langaugesAvailable", "symbols": ["langaugesAvailable$subexpression$3"]},
    {"name": "langaugesAvailable$subexpression$4", "symbols": [/[kK]/, /[aA]/, /[nN]/, /[nN]/, /[aA]/, /[dD]/, /[aA]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "langaugesAvailable", "symbols": ["langaugesAvailable$subexpression$4"]},
    {"name": "langaugesAvailable$subexpression$5", "symbols": [{"literal":"\""}, /[hH]/, /[iI]/, /[nN]/, /[dD]/, /[iI]/, {"literal":"\""}], "postprocess": function(d) {return d.join(""); }},
    {"name": "langaugesAvailable", "symbols": ["langaugesAvailable$subexpression$5"]},
    {"name": "categoryAvailable$subexpression$1", "symbols": [/[cC]/, /[oO]/, /[mM]/, /[eE]/, /[dD]/, /[yY]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "categoryAvailable", "symbols": ["categoryAvailable$subexpression$1"]},
    {"name": "categoryAvailable$subexpression$2", "symbols": [/[hH]/, /[oO]/, /[rR]/, /[rR]/, /[oO]/, /[rR]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "categoryAvailable", "symbols": ["categoryAvailable$subexpression$2"]},
    {"name": "categoryAvailable$subexpression$3", "symbols": [/[fF]/, /[aA]/, /[mM]/, /[iI]/, /[lL]/, /[yY]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "categoryAvailable", "symbols": ["categoryAvailable$subexpression$3"]},
    {"name": "categoryAvailable$subexpression$4", "symbols": [/[tT]/, /[hH]/, /[rR]/, /[iI]/, /[lL]/, /[lL]/, /[eE]/, /[rR]/, /[sS]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "categoryAvailable", "symbols": ["categoryAvailable$subexpression$4"]},
    {"name": "categoryAvailable$subexpression$5", "symbols": [{"literal":"\""}, /[cC]/, /[aA]/, /[rR]/, /[tT]/, /[oO]/, /[oO]/, /[nN]/, /[sS]/, {"literal":"\""}], "postprocess": function(d) {return d.join(""); }},
    {"name": "categoryAvailable", "symbols": ["categoryAvailable$subexpression$5"]},
    {"name": "ratingOptionsAvailable$subexpression$1", "symbols": [{"literal":"\""}, {"literal":">"}, {"literal":"8"}, {"literal":"\""}], "postprocess": function(d) {return d.join(""); }},
    {"name": "ratingOptionsAvailable", "symbols": ["ratingOptionsAvailable$subexpression$1"]},
    {"name": "ratingOptionsAvailable$subexpression$2", "symbols": [{"literal":"\""}, {"literal":">"}, {"literal":"9"}, {"literal":"\""}], "postprocess": function(d) {return d.join(""); }},
    {"name": "ratingOptionsAvailable", "symbols": ["ratingOptionsAvailable$subexpression$2"]},
    {"name": "ratingOptionsAvailable$subexpression$3", "symbols": [{"literal":"\""}, {"literal":">"}, {"literal":"5"}, {"literal":"\""}], "postprocess": function(d) {return d.join(""); }},
    {"name": "ratingOptionsAvailable", "symbols": ["ratingOptionsAvailable$subexpression$3"]},
    {"name": "ratingOptionsAvailable$subexpression$4", "symbols": [{"literal":"\""}, {"literal":">"}, {"literal":"3"}, {"literal":"\""}], "postprocess": function(d) {return d.join(""); }},
    {"name": "ratingOptionsAvailable", "symbols": ["ratingOptionsAvailable$subexpression$4"]},
    {"name": "ratingOptionsAvailable$subexpression$5", "symbols": [{"literal":"\""}, {"literal":"="}, {"literal":"0"}, {"literal":"\""}], "postprocess": function(d) {return d.join(""); }},
    {"name": "ratingOptionsAvailable", "symbols": ["ratingOptionsAvailable$subexpression$5"]}
]
  , ParserStart: "input"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
