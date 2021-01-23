import React from 'react';
import {Text} from 'react-native';

export default function Roboto({title, color = 'black', size, type, style}) {
  return (
    <Text
      style={{
        color,
        fontSize: size,        
        fontFamily: `Roboto-${type}`,
        textAlign: 'justify',
        ...style,
      }}>
      {title}
    </Text>
  );
}

export function RobotoBold({title, color = 'black', size, type, style}) {
  return (
    <Text
      style={{
        color,
        fontSize: size, 
        fontWeight: 'bold',    
        textAlign: 'justify',
        fontFamily: `Roboto-${type}`,
        ...style,
      }}>
      {title}
    </Text>
  );
}

export function RobotoBoldUppercase({title, color = 'black', size, type, style}) {
  return (
    <Text
      style={{
        color,
        fontSize: size, 
        fontWeight: 'bold',    
        textAlign: 'justify',  
        textTransform: 'uppercase',
        fontFamily: `Roboto-${type}`,
        ...style,
      }}>
      {title}
    </Text>
  );
}

export function RobotoJustify({title, color = 'black', size, type, style}) {
  return (
    <Text
      style={{
        color,
        fontSize: size,    
        textAlign: 'justify',  
        fontFamily: `Roboto-${type}`,
        ...style,
      }}>
      {title}
    </Text>
  );
}