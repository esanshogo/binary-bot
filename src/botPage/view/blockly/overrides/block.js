Blockly.Block.prototype.getSiblings = function() {
    const siblings = [];
    ['getPreviousBlock', 'getNextBlock'].forEach(functionName => {
        let block = this[functionName]();
        while (block !== null) {
            siblings.push(block);
            block = block[functionName]();
        }
    });
    return siblings;
};

Blockly.Block.prototype.getChildByType = function(type) {
    return this.getDescendants().find(child => child.type === type);
};

Blockly.Block.prototype.getChildFieldValue = function(childType, childField) {
    const childBlock = this.getChildByType(childType);
    if (childBlock) {
        const value = childBlock.getFieldValue(childField);
        return value;
    }
    return null;
};

Blockly.Block.prototype.childValueToCode = function(childType, childField) {
    const childBlock = this.getChildByType(childType);
    return childBlock && Blockly.JavaScript.valueToCode(childBlock, childField, Blockly.JavaScript.ORDER_ATOMIC);
};
