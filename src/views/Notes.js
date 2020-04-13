import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "components/Button";
import AddNoteForm from "components/Form";
import Input from "components/Input";
import styled from "styled-components";
import { addNote } from "actions";

export const Wrapper = styled.div`
  padding: 30px;
  margin: 0 auto;
  width: 500px;
`;

class Notes extends Component {
  addItem = (e) => {
    e.preventDefault();
    const description = e.target[0].value;
    this.props.addNote(description);
    e.target.reset();
    console.log(this.props.notes);
  };
  render() {
    const notes = this.props.notes;
    return (
      <Wrapper>
        <AddNoteForm onSubmit={this.addItem}>
          <Input placeholder="Enter notes description" />
          <Button type="submit" value="Add">
            Add
          </Button>
        </AddNoteForm>
        <div>
          {notes.map((note) => (
            <div key={note.id}>{note.description}</div>
          ))}
        </div>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => {
  const { notes } = state;
  return { notes };
};

const mapDispatchToProps = (dispatch) => ({
  addNote: (description) => dispatch(addNote(description)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
