import { Chord, ChordProgression } from "./chords.ts";
import { Notes } from "./notes.ts";

export function transposeHz(freq: number, semitones: number): number {
	// divides the octave (a 2x increase) into 12 equal parts
	// raise that number to the semitones number because we want to increase it
	// by that many semitones (or decrease if negative)
	const scalar : number = ( 2 ** (1/12) ) ** semitones;
	// multiply the frequency by the scalar and return
	return freq * scalar;
}

// formula for hz to midi:
// midi = 69 + 12 * log2(freq/440)
export function hzToMidi(freq: number): number {
	// find relative scalar to 440Hz 
	// (should be (2^(1/12))^(n-69)) = 2^(n-69)/12
	// where n is the number of semitones away from 440Hz 
	// (440Hz is A4, so n = 0)
	const scalar : number = freq / 440;
	// find the exponent (n/12)
	const exponent : number = Math.log2(scalar);
	// multiply exponent by 12 to get the number of semitones
	// away from A4 (69)
	// now add 69  to get the midi note number 
	// (we add 69 to remove relativity to A4)
	return 69 + 12 * exponent;
}

// formula for midi to hz:
// freq = 440 * 2^((n-69)/12)
export function midiToHz(midi: number): number {
	// find the number of semitones away from A4
	// (69 is the midi number of A4)
	const semitones : number = midi - 69;
	// find the scalar to multiply 440Hz by
	// (2^(n/12))
	const scalar : number = 2 ** (semitones / 12);
	// multiply 440Hz by the scalar and return
	return 440 * scalar;
}

// inputs a root note (midi number) and an array of intervals
// returns an array of midi numbers for the chord by mapping each interval to the root
// works for scales and chords due to them both being collections of midi
export function chordToMidi(chord:Chord): Notes[] {
    return chord.notes.map((interval) => chord.root + interval);
}


export const enum Durations {
	whole = "1",
	half = "2",
	dottedHalf = "2d",
    doubleDottedHalf = "2dd",
	quarter = "4",
    quarterTriplet = "4t",
	dottedQuarter = "4d",
    doubleDottedQuarter = "4dd",
	eighth = "8",
	dottedEighth = "8d",
    doubleDottedEighth = "8dd",
    eighthTriplet = "8t",
	sixteenth = "16",
    sixteenthTriplet = "16t",
	thirtySecond = "32",
	dottedThirtySecond = "32d",
	sixtyFourth = "64",
    dottedSixtyFourth = "64d",
}

export function progressionToMidi(cprogression:ChordProgression): [Notes[], Durations][] {
    for (let i = 0; i<7; i++ ) console.log(cprogression.progression.chords[i].chord)
    return cprogression.progression.chords.map((chord) => [chordToMidi(chord.chord), chord.duration]);
}

