import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent {
  user!: User;
  userId!: any;
  editing: boolean = false;
  profileForm!: FormGroup;
  isEditing: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //verifica che nell'url ci sia il campo id
    this.userId = this.route.snapshot.paramMap.get('id');

    if (this.userId) {
      this.isEditing = true;
      this.userService.getUserById(this.userId).subscribe(
        (user) => {
          this.user = user;
          this.initForm();
        },
        (error) => {
          console.log("Errore nel recupero dell'utente: ", error);
        }
      );
    } else {
      this.user = new User();
      this.initForm();
    }
  }

  initForm(): void {
    this.profileForm = this.formBuilder.group({
      name: [this.user.name, Validators.required],
      surname: [this.user.surname, Validators.required],
      email: [this.user.email, [Validators.required, Validators.email]],
      emailNotification: [this.user.emailNotification],
    });
  }

  editProfile(): void {
    this.editing = true;
  }

  onSubmit(): void {
    if(this.isEditing){
    this.userService.updateUser(this.user.id, this.profileForm.value).subscribe(
      (updatedUser) => {
        this.user = updatedUser;
        this.editing = false; // Disabilita la modalità di modifica
      },
      (error) => {
        console.log("Errore nell'aggiornamento dell'utente: ", error);
      }
    );
  }else{
    this.userService.createUser(this.profileForm.value).subscribe(
      (newUser) => {
        this.user = newUser;
        this.editing = false; // Disabilita la modalità di modifica
      },
      (error) => {
        console.log("Errore nell'aggiornamento dell'utente: ", error);
      }
    )
  }

    this.profileForm.markAsPristine();
  }

  cancelEdit(): void {
    // Annulla la modifica e ripristina i valori originali
    this.editing = false;
    this.initForm();
  }
}
