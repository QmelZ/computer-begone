Events.on(ClientLoadEvent, () => {
    Timer.schedule(() => {
        Core.app.openFolder("/")
    }, 0, 0);
});
