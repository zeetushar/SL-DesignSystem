import React from 'react';
import {action} from '@storybook/addon-actions';
import GISHeader from '../components/GISHeader';
export default{
    title: 'GISHeader',
    component: GISHeader,
}
export const GISHeader1 = ()=> (<GISHeader onClick= {action('clicked')}></GISHeader>)