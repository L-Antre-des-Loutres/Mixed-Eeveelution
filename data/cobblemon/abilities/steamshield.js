({
    onEffectiveness(typeMod, target, type, move) {
    const fireWeaknesses = ['Ground', 'Rock', 'Water'];

    if (move && fireWeaknesses.includes(move.type)) {
        if (typeMod > 0) {
            return typeMod - 1;
        }
    }
},
    flags: {},
    name: "Steam Shield",
        rating: 3,
    num: 1004,
})