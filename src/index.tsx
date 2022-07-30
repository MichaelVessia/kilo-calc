/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import App from './App';
import "tailwindcss/tailwind.css";

render(() => <App />, document.getElementById('root') as HTMLElement);
