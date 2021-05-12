import React from 'react';
import {action} from '@storybook/addon-actions';
import Partnersheader from '../components/Partnersheader';
export default{
    title: 'Partnersheader',
    component: Partnersheader,
}
export const Partnersheader1 = ()=> (<Partnersheader onClick= {action('clicked')}></Partnersheader>)