import React from 'react';
import {ScrollView} from 'react-native';
import {Title} from '../../atoms/Title';
import {Divider} from '../../atoms/Divider';
import {Description} from '../../atoms/Description';
import {SubTitle} from '../../atoms/SubTitle';
import {CodeBlockOrganism} from '../../organisms/CodeBlock/CodeBlockOrganism';
import {EnumTemplateStyles} from './styles';

export const EnumTemplate = () => {
  const styles = EnumTemplateStyles();
  return (
    <ScrollView style={styles.container}>
      <Title title={'TypeScript Enums: '} />
      <Divider />
      <Description
        style={styles.descriptionStyle}
        description={
          'An enum is a special "class" that represents a group of constants (unchangeable variables).\n' +
          'Enums come in two flavors string and numeric. Lets start with numeric.'
        }
      />
      <Divider />
      <SubTitle
        subTitle={'1) Numeric Enums - Default'}
        style={styles.subTitleMarginVertical}
      />
      <Description
        description={
          'By default, enums will initialize the first value to 0 and add 1 to each additional value:'
        }
      />

      <CodeBlockOrganism
        text={[
          {text: 'enum CardinalDirections {', textToHighlight: 'enum'},
          {text: '  North,', textToHighlight: ''},
          {text: '  East,', textToHighlight: ''},
          {text: '  South,', textToHighlight: ''},
          {text: '  West,', textToHighlight: ''},
          {text: '},', textToHighlight: ''},
          {
            text: 'let currentDirection = CardinalDirections.North;',
            textToHighlight: 'let',
          },
          {text: '// logs 0', textToHighlight: ''},
          {text: 'console.log(currentDirection);', textToHighlight: ''},
          {
            text: "// throws error as 'North' is not a valid enum",
            textToHighlight: '',
          },
          {
            text: "currentDirection = 'North'; \n // Error: \"North\" is not assignable to type 'CardinalDirections'.",
            textToHighlight: 'North',
          },
        ]}
        textToHighlight={'enum'}
      />
      <SubTitle
        subTitle={'2)Numeric Enums - Fully Initialized'}
        style={styles.subTitleMarginTop}
      />
      <Description
        description={
          'By default, enums will initialize the first value to 0 and add 1 to each additional value:'
        }
      />
      <CodeBlockOrganism
        text={[
          {text: 'enum StatusCodes {', textToHighlight: 'enum'},
          {text: '    NotFound = 404,', textToHighlight: '404'},
          {text: '    Success = 200,', textToHighlight: '200'},
          {text: '    Accepted = 202,', textToHighlight: '202'},
          {text: '    BadRequest = 400', textToHighlight: '400'},
          {text: '},', textToHighlight: ''},
          {
            text: '// logs 404',
            textToHighlight: '',
          },
          {text: 'console.log(StatusCodes.NotFound);', textToHighlight: ''},
          {text: '// logs 200', textToHighlight: ''},
          {
            text: 'console.log(StatusCodes.Success);',
            textToHighlight: '',
          },
        ]}
        textToHighlight={'enum'}
      />
    </ScrollView>
  );
};
