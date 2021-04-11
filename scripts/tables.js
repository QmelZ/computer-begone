const begones = require("begones");

module.exports = {
    main(table){
        table.defaults().size(210, 64);
        
        table.button("Computer Begone v1", () => begones.v1());
    },
    destructive(table){
        
    }
};
