// types.d.ts
interface SegmenterSegment {
    segment: string;
    index: number;
    input: string;
  }
  
  interface Segmenter {
    segment(input: string): Iterable<SegmenterSegment>;
  }
  
  declare global {
    interface Intl {
      Segmenter: {
        new (locale: string, options: { granularity: 'grapheme' | 'word' | 'sentence' }): Segmenter;
        prototype: Segmenter;
      };
    }
  }
  
  export {};