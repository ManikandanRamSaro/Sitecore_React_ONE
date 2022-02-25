import React from 'react';
import { Text, RichText } from '@sitecore-jss/sitecore-jss-react';

const ArticleDetails = (props) => (
  <div>
    <p>First-App Component</p>
    <Text field={props.fields.heading} />
    <RichText field={props.fields.shortDescription} />
    <RichText field={props.fields.detailedBlog} />
  </div>
);

export default ArticleDetails;
