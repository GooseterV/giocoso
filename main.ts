import { Intervals, Chords,  CrunchierChords, Progression, Chord, ChordsInKey, ChordProgression } from "./src/chords.ts";
import * as helper from "./src/helper.ts";
import { Notes } from "./src/notes.ts";
import { Scales, Modes, Keys } from "./src/scales.ts";
import * as midi from "./src/midiworker.ts";

const mid = midi.createMidi(midi.createTrack({
	notes: helper.progressionToMidi(new ChordProgression({
		chords: [
			{ chord: ChordsInKey.ii9, duration: helper.Durations.whole },
			{ chord: ChordsInKey.V7, duration: helper.Durations.whole },
            { chord: ChordsInKey.IM7, duration: helper.Durations.whole },
		]
	}, Notes.E3))
}));

console.log(mid);