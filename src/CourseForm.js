import React from "react";
import TextInput from "./TextInput";
import PropTypes from "prop-types";

export function CourseForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
          id="title"
          label="Title"
          type="text"
          onChange={props.onChange}
          name="title"  
          className="form-control"
          value={props.course.title}
          errors={props.errors.title}
        />
      <div className="form-group">
        <label htmlFor="author"> Author </label>
        <div className="field">
           <select
              id="author"
              name="authorId"
              onChange={props.onChange}
              value={props.course.authorId || ""}
              className="form-control"
           >
            <option value="" />
            <option value="1">Cory House</option>
            <option value="2">Scott Allen</option>
          </select> 
        </div>
        {props.errors.author &&(
          <div className="alert alert-danger">{props.errors.authorId}</div>
        )}
      </div>
      <TextInput
        id="category"
        label="Category"
        name="category"
        onChange={props.onChange}
        className="form-control"
        value={props.course.category}
        errors={props.errors.category}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}
CourseForm.propTypes = {
  id:PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.string
};
export default  CourseForm;