import React, {FC} from 'react';
import {codeBlockStyles} from './styles';
import {View} from 'react-native';
import {TextWithHighlight} from '../../atoms/TextWithHighlight';

interface CodeBlockOrganismProps {
  text: string | {text: string; textToHighlight: string | [number, number][]}[];
  readonly textToHighlight?: string | [number, number][];
}
export const CodeBlockOrganism: FC<CodeBlockOrganismProps> = ({
  text,
  textToHighlight,
}) => {
  const styles = codeBlockStyles();
  return (
    <View style={styles.container}>
      {Array.isArray(text) ? (
        text.map(({text, textToHighlight}, index) => {
          return (
            <TextWithHighlight
              text={text}
              textToHighlight={textToHighlight}
              key={index}
            />
          );
        })
      ) : (
        <TextWithHighlight text={text} textToHighlight={textToHighlight} />
      )}
    </View>
  );
};
