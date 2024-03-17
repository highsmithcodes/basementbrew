import React from 'react';
import { render } from '@testing-library/react';
import UserProfile from '../src/pages/updateProfile';

describe('UpdateProfile component', () => {
    it('renders correctly', () => {
      const { getByText } = render(<UserProfile />);
      const headerElement = getByText('Update Profile');
      expect(headerElement).toBeInTheDocument();
    });
  
    it('updates the state when typing in the username input', () => {
      const { getByLabelText } = render(<UserProfile />);
      const usernameInput = getByLabelText('Username');
      fireEvent.change(usernameInput, { target: { value: 'testUsername' } });
      expect(usernameInput.value).toBe('testUsername');
    });
  
    it('updates the state when typing in the description textarea', () => {
      const { getByLabelText } = render(<UserProfile />);
      const descriptionTextarea = getByLabelText('Description');
      fireEvent.change(descriptionTextarea, { target: { value: 'testDescription' } });
      expect(descriptionTextarea.value).toBe('testDescription');
    });
  
    it('updates the state when typing in the location input', () => {
      const { getByLabelText } = render(<UserProfile />);
      const locationInput = getByLabelText('Location');
      fireEvent.change(locationInput, { target: { value: 'testLocation' } });
      expect(locationInput.value).toBe('testLocation');
    });
    // 
});