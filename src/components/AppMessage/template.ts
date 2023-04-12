import { html } from 'iares';
import { Ttemplate } from './types';
import { AppAvatar } from '@/components/AppAvatar';

export const template: Ttemplate = ({ props }) => html`
		<div class="wrap-ctx">
     <${AppAvatar}/>
      <div>
          <h3>Angular Ribeiro</h3>
          <p>Lorem ip Lorem ipsum Loremip Lorem ipsum dadipisicing elit Vitae.</p>
      </div>
      <div>
          <span>10 min</span>
          <span>
          <i>2</i> 
          </span>
      </div>
		</div>
	`;
