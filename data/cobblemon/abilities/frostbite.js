({
    onSourceDamagingHit(damage, target, source, move) {
    if (this.randomChance(1, 10)) {
        target.trySetStatus("frz", source);
    }
},
    flags: {},
    name: "Frostbite",
        rating: 4,
    num: 1005
})