import { html } from 'iares';
import { Ttemplate } from './types';

export const template: Ttemplate = ({ props }) => {
  return html`
	<div class="wrap-ctx">
		<h1>Verification Account</h1>
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
				<input type="text" placeholder="Enter Verification Number" />
				<span>verification</span>
				<i class="material-symbols-rounded"> call </i>
			</label>

			<button class="button-ctx"> 
				<span class="material-symbols-rounded">
				done
				</span>
        <span>Verify</span>
			</button>
		</form>
		<p>
      <span>Have's an account? </span> 
      <a href="#/login"> Login</a>
    </p>
	</div>
`;
};
