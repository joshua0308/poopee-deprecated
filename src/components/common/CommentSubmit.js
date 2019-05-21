import React from 'react';
import { Button, Comment, Form, Header } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const CommentSubmit = () => (
  <Comment.Group>
    <Form reply>
      <Form.TextArea style={{ height: '20px' }} />
      <Button content='Add Reply' labelPosition='left' icon='edit' primary />
    </Form>
  </Comment.Group>
);

export default CommentSubmit;
