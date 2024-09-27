import { FormEvent, useState } from 'react';

import { Button, Input } from '@/components';

export function CadastroCliente() {
  const [nome, setNome] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [documento, setDocumento] = useState<string>('');
  const [telefone, setTelefone] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const [confirmarSenha, setConfirmarSenha] = useState<string>('');

  function onSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
  }

  return (
    <main className='flex items-center justify-center min-h-screen bg-background'>
      <div className='bg-content p-10 rounded-lg shadow-lg w-[756px] h-[756px]'>
        <h2 className='text-secundary text-center mb-8'>
          Complete os campos abaixo para criar uma conta para <br />o seu
          cliente.
        </h2>

        <h1 className='text-secundary text-center mb-3'>Dados Cadastrais</h1>

        <form onSubmit={onSubmit}>
          <div className='mb-4'>
            <Input
              value={nome}
              type='text'
              placeholder='Nome'
              onChangeText={setNome}
            />
          </div>

          <div className='mb-4'>
            <Input
              value={email}
              type='email'
              placeholder='E-mail'
              onChangeText={setEmail}
            />
          </div>

          <div className='mb-4'>
            <Input
              value={documento}
              type='document'
              placeholder='CPF/CNPJ'
              onChangeText={setDocumento}
            />
          </div>

          <div className='mb-4'>
            <Input
              value={telefone}
              type='tel'
              placeholder='Telefone'
              onChangeText={setTelefone}
            />
          </div>

          <div className='mb-4'>
            <Input
              value={senha}
              type='password'
              placeholder='Senha'
              onChangeText={setSenha}
            />
          </div>

          <div className='mb-6'>
            <Input
              value={confirmarSenha}
              type='password'
              placeholder='Confirmar Senha'
              onChangeText={setConfirmarSenha}
            />
          </div>

          <div className='flex justify-end w-[256px] ml-auto'>
            <Button isHugWidth type='submit' title='Próximo' />
          </div>
        </form>
      </div>
    </main>
  );
}
