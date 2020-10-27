import React from "react";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../../Common/FormControls/FormControls";
import {maxLength50, required} from "../../../../Utilites/validators/validators";

const PostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} validate={[required, maxLength50]} name='postText' placeholder='Text' />
      </div>
      <div>
        <button>Add Post</button>
      </div>
    </form>
  )
}

export const PostsReduxForm = reduxForm({
  form: 'posts'
})(PostsForm)

