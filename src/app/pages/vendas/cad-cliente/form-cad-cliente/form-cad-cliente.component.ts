import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, Form, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-cad-cliente',
  templateUrl: './form-cad-cliente.component.html',
  styleUrl: './form-cad-cliente.component.scss'
})
export class FormCadClienteComponent {

  constructor(){
    this.formGeral.controls['tipo_cliente'].valueChanges.subscribe((val)=>{
      this.toggleTipoCliente(val?val:'')
    })
    this.toggleTipoCliente('pf');
  }

  //Formulário
  form = new FormGroup({
    geral:new FormGroup({
      id:new FormControl(''),
      ativo:new FormControl(true),
      tipo_cliente:new FormControl('pf',Validators.required),
      nome:new FormControl(''),
      sobrenome:new FormControl(''),
      razao_social:new FormControl(''),
      cpf:new FormControl(''),
      cnpj:new FormControl(''),
      dt_nascimento:new FormControl(''),
    }),
    contato:new FormGroup({
      telefone:new FormControl('',Validators.required),
      telefone2:new FormControl(''),
      email:new FormControl('',Validators.required),
    }),
    endereco:new FormGroup({
      cep:new FormControl('',Validators.required),
      logradouro:new FormControl('',Validators.required),
      complemento:new FormControl(''),
      numero:new FormControl(''),
      sem_numero:new FormControl(''),
      bairro:new FormControl('',Validators.required),
      cidade:new FormControl('',Validators.required),
      estado:new FormControl('',[Validators.required,Validators.maxLength(2)]),
      pais:new FormControl('BR',[Validators.required,Validators.maxLength(2)]),
    })
})

  get formGeral():FormGroup{
    return this.form.get('geral') as FormGroup;
  }

  get formContato():FormGroup{
    return this.form.get('contato') as FormGroup;
  }

  get formEndereco():FormGroup{
    return this.form.get('endereco') as FormGroup;
  }

  toggleTipoCliente(cliente:string){
    if(cliente === 'pj'){
      //Requer os valores de CNPJ e Razão Social
      this.formGeral.controls['cnpj'].setValidators([Validators.required]);
      this.formGeral.controls['razao_social'].setValidators([Validators.required]);
      //Limpa e torna não obrigatório os valores de Nome, Sobrenome, CPF e Data de nascimento
      this.formGeral.controls['cpf'].removeValidators([Validators.required]);
      this.formGeral.controls['nome'].removeValidators([Validators.required]);
      this.formGeral.controls['sobrenome'].removeValidators([Validators.required]);
      this.formGeral.controls['dt_nascimento'].removeValidators([Validators.required]);
      this.formGeral.controls['cpf'].setValue(null)
      this.formGeral.controls['nome'].setValue(null)
      this.formGeral.controls['sobrenome'].setValue(null)
      this.formGeral.controls['dt_nascimento'].setValue(null)
      return;
    }
    //Requer os valores de Nome, Sobrenome, CPF e Data de Nascimento
    this.formGeral.controls['cpf'].setValidators([Validators.required]);
    this.formGeral.controls['nome'].setValidators([Validators.required]);
    this.formGeral.controls['sobrenome'].setValidators([Validators.required]);
    this.formGeral.controls['dt_nascimento'].setValidators([Validators.required]);
    this.formGeral.controls['cnpj'].setValue(null)
    this.formGeral.controls['razao_social'].setValue(null)
    //Limpa e torna não obrigatório os valores de CNPJ e Razão Social
    this.formGeral.controls['cnpj'].removeValidators([Validators.required]);
    this.formGeral.controls['razao_social'].removeValidators([Validators.required]);

  }
}
