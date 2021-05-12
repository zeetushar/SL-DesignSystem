import React from 'react';
import {action} from '@storybook/addon-actions';
import Dashboardheader from '../components/Dashboardheader';

export default{
    title: 'Dashboardheader',
    component: Dashboardheader,
}
export const Dashboardheaders= ()=> (<Dashboardheader onClick= {action('clicked')}></Dashboardheader>)