import { render, screen } from '@testing-library/react'
import ButtonIcon from 'core/components/ButtonIcon';

test('should render AuthCardButton', () => {
  render(
    <ButtonIcon
      buttonTitle="FAZER LOGIN"
    />
  )

  const buttonTitle = screen.getByText('FAZER LOGIN')
  const arrowImage = screen.getByTestId('arrow-image')

  expect(buttonTitle).toBeInTheDocument()
  expect(arrowImage).toBeInTheDocument()
})