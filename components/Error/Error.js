import bootstrap from '../../utils/bootstrapImport.js';
import css from '../../utils/cssImport.js';

const template = document.createElement('template');
template.innerHTML=`
${bootstrap}
${css.error}

	<div>
		<h1>
			404 ERROR TEST PAGE
		</h1>
	</div>
`;
class Err extends HTMLElement{
	constructor(){
		super();

		this.attachShadow({mode : 'open'});
		this.shadowRoot.appendChild(template.content.cloneNode(true));
		
	}
	
	connectedCallback(){
		
	}
	disconnectedCallback(){
		
	}
}

window.customElements.define('error-page', Err);
