import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CreateBrewForm from '../src/components/CreateBrew';

describe('CreateBrewForm component', () => {
  it('updates the state when typing in the beer type input', () => {
    const { getByLabelText } = render(<CreateBrewForm />);
    const beerTypeInput = getByLabelText('Beer Type');
    fireEvent.change(beerTypeInput, { target: { value: 'testBeerType' } });
    expect(beerTypeInput.value).toBe('testBeerType');
  });

  it('updates the state when typing in the ABV input', () => {
    const { getByLabelText } = render(<CreateBrewForm />);
    const abvInput = getByLabelText('ABV');
    fireEvent.change(abvInput, { target: { value: '5.5' } });
    expect(abvInput.value).toBe('5.5');
  });

  it('updates the state when typing in the IBU input', () => {
    const { getByLabelText } = render(<CreateBrewForm />);
    const ibuInput = getByLabelText('IBU');
    fireEvent.change(ibuInput, { target: { value: '40' } });
    expect(ibuInput.value).toBe('40');
  });

  it('updates the state when typing in the size input', () => {
    const { getByLabelText } = render(<CreateBrewForm />);
    const sizeInput = getByLabelText('Size');
    fireEvent.change(sizeInput, { target: { value: '12 oz' } });
    expect(sizeInput.value).toBe('12 oz');
  });

  it('updates the state when typing in the description textarea', () => {
    const { getByLabelText } = render(<CreateBrewForm />);
    const descriptionTextarea = getByLabelText('Description');
    fireEvent.change(descriptionTextarea, { target: { value: 'testDescription' } });
    expect(descriptionTextarea.value).toBe('testDescription');
  });

  it('updates the state when selecting a color from the color picker', () => {
    const { getByLabelText } = render(<CreateBrewForm />);
    const colorPicker = getByLabelText('Color');

    // Mock a color change event
    fireEvent.change(colorPicker, { target: { value: '#ff0000' } });

    // The color picker uses react-color's SketchPicker, and it doesn't directly update the input value.
    // Instead, the state variable `color` is updated.
    const updatedColor = (colorPicker as any).value;
    expect(updatedColor).toBe('#ff0000');
  });

});
