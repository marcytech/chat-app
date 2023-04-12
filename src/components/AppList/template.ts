import { html } from 'iares';
import { Ttemplate } from './types';

import { AppMessage } from '@/components/AppMessage';
import { AppSearch } from '@/components/AppSearch';

export const template: Ttemplate = ({ props }) => {
  return html`
		<div class="wrap-ctx">
			<${AppSearch}/>
			<${AppMessage}/>
			<${AppMessage}/>
			<${AppMessage}/>
			<${AppMessage}/>
			<${AppMessage}/>
			<${AppMessage}/>
			<${AppMessage}/>
			<${AppMessage}/>
			<${AppMessage}/>
		</div>
	`;
};
