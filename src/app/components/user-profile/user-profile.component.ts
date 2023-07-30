import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  user!: User;
  editing: boolean = false;
  profileForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    // Recupera l'id dell'utente dal localstorage
    const userId = Number(localStorage.getItem('userId'));
    if (userId) {
      // Ottieni l'utente dal servizio UserService tramite l'id
      this.userService.getUserById(userId).subscribe(
        (user) => {
          this.user = user;
          this.initForm();
        },
        (error) => {
          console.log('Errore nel recupero dell\'utente: ', error);
        }
      );
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
    console.log(this.profileForm.value)
    // Chiama il servizio per aggiornare i dati dell'utente
    this.userService.updateUser(this.user.id, this.profileForm.value).subscribe(
      (updatedUser) => {
        this.user = updatedUser;
        this.editing = false; // Disabilita la modalità di modifica
      },
      (error) => {
        console.log('Errore nell\'aggiornamento dell\'utente: ', error);
      }
    );
    this.profileForm.markAsPristine();
  }

  cancelEdit(): void {
    // Annulla la modifica e ripristina i valori originali
    this.editing = false;
    this.initForm();
  }
}
