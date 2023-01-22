export interface CodeBlockOrganismProps {
  text: string | {text: string; textToHighlight: string | [number, number][]}[];
  readonly textToHighlight?: string | [number, number][];
}
