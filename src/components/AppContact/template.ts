import { html } from 'iares';
import { Ttemplate } from './types';

export const template: Ttemplate = ({ props }) => {
  return html`
  <div class="wrap-ctx">
				<h1>ADD NEW CONTECT</h1>
            <label>
              <input type="text" placeholder="41 99999 9999"/>
              <span>Phone Number</span>
              <i class="material-symbols-rounded"> call </i>
              <button>+ Add Contact</button>
          </label>
		</div>
    
	`;
};
