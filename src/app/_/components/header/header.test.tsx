import React from 'react';
import { render, screen } from '@testing-library/react';

import { Header } from './header';

describe('Header component', () => {
    it('renders the name', () => {
        render(<Header name="John Doe" role="Developer" description="Experienced developer" />);
        expect(screen.getByRole('heading', { name: 'John Doe' })).toBeVisible();
        });

        it('renders the role', () => {
        render(<Header name="John Doe" role="Developer" description="Experienced developer" />);
        expect(screen.getByRole('heading', { name: 'Developer' })).toBeVisible();
        });

        it('renders the description', () => {
        render(<Header name="John Doe" role="Developer" description="Experienced developer" />);
        expect(screen.getByText('Experienced developer')).toBeVisible();
        });

        it('renders the separator', () => {
        render(<Header name="John Doe" role="Developer" description="Experienced developer" />);
        expect(screen.getByTestId('header-separator')).toBeVisible();
    });
});
