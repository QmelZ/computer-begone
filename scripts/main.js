const toast = require("libs/toast");
const tables = require("tables");

function begone(){
    let dialog = new BaseDialog("Computer Begone");
    dialog.addCloseButton();
    
    let others = destructive();
    dialog.buttons.button("[#f00]Destructive[]", () => {
        if(false){
            others.show();
            dialog.hide();
        }else{
            // toast(Icon.warning, "install js unblacklister [accent](QmelZ/js)[] to access the destructive features");
            toast(Icon.warning, "destructive features aren't available yet");
        }
    });
    
    tables.main(dialog.cont);
    
    return dialog;
}

function destructive(){
    let dialog = new BaseDialog("Computer Begone");
    dialog.addCloseButton();
    
    tables.destructive(dialog.cont);
    
    return dialog;
}

Events.on(ClientLoadEvent, () => {
    let dialog = begone();
    Vars.ui.menuGroup.children.get(0).fill(cons(t => {
        t.top().right();
        t.button(
            "Computer Begone",
            Icon.cancel,
            () => dialog.show()
        ).size(210, 64);
    }));
});
