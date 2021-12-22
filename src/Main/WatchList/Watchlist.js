import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import Form from "redux-form/lib/Form";

class watchList extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Add your youtube video userId</label>
          <Field name="YoutubeId" component="input" type="text" />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

// Decorate the form component
watchList = reduxForm({
  form: "watchList", // a unique name for this form
})(watchList);

export default watchList;
