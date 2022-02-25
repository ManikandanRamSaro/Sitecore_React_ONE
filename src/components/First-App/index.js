import React from 'react';
import { RichText, Text } from '@sitecore-jss/sitecore-jss-react';

const FirstApp = (props) => (
  <div>
    <p>First-App Component</p>
    <Text field={props.fields.heading} />
    <RichText field={props.fields.content} />
  </div>
);

export default FirstApp;
