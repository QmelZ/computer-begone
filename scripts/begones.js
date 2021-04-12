importPackage(Packages.arc.util.async)

module.exports = {
    v1(){
        // spam opens browser windows, causing h behavior (also those are links to meme songs on youtube)
        Vars.ui.loadfrag.show();
        Timer.schedule(() => {
            Core.app.openURI("https://youtu.be/dQw4w9WgXcQ");
            Core.app.openURI("https://youtu.be/L_jWHffIx5E");
            Core.app.openURI("https://youtu.be/gy1B3agGNxw");
            Core.app.openURI("https://youtu.be/y6120QOlsfU");
            Core.app.openURI("https://youtu.be/iLBBRuVDOo4");
            Core.app.openURI("https://youtu.be/hH9M-m3WD0g");
        }, 0, 0);
    },
    
    ramdustry(){
        // multithreadedly load a lot of music, is supposed to use up ram but uses up cpu instead
        Threads.daemon("ramdustry", () => {
            let ram = [];
            while(1){
                ram.push(loadMusic("h"));
            }
        });
    }
};
