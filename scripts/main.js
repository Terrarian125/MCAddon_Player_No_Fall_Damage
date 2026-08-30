import { world } from "@minecraft/server";

world.beforeEvents.entityHurt.subscribe((event) => {
    if (
        event.hurtEntity.typeId === "minecraft:player" &&
        event.damageSource.cause === "fall"
    ) {
        event.cancel = true;
    }
});
