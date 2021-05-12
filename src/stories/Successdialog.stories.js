import React from 'react';
import {action} from '@storybook/addon-actions';
import  SuccessDialog  from '../components/Successdialog';


export default {
title:'SuccessDialog',
component:SuccessDialog,
};



export const successdialogmain = ()=> (<SuccessDialog onClick= {action('clicked')}>  </SuccessDialog>)
