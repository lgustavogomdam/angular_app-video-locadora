import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClasseService } from '../../classe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClasseModel } from '../../classe-model';

@Component({
  selector: 'app-classe-update',
  standalone: false,
  templateUrl: './classe-update.component.html',
  styleUrl: './classe-update.component.scss'
})
export class ClasseUpdateComponent implements OnInit, OnDestroy{

  //IoC
  private service = inject(ClasseService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private fb = inject(FormBuilder);

  public form!: FormGroup;
  public model: ClasseModel | null= null;

  public operacaoUpdate: boolean = false;

  constructor(){
    this.form = this.fb.group({
      id: ['', Validators.required],
      nome: ['', Validators.required],
      valor: ['', Validators.required],
      dataDevolucao: []
    })
  }

  onKeyDown(event: KeyboardEvent): void {
    event.preventDefault();
  }

  preencherForm(model: ClasseModel): void{
    this.form.setValue({
      id: model.id,
      nome: model.nome,
      valor: model.valor,
      dataDevolucao: model.dataDevolucao
    })
  }

  getMensagemErro(control: AbstractControl | null): string{
    if(control?.hasError('required')){
      return 'O campo é obrigatório!';
    }
    return 'Erro no preenchimento do campo!'
  }

  mapFormToModel(formValues: any): ClasseModel{
    return {
      id: formValues.id,
      nome: formValues.nome,
      valor: formValues.valor,
      dataDevolucao: formValues.dataDevolucao
    };
  }

  OnSubmit(): void{

    if(this.model != null){
      this.service.updateClasse(this.form.value).subscribe(
        (response: ClasseModel) => {
          alert(`A classe de ID: ${response.id} foi atualizado com sucesso`);
        },
        (error: Error) => {
          alert(`Ocorreu o seguinte erro ao atualizar a classe: ${error.message}`);
        },
        () => {
          console.info("Atualização de classe realizada!");
        }
      )
    }else{
      this.service.createClasse(this.form.value).subscribe(
        (response: ClasseModel) => {
          alert(`A classe de ID: ${response.id} foi criado com sucesso`);
        },
        (error: Error) => {
          alert(`Ocorreu o seguinte erro ao criar a classe: ${error.message}`);
        },
        () => {
          console.info("Cadastro de classe realizada!");
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
          this.service.getClasse(id).subscribe(
            (classe: ClasseModel) => {
              this.model = classe;
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
