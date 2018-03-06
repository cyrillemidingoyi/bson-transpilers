const ECMAScriptVisitor = require('../lib/ECMAScriptVisitor').ECMAScriptVisitor;

/**
 * This Visitor walks the AST generated by the transformers and produces code.
 */
function Visitor() {
  ECMAScriptVisitor.call(this);
  return this;
}

Visitor.prototype = Object.create(ECMAScriptVisitor.prototype);
Visitor.prototype.constructor = Visitor;

Visitor.prototype.visitProgram = function(ctx) {
  console.log(ctx.constructor);
  return this.visitChildren(ctx);
};

module.exports = Visitor;