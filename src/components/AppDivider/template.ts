import { html } from 'iares';
import { Ttemplate } from './types';

export const template: Ttemplate = ({ props }) => {
  return html`
		<div class="wrap-ctx">
       <div class="trace-ctx"></div>
		</div>
	`;
};
