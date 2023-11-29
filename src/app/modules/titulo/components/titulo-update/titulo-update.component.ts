import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { TituloService } from '../../titulo.service';
import { TituloModel } from './../../titulo-model';

@Component({
  selector: 'app-titulo-update',
  standalone: false,
  templateUrl: './titulo-update.component.html',
  styleUrl: './titulo-update.component.scss'
})
export class TituloUpdateComponent implements OnInit, OnDestroy{

  //IoC
  private service = inject(TituloService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private fb = inject(FormBuilder);

  public form!: FormGroup;
  public model: TituloModel | null= null;

  public operacaoUpdate: boolean = false;

  constructor(){
    // TODO: consertar formulario, entidades como formGroup
    this.form = this.fb.group({
      id: ['', Validators.required],
      nome: ['', Validators.required],
      ano: ['', Validators.required],
      sinopse: ['', Validators.maxLength(2000)],
      categoria: ['', Validators.required],
      ator: this.fb.group({
        id: ['', Validators.required]
      }),
      diretor: this.fb.group({
        id: ['', Validators.required]
      }),
      classe: this.fb.group({
        id: ['', Validators.required]
      })
    })
  }

  onKeyDown(event: KeyboardEvent): void {
    event.preventDefault();
  }

  preencherForm(model: TituloModel): void{
    this.form.patchValue({
      id: model.id,
      nome: model.nome,
      ano: model.ano,
      sinopse: model.sinopse,
      categoria: model.categoria,
      ator: {
        id: model.actor.id
      },
      diretor: {
        id: model.director.id
      },
      classe: {
        id: model.classe.id
      }
    })
  }

  getMensagemErro(control: AbstractControl | null): string{
    if(control?.hasError('required')){
      return 'O campo é obrigatório!';
    }
    return 'Erro no preenchimento do campo!'
  }

  // TODO: eliminar gets desnecessarios e alterar esse form to model para campos de formgroup do formulario
  // TODO: validar campos antes de enviar
  OnSubmit(): void {
    this.service.formToModel(this.form.value).subscribe(
      (titulo: TituloModel) => {
        if (this.model !== null) {
          this.service.updateTitulo(titulo).subscribe(
            (response) =>{
              alert(`O titulo de ID: ${response.id}\n Diretor: ${response.director.id}\n Ator: ${response.actor.id}\n e Classe: ${response.classe.nome}\n foi criado com sucesso`)
            }
          );
        } else {
          this.service.createTitulo(titulo).subscribe(
            (response) =>{
              alert(`O titulo de ID: ${response.id}\n Diretor: ${response.director.id}\n Ator: ${response.actor.id}\n e Classe: ${response.classe.nome}\n foi criado com sucesso`)
            }
          );
        }
      },
      (error: Error) => {
        alert(`Erro ao mapear dados do formulário para o modelo: ${error.message}`);
      }
    );
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      param => {

        const id = Number(param.get('id'));
        this.operacaoUpdate = true;

        if(id){
          this.service.getTitulo(id).subscribe(
            (titulo: TituloModel) => {
              this.model = titulo;
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
