import {StyleProp, TextStyle} from 'react-native';

export interface TextWithHighlightProps {
  readonly text: string;
  readonly textToHighlight?: string | [number, number][];
  textStyle?: StyleProp<TextStyle>;
  highlightStyle?: StyleProp<TextStyle>;
}
