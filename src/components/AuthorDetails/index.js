import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const AuthorDetails = (props) => (
  <div>
    <p>First-App Component</p>
    <Text field={props.fields.name} />
    <Text field={props.fields.designation} />
    <Text field={props.fields.emailId} />
    <Text field={props.fields.phoneNumber} />
  </div>
);

export default AuthorDetails;
