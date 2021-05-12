import React from 'react';
import {action} from '@storybook/addon-actions';
import DonutChart from '../components/DonutChart';

export default{
    title: 'DonutChart',
    component: DonutChart,
}
export const DonutCharts = ()=> (<DonutChart onClick= {action('clicked')}></DonutChart>)