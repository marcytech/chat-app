import { html } from 'iares';
import { Ttemplate } from './types';

export const template: Ttemplate = ({ props }) => {
  return html`
		<div class="wrap-ctx">
				<h1>Prograsive Web App</h1>
        <label>
				  <input type="text" placeholder="Search"/>
          <i class="material-symbols-rounded"> search </i>
        </label>
		</div>
	`;
};
