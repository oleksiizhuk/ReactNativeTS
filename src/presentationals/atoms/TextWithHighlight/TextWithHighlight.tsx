import React, {memo, useMemo} from 'react';
import {Text} from 'react-native';
import {highlightAll} from '../../../utils/highlightAll';
import {textWithHighlightStyles} from './styles';
import {TextWithHighlightProps} from './types';

export const TextWithHighlight = memo<TextWithHighlightProps>(
  ({text, textToHighlight = 'const', textStyle, highlightStyle}) => {
    const styles = textWithHighlightStyles();

    const textChunks = useMemo(() => {
      return highlightAll(text, textToHighlight);
    }, [text, textToHighlight]);

    return (
      <Text style={[styles.textStyle, textStyle]}>
        {textChunks.map(({text: textString, highlight}, index) =>
          highlight ? (
            <Text
              key={textString + index}
              style={[styles.constHighlightStyle, highlightStyle]}>
              {textString}
            </Text>
          ) : (
            <Text style={styles.defaultText}>{textString}</Text>
          ),
        )}
      </Text>
    );
  },
);
