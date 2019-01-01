import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  genders = ["male", "female"];
  signupForm: FormGroup;
  forbiddenUsernames = ['Cheris', 'Anna'];

  ngOnInit() {
    try {
      this.signupForm = new FormGroup({
        userData: new FormGroup({
          username: new FormControl(null, [
            Validators.required,
            Validators.pattern(/[a-z]/),
            this.forbiddenName.bind(this)
          ]),
          email: new FormControl(null, [Validators.required, Validators.email])
        }),
        gender: new FormControl("male"),
        hobbies: new FormArray([

        ])
      });
    } catch (err) {

    }
  }

  onAddHobby () {
    try {
      const control = new FormControl(null, Validators.required);
      (<FormArray>this.signupForm.get('hobbies')).push(control);
    } catch (err) {

    }
  }

  forbiddenName (control: FormControl) : {[s: string]: boolean} {
    try {
      if (this.forbiddenUsernames.map(name => name.toLowerCase()).includes(control.value)) {
        return {'nameIsForbidden': true};
      } else {
        /** Either return or nothing here, don't return false */
        return null;
      }
    } catch (err) {

    }
  }

  onSubmit() {
    console.log(this.signupForm);
  }
}
