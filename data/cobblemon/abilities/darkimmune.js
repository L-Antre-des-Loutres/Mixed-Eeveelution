({
    onTryHit(target, source, move) {
    if (target !== source && move.type === "Dark") {
            this.add("-immune", target, "[from] ability: Dark immune");
        return null;
    }
},
    flags: { breakable: 1 },
    name: "Dark immune",
        rating: 3,
    num: 1e3
})