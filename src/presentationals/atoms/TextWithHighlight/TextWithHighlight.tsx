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
    // const textChunks2 = useMemo(() => {
    //   return highlightAll(text, [1, 2]);
    // }, [text]);

    // console.log('textChunks = ', textChunks2);
    // console.log('textChunks = ', textChunks);
    // const test = 'const a = 11;' + 'const b = 12';
    // console.log(test.split(' '));
    // console.log(test.split(' ').indexOf('const'));

    return (
      <Text style={[styles.textStyle, textStyle]}>
        {textChunks.map(({text, highlight}, index) =>
          highlight ? (
            <Text
              key={index.toString()}
              style={[styles.constHighlightStyle, highlightStyle]}>
              {text}
            </Text>
          ) : (
            <Text style={styles.defaultText}>{text}</Text>
          ),
        )}
      </Text>
    );
  },
);
