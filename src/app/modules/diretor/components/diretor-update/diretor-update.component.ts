import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiretorService } from '../../diretor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DiretorModel } from '../../diretor-model';

@Component({
  selector: 'app-diretor-update',
  standalone: false,
  templateUrl: './diretor-update.component.html',
  styleUrl: './diretor-update.component.scss'
})
export class DiretorUpdateComponent implements OnInit, OnDestroy{

  //IoC
  private service = inject(DiretorService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private fb = inject(FormBuilder);

  public form!: FormGroup;
  public model: DiretorModel | null= null;

  public operacaoUpdate: boolean = false;

  constructor(){
    this.form = this.fb.group({
      id: ['', Validators.required],
      primeiroNome: ['', Validators.required],
      ultimoNome: ['', Validators.required]
    })
  }

  preencherForm(model: DiretorModel): void{
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

  mapFormToModel(formValues: any): DiretorModel{
    return {
      id: formValues.id,
      primeiroNome: formValues.primeiroNome,
      ultimoNome: formValues.ultimoNome
    };
  }

  OnSubmit(): void{

    if(this.model != null){
      this.service.updateDiretor(this.mapFormToModel(this.form.value)).subscribe(
        (response: DiretorModel) => {
          alert(`O diretor de ID: ${response.id} foi atualizado com sucesso`);
        },
        (error: Error) => {
          alert(`Ocorreu o seguinte erro ao atualizar o diretor: ${error.message}`);
        },
        () => {
          console.info("Atualização de diretor realizada!");
        }
      )
    }else{
      this.service.createDiretor(this.mapFormToModel(this.form.value)).subscribe(
        (response: DiretorModel) => {
          alert(`O diretor de ID: ${response.id} foi criado com sucesso`);
        },
        (error: Error) => {
          alert(`Ocorreu o seguinte erro ao criar o diretor: ${error.message}`);
        },
        () => {
          console.info("Cadastro de diretor realizada!");
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
          this.service.getDiretor(id).subscribe(
            (diretor: DiretorModel) => {
              this.model = diretor;
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
