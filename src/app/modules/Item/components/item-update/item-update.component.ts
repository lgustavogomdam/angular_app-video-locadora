import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemService } from '../../item.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ItemModel } from '../../item-model';

@Component({
  selector: 'app-item-update',
  standalone: false,
  templateUrl: './item-update.component.html',
  styleUrl: './item-update.component.scss'
})
export class ItemUpdateComponent implements OnInit, OnDestroy{

  //IoC
  private service = inject(ItemService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private fb = inject(FormBuilder);

  public form!: FormGroup;
  public model: ItemModel | null= null;

  public operacaoUpdate: boolean = false;

  constructor(){
    // TODO: consertar formulario, autocomplete de Item
    this.form = this.fb.group({
      id: ['', Validators.required],
      numero_de_serie: ['', Validators.required],
      data_aquisicao: [''],
      tipo_item: ['', Validators.maxLength(2000)],
      titulo: this.fb.group({
        id: ['', Validators.required]
      })
    })
  }

  onKeyDown(event: KeyboardEvent): void {
    event.preventDefault();
  }

  // TODO: verificar erro de carregar ator e diretor
  preencherForm(model: ItemModel): void{
    this.form.patchValue({
      id: model.id,
      numero_de_serie: model.numero_de_serie,
      data_aquisicao: model.data_aquisicao,
      tipo_item: model.tipo_item,
      titulo: {
        id: model.titulo.id
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
      (item: ItemModel) => {
        if (this.model !== null) {
          this.service.updateItem(item).subscribe(
            (response) =>{
              alert(`O Item de ID: ${response.id} foi atualizado com sucesso`)
            }
          );
        } else {
          this.service.createItem(item).subscribe(
            (response) =>{
              alert(`O Item de ID: ${response.id} foi criado com sucesso`)
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
          this.service.getItem(id).subscribe(
            (item: ItemModel) => {
              this.model = item;
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
