import bootstrap from '../../utils/bootstrapImport.js';
import css from '../../utils/cssImport.js';

const template = document.createElement('template');
template.innerHTML=`
${bootstrap}
${css.home}

	<div>
		<h1>
			HOME TEST PAGE
		</h1>
	</div>
`;
class Home extends HTMLElement{
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

window.customElements.define('home-page', Home);
