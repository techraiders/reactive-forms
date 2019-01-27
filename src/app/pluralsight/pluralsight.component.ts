import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, AbstractControl } from "@angular/forms";

function ratingRange(c: AbstractControl): { [key: string]: boolean } | null {
  if (c.value && (isNaN(c.value) || c.value < 1 || c.value > 5)) {
    return { range: true };
  }
  return null;
}

@Component({
  selector: "app-pluralsight",
  templateUrl: "./pluralsight.component.html",
  styleUrls: ["./pluralsight.component.css"]
})
export class PluralsightComponent implements OnInit {
  customerForm;
  constructor(private fb: FormBuilder) {
    /* this.customerForm = this.fb.group({
      firstName: "",
      sendCatalog: true
    }); */
    /* this.customerForm = this.fb.group({
      firstName: { value: "n/a", disabled: false },
      sendCatalog: { value: true, disabled: false }
    }); */
    this.customerForm = this.fb.group({
      firstName: ["", [Validators.required, Validators.minLength(3)]],
      lastName: ["", [Validators.required, Validators.maxLength(50)]],
      email: ["", [Validators.required, Validators.email]],
      phone: "",
      notification: "email",
      rating: [null, [ratingRange]],
      sendCatalog: [true]
    });
  }

  setNotification(notifyVia: string): void {
    const phoneControl = this.customerForm.get("phone");
    if (notifyVia === "text") {
      phoneControl.setValidators(Validators.required);
    } else {
      phoneControl.clearValidators();
    }
    phoneControl.updateValueAndValidity();
  }

  ngOnInit() {}
}
