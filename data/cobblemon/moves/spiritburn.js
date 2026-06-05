({
    num: 18000,
    accuracy: 100,
    basePower: 80,
    category: "Special",
    name: "Spirit Burn",
    pp: 15,
    priority: 0,
    flags: { protect: 1, mirror: 1, metronome: 1 },
    onEffectiveness(typeMod, target, type) {
        if (type === 'Ghost' || type === 'Psychic') return 1;
    },
    target: "normal",
    type: "Fire",
    contestType: "Clever"
})
