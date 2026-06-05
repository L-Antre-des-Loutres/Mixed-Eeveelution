({
    onWeather(target, source, effect) {
        if (target.hasItem("utilityumbrella"))
            return;
        if (effect.id === "sunnyday" || effect.id === "desolateland") {
            this.heal(target.baseMaxhp / 16, target, target);
        }
    },
    flags: {},
    name: "Solar Heal",
    rating: 3,
    num: 1002
})