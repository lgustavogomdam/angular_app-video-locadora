import { AtorService } from './../../ator.service';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { AtorModel } from '../../ator-model';

@Component({
  selector: 'app-ator-update',
  standalone: false,
  templateUrl: './ator-update.component.html',
  styleUrl: './ator-update.component.scss'
})
export class AtorUpdateComponent implements OnInit, OnDestroy{

  //IoC
  private service = inject(AtorService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private fb = inject(FormBuilder);

  public form!: FormGroup;
  public model: AtorModel | null= null;

  public operacaoUpdate: boolean = false;

  constructor(){
    this.form = this.fb.group({
      id: ['', Validators.required],
      primeiroNome: ['', Validators.required],
      ultimoNome: ['', Validators.required]
    })
  }

  preencherForm(model: AtorModel): void{
    this.form.setValue({
      id: model.id,
      primeiroNome: model.primeiroNome,
      ultimoNome: model.ultimoNome
    })
  }

  getMensagemErro(control: AbstractControl | null): string{
    if(control?.hasError('required')){
      return 'O campo é obrigatório!';
    }
    return 'Erro no preenchimento do campo!'
  }

  mapFormToModel(formValues: any): AtorModel{
    return {
      id: formValues.id,
      primeiroNome: formValues.primeiroNome,
      ultimoNome: formValues.ultimoNome
    };
  }

  OnSubmit(): void{

    if(this.model != null){
      this.service.updateAtor(this.mapFormToModel(this.form.value)).subscribe(
        (response: AtorModel) => {
          alert(`O ator de ID: ${response.id} foi atualizado com sucesso`);
        },
        (error: Error) => {
          alert(`Ocorreu o seguinte erro ao atualizar o Ator: ${error.message}`);
        },
        () => {
          console.info("Atualização de ator realizada!");
        }
      )
    }else{
      this.service.createAtor(this.mapFormToModel(this.form.value)).subscribe(
        (response: AtorModel) => {
          alert(`O ator de ID: ${response.id} foi criado com sucesso`);
        },
        (error: Error) => {
          alert(`Ocorreu o seguinte erro ao criar o Ator: ${error.message}`);
        },
        () => {
          console.info("Cadastro de ator realizada!");
        }
      )
    }
  }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      param => {

        const id = Number(param.get('id'));
        this.operacaoUpdate = true;

        if(id){
          this.service.getAtor(id).subscribe(
            (ator: AtorModel) => {
              this.model = ator;
              console.log('Chegou no model: ' + this.model)
              this.preencherForm(this.model);
            }
          );
        }else{
          this.operacaoUpdate = false;
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.operacaoUpdate = false;
  }
}
