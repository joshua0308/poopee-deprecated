import React from 'react';
import { Button, Comment, Form, Header } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const CommentThread = () => (
  <Comment.Group>
    <Header as='h3' dividing>
      Reviews
    </Header>
    <div style={{ height: '100%', overflowY: 'hidden' }}>
      <Comment>
        <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
        <Comment.Content>
          <Comment.Author as='a'>Matt</Comment.Author>
          <Comment.Metadata>
            <div>Today at 5:42PM</div>
          </Comment.Metadata>
          <Comment.Text>Just what I needed!</Comment.Text>
        </Comment.Content>
      </Comment>

      <Comment>
        <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
        <Comment.Content>
          <Comment.Author as='a'>Jenny</Comment.Author>
          <Comment.Metadata>
            <div>Today at 5:42PM</div>
          </Comment.Metadata>
          <Comment.Text>This bathroom is so clean!</Comment.Text>
        </Comment.Content>
      </Comment>
      <Comment>
        <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
        <Comment.Content>
          <Comment.Author as='a'>Jenny</Comment.Author>
          <Comment.Metadata>
            <div>Today at 5:42PM</div>
          </Comment.Metadata>
          <Comment.Text>This bathroom is so clean!</Comment.Text>
        </Comment.Content>
      </Comment>
      <Comment>
        <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
        <Comment.Content>
          <Comment.Author as='a'>Jenny</Comment.Author>
          <Comment.Metadata>
            <div>Today at 5:42PM</div>
          </Comment.Metadata>
          <Comment.Text>This bathroom is so clean!</Comment.Text>
        </Comment.Content>
      </Comment>
      <Comment>
        <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
        <Comment.Content>
          <Comment.Author as='a'>Jenny</Comment.Author>
          <Comment.Metadata>
            <div>Today at 5:42PM</div>
          </Comment.Metadata>
          <Comment.Text>This bathroom is so clean!</Comment.Text>
        </Comment.Content>
      </Comment>
      <Comment>
        <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
        <Comment.Content>
          <Comment.Author as='a'>Jenny</Comment.Author>
          <Comment.Metadata>
            <div>Today at 5:42PM</div>
          </Comment.Metadata>
          <Comment.Text>This bathroom is so clean!</Comment.Text>
        </Comment.Content>
      </Comment>
      <Comment>
        <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
        <Comment.Content>
          <Comment.Author as='a'>Jenny</Comment.Author>
          <Comment.Metadata>
            <div>Today at 5:42PM</div>
          </Comment.Metadata>
          <Comment.Text>This bathroom is so clean!</Comment.Text>
        </Comment.Content>
      </Comment>
      <Comment>
        <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
        <Comment.Content>
          <Comment.Author as='a'>Jenny</Comment.Author>
          <Comment.Metadata>
            <div>Today at 5:42PM</div>
          </Comment.Metadata>
          <Comment.Text>This bathroom is so clean!</Comment.Text>
        </Comment.Content>
      </Comment>
      <Comment>
        <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
        <Comment.Content>
          <Comment.Author as='a'>Jenny</Comment.Author>
          <Comment.Metadata>
            <div>Today at 5:42PM</div>
          </Comment.Metadata>
          <Comment.Text>This bathroom is so clean!</Comment.Text>
        </Comment.Content>
      </Comment>
      <Comment>
        <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
        <Comment.Content>
          <Comment.Author as='a'>Jenny</Comment.Author>
          <Comment.Metadata>
            <div>Today at 5:42PM</div>
          </Comment.Metadata>
          <Comment.Text>This bathroom is so clean!</Comment.Text>
        </Comment.Content>
      </Comment>
      <Comment>
        <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
        <Comment.Content>
          <Comment.Author as='a'>Jenny</Comment.Author>
          <Comment.Metadata>
            <div>Today at 5:42PM</div>
          </Comment.Metadata>
          <Comment.Text>This bathroom is so clean!</Comment.Text>
        </Comment.Content>
      </Comment>
    </div>
    {/* 
    <Form reply>
      <Form.TextArea style={{ height: '100px' }} />
      <Button content='Add Reply' labelPosition='left' icon='edit' primary />
    </Form> */}
  </Comment.Group>
);

export default CommentThread;
