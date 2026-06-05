({
    num: 17006,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Floral Shield",
    pp: 10,
    priority: 0,
    flags: { snatch: 1, metronome: 1 },
    onHit(pokemon) {
        this.boost({ def: 1 }, pokemon);
        if (this.field.isTerrain('grassyterrain')) {
            this.heal(pokemon.maxhp / 2, pokemon);
        }
    },
    secondary: null,
    target: "self",
    type: "Grass",
    contestType: "Beautiful"
})
