import React from 'react';
import {action} from '@storybook/addon-actions';
import  Buttondashboard  from '../components/Button/Button';


export default {
title:'Buttondashboard',
component:Buttondashboard,
};



export const Dashboard = ()=> (<Buttondashboard onClick= {action('clicked')}> Create </Buttondashboard>)
