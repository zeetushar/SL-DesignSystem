import React from 'react';
import {action} from '@storybook/addon-actions';
import  TaskCalendarButton  from '../components/TaskCalendarEvent';


export default {
title:'TaskCalendarButton',
component:TaskCalendarButton,
};



export const TaskCalendarEventButton = ()=> (<TaskCalendarButton onClick= {action('clicked')}>Create </TaskCalendarButton>)
