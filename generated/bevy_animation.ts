type AnimationPlayer = {
    paused: boolean,
    repeat: boolean,
    speed: number,
    elapsed: number,
    animation_clip: HandleAnimationClip,
};

const AnimationPlayer: BevyType<AnimationPlayer> = { typeName: "bevy_animation::AnimationPlayer" };
