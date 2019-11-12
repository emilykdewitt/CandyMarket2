import React from 'react';
import '../AddCandyForm/AddCandyForm.scss';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const defaultCandy = {
  candyId: '',
  name: '',
  category: '',
  yearsSinceCreation: '',
}

class AddCandyForm extends React.Component {
  state = {
    newCandy: defaultCandy,
  }

  formFieldStringState = (name, e) => {
    const tempCandy = { ...this.state.newCandy };
    tempCandy[name] = e.target.value;
    this.setState({ newCandy: tempCandy });
  }

  nameChange = e => this.formFieldStringState('candyName', e);

  categoryChange = e => this.formFieldStringState('category', e);

  yearsSinceCreationChange = e => this.formFieldStringState('yearsSinceCreation', e);

  render() {
    const { newCandy } = this.state;
    return (
      <Form inline>
      <FormGroup>
        <Label for="candyName">Candy Name</Label>
        <Input 
          className="candyFormInput" 
          type="text" 
          name="text" 
          id="newCandyName"
          placeholder="Snickers"
          value={newCandy.name}
          onChange={this.nameChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="candyCategory">Category</Label>
        <Input 
          className="candyFormInput" 
          type="text" 
          name="text" 
          id="newCandyCategory"
          placeholder="Chocolate"
          value={newCandy.category}
          onChange={this.categoryChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="yearsSinceCreation">Years Since Creation</Label>
        <Input 
          className="candyFormInput" 
          type="text" 
          name="text" 
          id="newCandyYearsSinceCreation"
          placeholder="NSS"
          value={newCandy.yearsSinceCreation}
          onChange={this.yearsSinceCreationChange}
        />
      </FormGroup>
      <Button>Submit</Button>
    </Form >
    )
  }
}

export default AddCandyForm;