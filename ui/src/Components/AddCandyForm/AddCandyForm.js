import React from 'react';
import '../AddCandyForm/AddCandyForm.scss';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Example = (props) => {
  return (
    <Form inline>
      <FormGroup>
        <Label for="candyName">Candy Name</Label>
        <Input className="candyFormInput" type="text" name="text" id="exampleText" />
      </FormGroup>
      <FormGroup>
        <Label for="candyCategory">Category</Label>
        <Input className="candyFormInput" type="text" name="text" id="exampleText" />
      </FormGroup>
      <FormGroup>
        <Label for="yearsSinceCreation">Years Since Creation</Label>
        <Input className="candyFormInput" type="text" name="text" id="exampleText" />
      </FormGroup>
      <Button>Submit</Button>
    </Form >
  );
}

export default Example;