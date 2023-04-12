import { html } from 'iares';
import { Ttemplate } from './types';

export const template: Ttemplate = ({ props }) => {
  return html`
		<div class="wrap-ctx">
			<h1>Signin for Account</h1>
			<form class="form-ctx">
				${props.tabs.map(
          (tab) => html`
						<div class="tab-ctx">
							<i class="material-symbols-rounded"> ${tab.icon} </i>
							<p>${tab.title}</p>
						</div>
					`,
        )}

				<label>
					<input type="text" placeholder="41 99999 9999" />
					<span>telefone</span>
					<i class="material-symbols-rounded"> call </i>
				</label>

				<button class="button-ctx">Nex Step
					<i class="material-symbols-rounded"> skip_next </i>
				</button>
				</form>
</div>
	`;
};
