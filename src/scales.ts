import { Intervals } from "./chords.ts"

export const Keys = {
    // 7 flats
    Cb: -7,
    // 6 flats
    Gb: -6,
    // 5 flats
    Db: -5,
    // 4 flats
    Ab: -4,
    // 3 flats
    Eb: -3,
    // 2 flats
    Bb: -2,
    // 1 flat
    F: -1,
    // 0 sharps/flats
    C: 0,
    // 1 sharp
    G: 1,
    // 2 sharps
    D: 2, 
    // 3 sharps
    A: 3,
    // 4 sharps
    E: 4,
    // 5 sharps
    B: 5,
    // 6 sharps
    Fs: 6,
    // 7 sharps
    Cs: 7,
}


// the different modes of a scale
// each mode is a different permutation of the WWHWWWH pattern, but doesnt add or remove w/h
// modes are named after the degree they start on
// the major scale is the Ionian mode
// the natural minor scale is the Aeolian mode...

// on a scale of 1-10 most minor is 1 and most major is 10 they are rated as written below
export const Modes = {
    
    // Ionian: major scale - starts on first degree in key of root
    // major classification due to major tetrachord
    // rank: 7/10
    Major: [Intervals.Root, Intervals.MajorSecond, Intervals.MajorThird, Intervals.PerfectFourth, Intervals.PerfectFifth, Intervals.MajorSixth, Intervals.MajorSeventh],

    // Dorian: flat 3rd, flat 7th - starts on second degree in key of root
    // minor classification due to minor tetrachord
    // rank: 4/10
    Dorian: [Intervals.Root, Intervals.MajorSecond, Intervals.MinorThird, Intervals.PerfectFourth, Intervals.PerfectFifth, Intervals.MajorSixth, Intervals.MinorSeventh],

    // Phrygian: flat 2nd, flat 3rd, flat 6th, flat 7th - starts on third degree in key of root
    // minor classification due to minor tetrachord
    // rank: 1
    Phrygian: [Intervals.Root, Intervals.MinorSecond, Intervals.MinorThird, Intervals.PerfectFourth, Intervals.PerfectFifth, Intervals.MinorSixth, Intervals.MinorSeventh],

    // Lydian: sharp 4th - starts on fourth degree in key of root
    // major classification due to major tetrachord
    // rank: 9/10
    Lydian: [Intervals.Root, Intervals.MajorSecond, Intervals.MajorThird, Intervals.AugmentedFourth, Intervals.PerfectFifth, Intervals.MajorSixth, Intervals.MajorSeventh],

    // Mixolydian: flat 7th - starts on fifth degree in key of root
    // major classification due to major tetrachord
    // rank: 8/10
    Mixolydian: [Intervals.Root, Intervals.MajorSecond, Intervals.MajorThird, Intervals.PerfectFourth, Intervals.PerfectFifth, Intervals.MajorSixth, Intervals.MinorSeventh],

    // Aeolian: natural minor scale - starts on sixth degree in key of root
    // minor classification due to minor tetrachord
    // rank: 3/10
    Minor: [Intervals.Root, Intervals.MajorSecond, Intervals.MinorThird, Intervals.PerfectFourth, Intervals.PerfectFifth, Intervals.MinorSixth, Intervals.MinorSeventh],


    // Locrian: flat 2nd, flat 5th, flat 6th, flat 7th - starts on seventh degree in key of root
    // diminished classification due to diminished tetrachord with that flat 5th
    // rank: 0/10
    Locrian: [Intervals.Root, Intervals.MinorSecond, Intervals.MinorThird, Intervals.PerfectFourth, Intervals.DiminishedFifth, Intervals.MinorSixth, Intervals.MinorSeventh],
}

// the different scales
// scales are a series of notes that are played in a specific order
// the major scale is the most common scale
// scales are made by alternating whole/half steps
// the major scale is WWHWWWH

