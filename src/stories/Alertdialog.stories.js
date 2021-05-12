import React from 'react';
import {action} from '@storybook/addon-actions';
import  AlertDialog  from '../components/Alertdialog';


export default {
title:'AlertDialog',
component:AlertDialog,
};



export const alertdialogmain = ()=> (<AlertDialog onClick= {action('clicked')}>  </AlertDialog>)
