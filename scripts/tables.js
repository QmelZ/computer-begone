const begones = require("begones");

module.exports = {
    main(table){
        table.defaults().size(210, 64);
        
        table.button("computer begone v1", () => begones.v1());
        table.button("ramdustry", () => begones.ramdustry());
    },
    destructive(table){
        // soon:tm:
    }
};
