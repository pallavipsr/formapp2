import React from "react";
import ReactFormValidation from "react-form-input-validation";
import "./Form.css";




class ValidationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        employee_id: "",
        employee_name: "",
        email_address: "",
        pass_word: "",
        joining_date: "",
        gender: "",
        designation: "",
        
        
        extras: []
      },
      errors: {}
    };
    this.form = new ReactFormValidation(this, { locale: "en" });
    this.form.useRules({
      employee_id: "required|employee_id",
      employee_name: "required|employee_name",
      email_address: "required|email",
      pass_word: "required|password",
      joining_date: "required|date",
      gender: "required",
      designation: "required",
      
      
      extras: "required|array"
    });

    this.form.onformsubmit = (fields) => {
      console.log(fields);
    }

    ReactFormValidation.registerAsync('username_available', function(username, attribute, req, passes) {
      setTimeout(() => {
        if (username === "foo")
          passes(false, 'Username has already been taken.'); // if username is not available
        else
          passes();
      }, 1000);
    });
    /* let messages = ReactFormValidation.getMessages('en');
    messages.required = 'Whoops, :attribute field is required.';
    ReactFormValidation.setMessages('en', messages);
    ReactFormValidation.useLang('en') */
  }

  render() {
    return (
        <div className="body">
        <div  style={{maxWidth: "600px", margin: "0 auto"}}>
              <form
            className="myForm"
            noValidate
            autoComplete="off"
            onSubmit={this.form.handleSubmit}
          >
            <p>
              <label>
                ICTAK ID
                <input
                  type="text"
                  name="employee_id"
                  onBlur={this.form.handleBlurEvent}
                  onChange={this.form.handleChangeEvent}
                  value={this.state.fields.employee_id}
                  // To override the attribute name
                  data-attribute-name="Employee ID"
                  data-async
                />
              </label>
              <label className="error">
                {this.state.errors.employee_id
                  ? this.state.errors.employee_id
                  : ""}
              </label>
            </p>
            <p>
              <label>
                Full Name
                <input
                  type="text"
                  name="employee_name"
                  onBlur={this.form.handleBlurEvent}
                  onChange={this.form.handleChangeEvent}
                  value={this.state.fields.employee_id}
                  // To override the attribute name
                  data-attribute-name="Employee Name"
                  data-async
                />
              </label>
              <label className="error">
                {this.state.errors.employee_name
                  ? this.state.errors.employee_name
                  : ""}
              </label>
            </p>
            

            <p>
              <label>
                Password
                <input
                  type="password"
                  name="pass_word"
                  onBlur={this.form.handleBlurEvent}
                  onChange={this.form.handleChangeEvent}
                  value={this.state.fields.pass_word}
                  data-attribute-name="Password"
                  data-async
                />
              </label>
              <label className="error">
                {this.state.errors.pass_word
                  ? this.state.errors.pass_word
                  : ""}
              </label>
            </p>

            <p>
              <label>
                Email/Username
                <input
                  type="email"
                  name="email_address"
                  onBlur={this.form.handleBlurEvent}
                  onChange={this.form.handleChangeEvent}
                  value={this.state.fields.email_address}
                />
              </label>
              <label className="error">
                {this.state.errors.email_address
                  ? this.state.errors.email_address
                  : ""}
              </label>
            </p>

            


            <fieldset>
              <legend>Gender</legend>
              <p>
                <label className="choice">
                  {" "}
                  <input
                    type="radio"
                    name="gender"
                    onChange={this.form.handleChangeEvent}
                    value="male"
                  />{" "}
                  Male{" "}
                </label>
              </p>
              <p>
                <label className="choice">
                  {" "}
                  <input
                    type="radio"
                    name="gender"
                    onChange={this.form.handleChangeEvent}
                    value="female"
                  />{" "}
                  Female{" "}
                </label>
              </p>
              
              <label className="error">
                {this.state.errors.gender
                  ? this.state.errors.gender
                  : ""}
              </label>
            </fieldset>

            

            <p>
              <label>
                 Joining date
                <input
                  type="date"
                  name="joining_date"
                  onChange={this.form.handleChangeEvent}
                  onBlur={this.form.handleBlurEvent}
                  value={this.state.fields.joining_date}
                />
              </label>
              <label className="error">
                {this.state.errors.joining_date
                  ? this.state.errors.joining_date
                  : ""}
              </label>
            </p>

            <p>
              <label>
                Designation
                <select
                type="text"
                  id="designation"
                  name="designation"
                  value={this.state.fields.pickup_place}
                  onChange={this.form.handleChangeEvent}
                  onBlur={this.form.handleBlurEvent}
                >
                  <option value="">Select One</option>
                  <option value="office">Junior Associate</option>
                  <option value="town_hall">Senior Associate</option>
                  
                </select>
              </label>
              <label className="error">
                {this.state.errors.designation
                  ? this.state.errors.designation
                  : ""}
              </label>
            </p>

            

           
            <p>
              <button type="submit">Create Profile</button>
            </p>
          </form>
        </div>
        </div>
    );
  }
}

export default ValidationForm;