# Giocoso

## Description
A midi and music library for deno. It is designed to be a quick simple way of creating midi files with chords and scales. It is still in development and is not yet feature complete.
Currently it serves as a base for other projects that require midi file generation or harmonic analysis backgrounds.

## Features
- Notes, durations, intervals, scales, chords, modes, keys, and chord progressions.
- Conversion between notes and midi notes. (Hz and midi note number)
- Overall midi support for track creation from harmonic data.


## Installation

Install deno from https://deno.land/


Download or clone this git repository.

```bash
git clone goosterv/giocose
cd giocoso
```

## Usage

```bash
deno run --allow-read --allow-write main.ts
OR 
deno run dev
```

This is an example of how you can use the library to create a midi file with a designated chord progression. it returns the file encode as a base64 string. This can be opened in a browser to download the file and listen to it, or written directly to a file using the deno file system.

```ts
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
```