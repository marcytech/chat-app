import { html } from 'iares';
import { Ttemplate } from './types';
import { AppAvatar } from '@/components/AppAvatar';
import { AppDivider } from '@/components/AppDivider';

export const template: Ttemplate = ({ props }) => html`
		<div class="wrap-ctx">
      <div class="title-ctx">
        <${AppDivider}/>
        <h1>EXISTING CONTACT IN PHONE</h1>
      </div>

      <div class="grid-ctx">
        <${AppAvatar}/>
        <div class="contact-ctx">
          <h3>Angular Ribeiro</h3>
          <p>+41 99999 9999 </p>
        </div>
        <div class="button-ctx">
          <span>+ Add</span>
        </div>
      </div>

      <div class="grid-ctx">
        <${AppAvatar}/>
        <div class="contact-ctx">
          <h3>Angular Ribeiro</h3>
          <p>+41 99999 9999 </p>
        </div>
        <div class="button-ctx">
          <span>+ Add</span>
        </div>
      </div>
		</div>
	`;