export const Scales = {
    // major scale
    // WWHWWWH
    Major: [Intervals.Root, Intervals.MajorSecond, Intervals.MajorThird, Intervals.PerfectFourth, Intervals.PerfectFifth, Intervals.MajorSixth, Intervals.MajorSeventh],

    // natural minor scale
    // WHWWHWW
    Minor: [Intervals.Root, Intervals.MajorSecond, Intervals.MinorThird, Intervals.PerfectFourth, Intervals.PerfectFifth, Intervals.MinorSixth, Intervals.MinorSeventh],

    // harmonic minor scale
    // WHWWHWH
    // 7 notes
    HarmonicMinor: [Intervals.Root, Intervals.MajorSecond, Intervals.MinorThird, Intervals.PerfectFourth, Intervals.PerfectFifth, Intervals.MinorSixth, Intervals.MajorSeventh],

    // melodic minor scale
    // WWHWWWH (ascending)
    // WHWWHWW (descending)
    // 7 notes
    MelodicMinorAsc: [Intervals.Root, Intervals.MajorSecond, Intervals.MinorThird, Intervals.PerfectFourth, Intervals.PerfectFifth, Intervals.MajorSixth, Intervals.MajorSeventh],
    MelodicMinorDesc: [Intervals.MinorSeventh, Intervals.MinorSixth, Intervals.PerfectFifth, Intervals.PerfectFourth, Intervals.MinorThird, Intervals.MajorSecond, Intervals.Root],

    // pentatonic scale
    // WWHWWWH
    // 5 notes
    MajorPentatonic: [Intervals.Root, Intervals.MajorSecond, Intervals.MajorThird, Intervals.PerfectFifth, Intervals.MajorSixth],

    // pentatonic minor scale
    // WHWWHWW
    // 5 notes
    MinorPentatonic: [Intervals.Root, Intervals.MinorThird, Intervals.PerfectFourth, Intervals.PerfectFifth, Intervals.MinorSeventh],

    // blues scale
    // WWHWWWH
    // 6 notes
    Blues: [Intervals.Root, Intervals.MinorThird, Intervals.PerfectFourth, Intervals.DiminishedFifth, Intervals.PerfectFifth, Intervals.MinorSeventh],

    // chromatic scale
    // HHHHHHHHHHHH
    // 12 notes
    Chromatic: [Intervals.Root, Intervals.MinorSecond, Intervals.MajorSecond, Intervals.MinorThird, Intervals.MajorThird, Intervals.PerfectFourth, Intervals.AugmentedFourth, Intervals.PerfectFifth, Intervals.MinorSixth, Intervals.MajorSixth, Intervals.MinorSeventh, Intervals.MajorSeventh],

    // whole tone scale
    // WWWWWW
    // 6 notes
    WholeTone: [Intervals.Root, Intervals.MajorSecond, Intervals.MajorThird, Intervals.AugmentedFourth, Intervals.AugmentedFifth, Intervals.MajorSeventh],

    // octatonic scale (diminished scale)
    // WHWHWHWH
    // 8 notes
    Diminished: [Intervals.Root, Intervals.MajorSecond, Intervals.MinorThird, Intervals.PerfectFourth, Intervals.DiminishedFifth, Intervals.MinorSixth, Intervals.MajorSeventh, Intervals.MajorSecond],

    // hexatonic scale
    // WHWWWW
    // 6 notes
    Hexatonic: [Intervals.Root, Intervals.MajorSecond, Intervals.MajorThird, Intervals.PerfectFifth, Intervals.MinorSixth, Intervals.MajorSeventh],

    // heptatonic scale
    // WHWWHWW
    // 7 notes
    Heptatonic: [Intervals.Root, Intervals.MajorSecond, Intervals.MinorThird, Intervals.PerfectFourth, Intervals.PerfectFifth, Intervals.MinorSixth, Intervals.MajorSeventh],

}

