import { html } from 'iares';
import { Ttemplate } from './types';

export const template: Ttemplate = ({ props }) => {
  return html`
		<div class="wrap-ctx">
			<img src="/assets/images/marciely.jpg" alt="image" />
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
					<input type="text" placeholder="Enter Full Name..." />
					<span>Full Name</span>
				</label>

				<label>
				<input type="text" placeholder="41 99999 9999" class="space-left"/>
				<span>telefone</span>
				<i class="material-symbols-rounded"> call </i>
				</label>

				<button class="button-ctx">
					Enter
					<i class="material-symbols-rounded"> skip_next </i>
				</button>
			</form>
      	<p>Don't Have Account? <a href="#/signin">Signin</a></p>
		</div>
	`;
};
