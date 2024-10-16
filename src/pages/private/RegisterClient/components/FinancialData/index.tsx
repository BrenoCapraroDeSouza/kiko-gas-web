import { FormEvent, memo, useState } from 'react';
import { NumericFormat } from 'react-number-format';

import { CylinderDTO, FinancialClientDTOProps } from '@/@types';
import { Button, Icon, Text } from '@/components';
import { currencyToNumber, formatCurrency } from '@/helpers';

function FinancialData(props: FinancialClientDTOProps) {
  const {
    isLoading,
    gasCylinders,
    defaultCylinders,
    onFinish,
    onPreviousStep,
  } = props;

  const [financial, setFinancial] = useState<CylinderDTO[]>(gasCylinders || []);

  function handleChangeCylinderPrice(gasCylinder: CylinderDTO): void {
    const allCylindersWithNewPrices = financial.map(cylinder =>
      cylinder.id !== gasCylinder.id ? cylinder : gasCylinder,
    );

    setFinancial(allCylindersWithNewPrices);
  }

  function handleGoBackToPreviousStep(): void {
    onPreviousStep(financial);
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    await onFinish(financial);
  }

  const hasCylinders = !!financial.length;
  const allPricesDefinedCorrectly = financial.every(
    cylinder => !!cylinder.price.toString().trim(),
  );

  return (
    <div className='px-14 py-10 bg-content rounded-2xl'>
      <Text size='alternative' weight='semibold' className='text-center mb-7'>
        Converse com o seu cliente e insera o melhor preço de gás para ele.
      </Text>

      {hasCylinders && (
        <Text weight='semibold' className='text-center mb-5'>
          Dados Financeiros
        </Text>
      )}

      <form onSubmit={onSubmit}>
        <div className='flex flex-col max-h-96 overflow-y-auto mb-5 gap-5 scrollbar scrollbar-w-2 scrollbar-thumb-secondary70 scrollbar-track-white-color'>
          {!hasCylinders && (
            <div className='flex flex-col size-full justify-center items-center mb-4'>
              <Icon variant='tray' size='large' />

              <Text weight='semibold' className='mt-4 mb-1'>
                Nenhum gás encontrado
              </Text>

              <Text weight='medium'>
                Que tal adicionar um novo gás ou verificar mais tarde?
              </Text>
            </div>
          )}

          {financial.map((cylinder, index) => {
            const isChanged = cylinder.price !== defaultCylinders[index].price;
            const priceFormatted = formatCurrency(cylinder.price);

            return (
              <div
                key={cylinder.id}
                className='flex w-full justify-between items-center px-6 py-5 border-y border-y-secondary'
              >
                <div className='flex h-full items-center gap-6'>
                  <Text weight='semibold'>{cylinder.name}</Text>

                  <Text weight='medium' color='secondary70'>
                    {isChanged ? '(Preço Alterado)' : '(Preço Padrão)'}
                  </Text>
                </div>

                <div className='flex h-full items-center gap-6'>
                  <NumericFormat
                    value={priceFormatted}
                    className='w-25 font-poppins font-semibold text-base text-right text-primary cursor-pointer rounded bg-transparent outline-none placeholder:text-primary50'
                    thousandsGroupStyle='thousand'
                    thousandSeparator='.'
                    prefix='R$ '
                    decimalSeparator=','
                    decimalScale={2}
                    allowLeadingZeros
                    allowNegative={false}
                    maxLength={11}
                    minLength={0}
                    max={9999}
                    min={0}
                    disabled={isLoading}
                    required
                    onChange={event =>
                      handleChangeCylinderPrice({
                        ...cylinder,
                        price: currencyToNumber(event.target.value),
                      })
                    }
                  />

                  <button
                    type='button'
                    title='Voltar ao preço original'
                    disabled={!isChanged || isLoading}
                    className='cursor-pointer rounded hover:opacity-90 disabled:hover:opacity-100 disabled:cursor-not-allowed transition-colors duration-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-primary'
                    onClick={() =>
                      handleChangeCylinderPrice({
                        ...cylinder,
                        price: defaultCylinders[index].price,
                      })
                    }
                  >
                    <Icon
                      variant='arrows-counter-clockwise'
                      color={isChanged ? 'primary' : 'primary50'}
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className='flex justify-between items-center gap-5'>
          <div className='w-64'>
            <Button
              title='Voltar'
              isHugWidth
              isDisabled={isLoading}
              onClick={handleGoBackToPreviousStep}
            />
          </div>

          <div className='w-64'>
            <Button
              type='submit'
              title='Finalizar'
              isLoading={isLoading}
              isDisabled={
                !allPricesDefinedCorrectly || !hasCylinders || isLoading
              }
              isHugWidth
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default memo(FinancialData);
