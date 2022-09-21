type Stopwatch = {
    elapsed: Duration,
    paused: boolean,
};
type Time = {
    delta: Duration,
    last_update: Instant | null,
    delta_seconds_f64: number,
    delta_seconds: number,
    seconds_since_startup: number,
    time_since_startup: Duration,
    startup: Instant,
};
type Timer = {
    stopwatch: Stopwatch,
    duration: Duration,
    repeating: boolean,
    finished: boolean,
    times_finished_this_tick: number,
};

const Stopwatch: BevyType<Stopwatch> = { typeName: "bevy_time::stopwatch::Stopwatch" };
const Time: BevyType<Time> = { typeName: "bevy_time::time::Time" };
const Timer: BevyType<Timer> = { typeName: "bevy_time::timer::Timer" };
