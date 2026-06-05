({
    num: 17008,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Aurora Chill",
    pp: 10,
    priority: 0,
    flags: { snatch: 1, metronome: 1 },
    onHitField(target, source, move) {
        if (this.field.isWeather(['hail', 'snow'])) {
            if (source.side.addSideCondition('auroraveil')) {
                this.add('-sidestart', source.side, 'Aurora Veil');
            } else {
                return false;
            }
        } else {
            this.field.setWeather('snow');
        }
    },
    secondary: null,
    target: "all",
    type: "Ice",
    contestType: "Beautiful"
})
