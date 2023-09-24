import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ToastService } from 'src/app/core/services/toast.service';
import { birthDateValidator } from 'src/app/core/validators/birthdate.validators';
import { PlayerDataService } from 'src/app/core/services/player-data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register-player',
  templateUrl: 'register-player.component.html',
  styleUrls: ['register-player.component.css']
})

/**
 * Register player component class
 *
 * @author Francisco Franco
 * @version %I%, %G%
 * @since 1.0
 */
export class RegisterPlayerComponent implements OnInit {

  playerform: FormGroup;

  name: string;

  emailId: string;

  password: string;

  version: string;

  constructor(private playerService: PlayerDataService, private router: Router, private fb: FormBuilder, private toastService: ToastService) { }

  ngOnInit() {
    this.playerform = this.fb.group({
      'name': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
      'emailId': new FormControl('', [Validators.required, Validators.email]),
      'birthDate': new FormControl('', [Validators.required, birthDateValidator])
    });

    this.version = environment.version;
  }

  onClickRegisterPlayer() {
    let isRegistered: boolean = this.playerService.addPlayer(this.playerform.controls["name"].value,
      this.playerform.controls["password"].value,
      this.playerform.controls["emailId"].value,
      this.playerform.controls["birthDate"].value);
    if (isRegistered) {
      this.router.navigate(['/login']);
      this.toastService.addSingle("success", "", "Player registered.")
    }
  }

  onClickGoToLogin() {
    this.router.navigate(['/login']);
  }

}

