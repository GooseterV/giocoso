// deno-lint-ignore-file no-explicit-any
import MidiWriter from 'npm:midi-writer-js';
declare module 'npm:midi-writer-js' {
    export class Track {
        addEvent(event: any): void;
    }
    export class ProgramChangeEvent {
        constructor(data: any);
    }
    export class NoteEvent {
        constructor(data: any);
    }
    export class Writer {
        constructor(data: any);
        dataUri(): string;
    }
}



export type MidiCollection = {
    notes: [number[], string][]; // [[note1:num, duration1:str], [note2, duration2], ...]
}

export function createTrack(collection: MidiCollection): any {
    // create empty track
    const track = new MidiWriter.Track();
    // change the instrument to piano
    track.addEvent(new MidiWriter.ProgramChangeEvent({instrument : 1}));
    // add the notes to the track
    collection.notes.forEach((n: [number[], string]) => {
        const notes = n[0];
        const duration = n[1];
        track.addEvent(new MidiWriter.NoteEvent({pitch: notes, duration: duration}));
    });
    return track;
}

export function createMidi(track: typeof MidiWriter.Track): string {
    const write = new MidiWriter.Writer(track);
    return write.dataUri();
}