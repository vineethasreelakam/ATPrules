import React from 'react';
import { Text as RNText } from 'react-native';
import { useSearch } from './SearchProvider';

export const HighlightText = (props) => {
  const { search } = useSearch();
  
  const highlightText = (text) => {
    if (!search) {
      // If search is empty, return the original text
      return text;
    }

    if (typeof text === 'string') {
      // Use a regular expression to find and highlight matching text
      const regex = new RegExp(`(${search})`, 'gi');
      const parts = text.split(regex);

      return parts.map((part, index) =>
        regex.test(part) ? (
          <RNText key={index} style={{ backgroundColor: 'yellow' }}>
            {part}
          </RNText>
        ) : (
          <RNText key={index}>{part}</RNText>
        ),
      );
    } else if (Array.isArray(text)) {
      // If it's an array, recursively call highlightText on each element
      return text.map((element, index) => highlightText(element));
    } else if (React.isValidElement(text)) {
      // If it's a React element, recursively call highlightText
      return React.cloneElement(text, {
        children: highlightText(text.props.children),
      });
    } else {
      return text;
    }
  };

  // Flatten the array of Text components before rendering
  const flattenedChildren = React.Children.toArray(highlightText(props.children));

  return <RNText {...props}>{flattenedChildren}</RNText>;
};
