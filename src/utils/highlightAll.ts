import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
export interface ITextChunk {
  text: string;
  highlight: boolean;
}

export function highlightAll(
  text: string,
  textToHighlight: string | [number, number][],
): ITextChunk[] {
  if (!text || textToHighlight === null) {
    return [];
  }
  if (typeof textToHighlight === 'string') {
    return parse(
      text,
      match(text, textToHighlight, {
        findAllOccurrences: true,
        insideWords: true,
      }),
    );
  }

  return parse(text, textToHighlight);
}
