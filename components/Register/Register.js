import bootstrap from '../../utils/bootstrapImport.js';
import css from '../../utils/cssImport.js';



const template = document.createElement('template');
template.innerHTML=`
${bootstrap}
${css.register}

	<div>
		<h1>
			REGISTER TEST PAGE
		</h1>
	</div>
`;
class Register extends HTMLElement{
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

window.customElements.define('register-page', Register);
