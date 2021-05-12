import React from 'react';
import ReactDOM from 'react-dom';
import {action} from '@storybook/addon-actions';
import Buttonpopup from '../components/ButtonPopUp'
export default{
    title: 'Buttonpopuop',
    component: Buttonpopup,
}
export const PopUp = ()=> (<Buttonpopup onClick= {action('clicked')}></Buttonpopup>)