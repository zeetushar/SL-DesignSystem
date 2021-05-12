import React from 'react';
import {action} from '@storybook/addon-actions';
import GISHeaderMenu from '../components/GISHeaderMenu';
export default{
    title: 'GISHeaderMenu',
    component: GISHeaderMenu,
}
export const GISHeaderMenu1 = ()=> (<GISHeaderMenu onClick= {action('clicked')}></GISHeaderMenu>)