import React, {FC} from 'react';
import {codeBlockStyles} from './styles';
import {View} from 'react-native';
import {TextWithHighlight} from '../../atoms/TextWithHighlight';
import {CodeBlockOrganismProps} from './types';

export const CodeBlockOrganism: FC<CodeBlockOrganismProps> = ({
  text,
  textToHighlight,
}) => {
  const styles = codeBlockStyles();
  return (
    <View style={styles.container}>
      {Array.isArray(text) ? (
        text.map(
          ({text: textString, textToHighlight: textToHighlights}, index) => {
            return (
              <TextWithHighlight
                text={textString}
                textToHighlight={textToHighlights}
                key={index}
              />
            );
          },
        )
      ) : (
        <TextWithHighlight text={text} textToHighlight={textToHighlight} />
      )}
    </View>
  );
};
