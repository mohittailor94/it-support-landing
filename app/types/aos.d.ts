declare module 'aos' {
    export interface AosOptions {
      offset?: number;
      delay?: number;
      duration?: number;
      easing?: string;
      once?: boolean;
      mirror?: boolean;
      anchorPlacement?: string;
      // add other options as needed
    }
  
    interface AosStatic {
      init(options?: AosOptions): void;
      refresh(): void;
      refreshHard(): void;
    }
  
    const AOS: AosStatic;
    export default AOS;
  }