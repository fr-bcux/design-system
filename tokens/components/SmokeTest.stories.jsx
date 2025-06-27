import React from 'react';

export default {
  title: 'SmokeTest',
}; // ✅ This is the missing default export (called “meta”)

export const Hello = () => <div>Hello Storybook!</div>;