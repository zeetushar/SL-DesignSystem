import React from 'react';
import ReactDOM from 'react-dom';
import {action} from '@storybook/addon-actions';
import ButtonDark from '../components/ButtonDark'
export default{
    title: 'ButtonDark',
    component: ButtonDark,
}
export const ButtonDarkMode = ()=> (<ButtonDark onClick= {action('clicked')}></ButtonDark>)