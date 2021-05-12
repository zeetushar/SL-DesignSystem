import React from 'react';
import {action} from '@storybook/addon-actions';
import PartnerHeader from '../components/PartnerPortal';
export default{
    title: 'PartnerHeader',
    component: PartnerHeader,
}
export const PartnerHeader1 = ()=> (<PartnerHeader> onClick= {action('clicked')}></PartnerHeader>)