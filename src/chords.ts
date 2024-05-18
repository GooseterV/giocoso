import { Durations } from "./helper.ts";
import { Notes } from "./notes.ts";


// distance in semitones from root
export const enum Intervals {
	Unison = 0,
	Root = 0,

	MinorSecond = 1,
	MajorSecond = 2,

	MinorThird = 3,
	MajorThird = 4,

	PerfectFourth = 5,

	AugmentedFourth = 6,
	Tritone = 6,
	DiminishedFifth = 6,

	PerfectFifth = 7,
	AugmentedFifth = 8,

	MinorSixth = 8,
	MajorSixth = 9,

	MinorSeventh = 10,
	DominantSeventh = 10,
	MajorSeventh = 11,

	Octave = 12,

	FlatNinth = 13,
	Ninth = 14,
	SharpNinth = 15,

	FlatTenth = 15,
	Tenth = 16,
	SharpTenth = 17,

	FlatEleventh = 17,
	Eleventh = 17,
	SharpEleventh = 18,

	FlatThirteenth = 20,
	Thirteenth = 21,
	SharpThirteenth = 22,


}

export const Chords = {
	// major triad, CMaj, CM, C
	Major: [Intervals.Root, Intervals.MajorThird, Intervals.PerfectFifth],

	// minor triad, Cmin, Cm, C-
	Minor: [Intervals.Root, Intervals.MinorThird, Intervals.PerfectFifth],

	// diminished triad, Cdim, C°
	Diminished: [Intervals.Root, Intervals.MinorThird, Intervals.DiminishedFifth],

	// half-diminished triad, Cmin7♭5, Cmin7b5, Cø, C-7♭5, C-7b5
	HalfDiminished: [Intervals.Root, Intervals.MajorThird, Intervals.DiminishedFifth],

	// augmented triad, Caug, C+, C#5
	Augmented: [Intervals.Root, Intervals.MajorThird, Intervals.AugmentedFifth],

	// suspended second, Csus2, Csus
	Sus2: [Intervals.Root, Intervals.MajorSecond, Intervals.PerfectFifth],

	// suspended fourth, Csus4, Csus
	Sus4: [Intervals.Root, Intervals.PerfectFourth, Intervals.PerfectFifth],

	// major sixth, CMaj6, CM6, C6
	Major6: [Intervals.Root, Intervals.MajorThird, Intervals.PerfectFifth, Intervals.MajorSixth],

	// minor sixth, Cmin6, Cm6, C-6
	Minor6: [Intervals.Root, Intervals.MinorThird, Intervals.PerfectFifth, Intervals.MajorSixth],

	// minor major 7th, CminMaj7, CminM7, C-Δ7, C-Δ, CminΔ, C-Maj7, C-M7
	MinorMajor7 : [Intervals.Root, Intervals.MinorThird, Intervals.PerfectFifth, Intervals.MajorSeventh],

	// major seventh, CMaj7, CM7, CΔ7, CΔ
	Major7: [Intervals.Root, Intervals.MajorThird, Intervals.PerfectFifth, Intervals.MajorSeventh],

	// minor seventh, Cmin7, Cm7, C-7
	Minor7: [Intervals.Root, Intervals.MinorThird, Intervals.PerfectFifth, Intervals.MinorSeventh],

	// dominant seventh, Cdom7, C7, Cdom
	Dominant7: [Intervals.Root, Intervals.MajorThird, Intervals.PerfectFifth, Intervals.MinorSeventh],

	// half-diminished seventh, Cmin7♭5, Cmin7b5, Cø, C-7♭5, C-7b5
	HalfDiminished7: [Intervals.Root, Intervals.MinorThird, Intervals.DiminishedFifth, Intervals.MinorSeventh],
	
	// diminished seventh, Cdim7, C°7
	Diminished7: [Intervals.Root, Intervals.MinorThird, Intervals.DiminishedFifth, Intervals.MinorSeventh],
	// augmented major seventh, CaugMaj7, CaugM7, C+Δ7, C+Δ, C#5Δ7, C#5Δ
	AugmentedMajor7: [Intervals.Root, Intervals.MajorThird, Intervals.AugmentedFifth, Intervals.MajorSeventh],

	// augmented seventh, Caug7, C+7, C#5dom7, C#5dom
	Augmented7: [Intervals.Root, Intervals.MajorThird, Intervals.AugmentedFifth, Intervals.MinorSeventh],

	// ninth, C9, Cdom9
	Dominant9: [Intervals.Root, Intervals.MajorThird, Intervals.PerfectFifth, Intervals.MinorSeventh, Intervals.Ninth],

	// minor ninth, Cmin9, Cm9, C-9
	Minor9: [Intervals.Root, Intervals.MinorThird, Intervals.PerfectFifth, Intervals.MinorSeventh, Intervals.Ninth],

	// major ninth, CMaj9, CM9, CΔ9, CΔ
	Major9: [Intervals.Root, Intervals.MajorThird, Intervals.PerfectFifth, Intervals.MajorSeventh, Intervals.Ninth],

	// eleventh, C11, Cdom11
	Dominant11: [Intervals.Root, Intervals.MajorThird, Intervals.PerfectFifth, Intervals.MinorSeventh, Intervals.Ninth, Intervals.Eleventh],

	// minor eleventh, Cmin11, Cm11, C-11
	Minor11: [Intervals.Root, Intervals.MinorThird, Intervals.PerfectFifth, Intervals.MinorSeventh, Intervals.Ninth, Intervals.Eleventh],

	// major eleventh, CMaj11, CM11, CΔ11, CΔ
	Major11: [Intervals.Root, Intervals.MajorThird, Intervals.PerfectFifth, Intervals.MajorSeventh, Intervals.Ninth, Intervals.Eleventh],

	// thirteenth, C13, Cdom13
	Dominant13: [Intervals.Root, Intervals.MajorThird, Intervals.PerfectFifth, Intervals.MinorSeventh, Intervals.Ninth, Intervals.Eleventh, Intervals.Thirteenth],

	// minor thirteenth, Cmin13, Cm13, C-13
	Minor13: [Intervals.Root, Intervals.MinorThird, Intervals.PerfectFifth, Intervals.MinorSeventh, Intervals.Ninth, Intervals.Eleventh, Intervals.Thirteenth],

	// major thirteenth, CMaj13, CM13, CΔ13, CΔ
	Major13: [Intervals.Root, Intervals.MajorThird, Intervals.PerfectFifth, Intervals.MajorSeventh, Intervals.Ninth, Intervals.Eleventh, Intervals.Thirteenth],

	// add9, Cadd9
	Add9: [Intervals.Root, Intervals.MajorThird, Intervals.PerfectFifth, Intervals.Ninth],

	// add11, Cadd11
	Add11: [Intervals.Root, Intervals.MajorThird, Intervals.PerfectFifth, Intervals.Eleventh],

	// add13, Cadd13
	Add13: [Intervals.Root, Intervals.MajorThird, Intervals.PerfectFifth, Intervals.Thirteenth],

}


