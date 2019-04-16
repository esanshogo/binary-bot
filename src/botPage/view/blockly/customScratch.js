if (!Blockly.Variables.allUsedVarModels) {
    Blockly.Variables.allUsedVarModels = function(a) {
        let b = a.getAllBlocks(!1);
        a = Object.create(null);
        for (let c = 0; c < b.length; c++) {
            const d = b[c].getVarModels();
            if (d) {
                for (let e = 0; e < d.length; e++) {
                    const f = d[e];
                    f.getId() && (a[f.getId()] = f);
                }
            }
        }
        b = [];
        for (const g in a) b.push(a[g]);
        return b;
    };
}
