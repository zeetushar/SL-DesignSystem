import React from 'react';
import {action} from '@storybook/addon-actions';
import  WarningDialog  from '../components/Warningdialog';


export default {
title:'WarningDialog',
component:WarningDialog,
};



export const warningdialogmain = ()=> (<WarningDialog onClick= {action('clicked')}>  </WarningDialog>)
