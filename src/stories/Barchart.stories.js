import React from 'react';
import {action} from '@storybook/addon-actions';
import  BarChart  from '../components/BarChartPCI' ;
import  BarChartSCI  from '../components/BarChartSCI' ;


export default {
title:'BarChart',
component:BarChart,
tite: 'BarchartSCI',
component:BarChartSCI
};



export const BarChartPCI1= ()=> (<BarChart onClick= {action('clicked')}> Create </BarChart>)
export const BarChartSCI2= ()=> (<BarChartSCI onClick= {action('clicked')}> Create </BarChartSCI>)