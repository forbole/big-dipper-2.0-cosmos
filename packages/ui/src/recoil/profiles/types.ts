export type AtomState =
  | {
      moniker: string;
      imageUrl?: string;
    }
  | null
  | boolean;

export interface Profile {
  moniker: string;
  imageUrl?: string;
}