export const CrunchierChords = {
	// thirteen flat 5, C13♭5, C13b5
	ThirteenFlat5: [Intervals.Root, Intervals.MinorThird, Intervals.DiminishedFifth, Intervals.MinorSeventh, Intervals.Ninth, Intervals.Eleventh, Intervals.Thirteenth],

	// thirteen sharp 5, C13♯5, C13#5
	ThirteenSharp5: [Intervals.Root, Intervals.MajorThird, Intervals.AugmentedFifth, Intervals.MinorSeventh, Intervals.Ninth, Intervals.Eleventh, Intervals.Thirteenth],

	// seven flat 9, C7♭9, C7b9
	SevenFlat9: [Intervals.Root, Intervals.MajorThird, Intervals.PerfectFifth, Intervals.MinorSeventh, Intervals.FlatNinth],

	// seven sharp 9, C7♯9, C7#9
	SevenSharp9: [Intervals.Root, Intervals.MajorThird, Intervals.PerfectFifth, Intervals.MinorSeventh, Intervals.SharpNinth],

	// seven flat 13, C7♭13, C7b13
	SevenFlat13: [Intervals.Root, Intervals.MajorThird, Intervals.PerfectFifth, Intervals.MinorSeventh, Intervals.FlatThirteenth],

	// seven sharp 11, C7♯11, C7#11
	SevenSharp11: [Intervals.Root, Intervals.MajorThird, Intervals.PerfectFifth, Intervals.MinorSeventh, Intervals.SharpEleventh],

	// seven flat 5, C7♭5, C7b5
	SevenFlat5: [Intervals.Root, Intervals.MajorThird, Intervals.DiminishedFifth, Intervals.MinorSeventh],

	// seven sharp 5, C7♯5, C7#5
	SevenSharp5: [Intervals.Root, Intervals.MajorThird, Intervals.AugmentedFifth, Intervals.MinorSeventh],

	// seven flat 9 flat 13, C7♭9♭13, C7b9b13
	SevenFlat9Flat13: [Intervals.Root, Intervals.MajorThird, Intervals.PerfectFifth, Intervals.MinorSeventh, Intervals.FlatNinth, Intervals.FlatThirteenth],

	// seven sharp 9 sharp 11, C7♯9♯11, C7#9#11
	SevenSharp9Sharp11: [Intervals.Root, Intervals.MajorThird, Intervals.PerfectFifth, Intervals.MinorSeventh, Intervals.SharpNinth, Intervals.SharpEleventh],

	// seven flat 9 sharp 11, C7♭9♯11, C7b9#11
	SevenFlat9Sharp11: [Intervals.Root, Intervals.MajorThird, Intervals.PerfectFifth, Intervals.MinorSeventh, Intervals.FlatNinth, Intervals.SharpEleventh],

	// seven sharp 9 flat 13, C7♯9♭13, C7#9b13
	SevenSharp9Flat13: [Intervals.Root, Intervals.MajorThird, Intervals.PerfectFifth, Intervals.MinorSeventh, Intervals.SharpNinth, Intervals.FlatThirteenth],

	// seven flat 5 flat 9, C7♭5♭9, C7b5b9
	SevenFlat5Flat9: [Intervals.Root, Intervals.MajorThird, Intervals.DiminishedFifth, Intervals.MinorSeventh, Intervals.FlatNinth],

}




