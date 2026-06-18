({
    onTryHit(target, source, move) {
    if (target !== source && move.type === "Dark") {
            this.add("-immune", target, "[from] ability: Gloomight");
        return null;
    }
},
    flags: { breakable: 1 },
    name: "Gloomight",
        rating: 3,
    num: 1000
})