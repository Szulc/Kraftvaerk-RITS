export interface GoogleApiEntity0 {
    lm?: (null)[] | null;
    zh: string;
    zi: string;
    zp: Zp;
    zs: string;
  }
  export interface Zp {
    gs_ssp: string;
  }
  export interface GoogleApiEntity2 {
    ag: Ag;
    q: string;
  }
  export interface Ag {
    a: A;
  }
  export interface A {
    40024?: (string | number)[] | null;
  }
  export type GoogleApi = ((string | number | (number)[] | null | GoogleApiEntity0 )[] | null)[] | null | GoogleApiEntity2;
  
  