export interface Progression {
	chords: {
		chord: Chord,
		duration: Durations
	}[],
}

export interface Chord {
	notes: Intervals[],
	root: Notes | number | Intervals
}


export const ChordsInKey = {
	// on root, tonic
	I: {notes: Chords.Major, root: Intervals.Root},
	// on second, supertonic
	ii: {notes: Chords.Minor, root: Intervals.MajorSecond},
	// on third, mediant
	iii: {notes: Chords.Minor, root: Intervals.MajorThird},
	// on fourth, subdominant
	IV: {notes: Chords.Major, root: Intervals.PerfectFourth},
	// on fifth, dominant
	V: {notes: Chords.Major, root: Intervals.PerfectFifth},
	// on sixth, submediant
	vi: {notes: Chords.Minor, root: Intervals.MajorSixth},
	// on seventh, leading tone
	vii: {notes: Chords.Diminished, root: Intervals.MajorSeventh},

	// extra
	i: {notes: Chords.Minor, root: Intervals.Root},
	II: {notes: Chords.Major, root: Intervals.MajorSecond},
	III: {notes: Chords.Major, root: Intervals.MajorThird},
	iv: {notes: Chords.Minor, root: Intervals.PerfectFourth},
	v: {notes: Chords.Major, root: Intervals.PerfectFifth},
	VI: {notes: Chords.Minor, root: Intervals.MajorSixth},
	VII: {notes: Chords.Major, root: Intervals.MajorSeventh},

	IM7: {notes: Chords.Major7, root: Intervals.Root},
	ii7: {notes: Chords.Minor7, root: Intervals.MajorSecond},
	iii7: {notes: Chords.Minor7, root: Intervals.MajorThird},
	IVM7: {notes: Chords.Major7, root: Intervals.PerfectFourth},
	V7: {notes: Chords.Dominant7, root: Intervals.PerfectFifth},
	VM7: {notes: Chords.Major7, root: Intervals.PerfectFifth},
	vi7: {notes: Chords.Minor7, root: Intervals.MajorSixth},

	Im9: {notes: Chords.Minor9, root: Intervals.Root},
	II9: {notes: Chords.Major9, root: Intervals.MajorSecond},
	III9: {notes: Chords.Major9, root: Intervals.MajorThird},
	IV9: {notes: Chords.Major9, root: Intervals.PerfectFourth},
	V9: {notes: Chords.Dominant9, root: Intervals.PerfectFifth},
	VI9: {notes: Chords.Minor9, root: Intervals.MajorSixth},

	IM9: {notes: Chords.Major9, root: Intervals.Root},
	ii9: {notes: Chords.Minor9, root: Intervals.MajorSecond},
	iii9: {notes: Chords.Minor9, root: Intervals.MajorThird},
	IVM9: {notes: Chords.Major9, root: Intervals.PerfectFourth},
	vi9: {notes: Chords.Minor9, root: Intervals.MajorSixth},

	I6: {notes: Chords.Major6, root: Intervals.Root},
	ii6: {notes: Chords.Minor6, root: Intervals.MajorSecond},
	iii6: {notes: Chords.Minor6, root: Intervals.MajorThird},
	IV6: {notes: Chords.Major6, root: Intervals.PerfectFourth},
	V6: {notes: Chords.Major6, root: Intervals.PerfectFifth},
	VI6: {notes: Chords.Minor6, root: Intervals.MajorSixth},
}

export class ChordProgression {
	progression: Progression;
	root: Notes | number;
	constructor(progression: Progression, root: Notes | number) {
		this.progression = progression;
		this.root = root;
		this.progression.chords = this.progression.chords.map((chord) => {
			const c = {
				...chord,
				chord: {
					...chord.chord,
					root: this.root + chord.chord.root
				}
			};
			console.log(chord.chord.root + this.root, this.root, chord.chord.root)
			return c;
		});
		
	}
	addChord(c:Chord, duration:Durations) {
		c.root = c.root + this.root
		this.progression.chords.push({chord: c, duration: duration});
	}
}


  


