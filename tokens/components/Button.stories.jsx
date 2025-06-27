import React from 'react';
import { Button } from './Button';  // ← make sure this import path is correct
import './Button.css';              // optional, if using external styles

export default {
  title: 'Components/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Click me',
};