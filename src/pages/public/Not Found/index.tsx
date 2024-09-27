import { Button, Text } from '@/components';
import { PRIMARY_LOGO } from '@/config';

export function NotFound() {
  return (
    <main className='flex h-screen bg-background'>
      <div className='flex flex-1 justify-center items-center'>
        <img src={PRIMARY_LOGO} alt='Logo do Kiko Gás' className='w-72 h-60' />
      </div>

      <aside className='flex flex-col w-128 bg-content justify-center items-center px-16 py-8 border-l border-secondary'>
        <div className='flex flex-col mb-10 gap-7'>
          <Text size='title' weight='semibold' className='text-center'>
            Ops! Parece que você se <br /> perdeu no caminho...
          </Text>

          <Text size='alternative' weight='medium' className='text-center'>
            A pagina que você procura <br /> não está aqui.
          </Text>
        </div>

        <div className='w-[368px]'>
          <Button type='submit' title='Voltar ao Inicio' isHugWidth />
        </div>
      </aside>
    </main>
  );
}

export default NotFound;
