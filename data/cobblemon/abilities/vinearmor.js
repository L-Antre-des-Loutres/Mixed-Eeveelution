({
    onDamagingHitOrder: 1,
    onDamagingHit(damage, target, source, move) {
        if (this.checkMoveMakesContact(move, source, target, true)) {
            this.damage(source.baseMaxhp / 16, source, target);
            if (this.randomChance(1, 5)) {
                source.trySetStatus("psn", target);
            }
        }
    },
    flags: {},
    name: "Vine Armor",
    rating: 3,
    num: 1001
})