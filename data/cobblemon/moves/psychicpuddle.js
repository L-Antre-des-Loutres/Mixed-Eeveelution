({
    num: 17009,
    accuracy: 100,
    basePower: 80,
    category: "Special",
    name: "Psychic Puddle",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1, metronome: 1 },
    onHit(target, source, move) {
        if (this.field.isWeather(['raindance', 'primordialsea'])) {
            this.field.setTerrain('psychicterrain');
            this.field.terrainState.duration = 2;
        }
    },
    secondary: null,
    target: "normal",
    type: "Water",
    contestType: "Beautiful"
})
