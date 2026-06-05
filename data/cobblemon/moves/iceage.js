({
    num: 17005,
    accuracy: 100,
    basePower: 120,
    category: "Special",
    name: "Ice Age",
    pp: 5,
    priority: 0,
    flags: { protect: 1, mirror: 1, metronome: 1 },
    self: {
        boosts: {
            spd: -1
        }
    },
    onHitField(target, source, move) {
        for (const pokemon of this.getAllActive()) {
            this.boost({ spd: -1 }, pokemon, source, move);
        }
    },
    target: "all",
    type: "Ice",
    contestType: "Beautiful"
})
