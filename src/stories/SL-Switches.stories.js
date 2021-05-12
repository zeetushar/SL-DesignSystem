import React from 'react';
import {action} from '@storybook/addon-actions';
import Switches from '../components/Switches';
export default{
    title: 'Switches',
    component: Switches,
}
export const Switch = ()=> (<Switches onClick= {action('clicked')}></Switches>)