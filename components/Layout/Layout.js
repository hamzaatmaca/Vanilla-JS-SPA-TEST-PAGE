import bootstrap from '../../utils/bootstrapImport.js';
import css from '../../utils/cssImport.js';



const template = document.createElement('template');
template.innerHTML=`
${bootstrap}
${css.layout}

		<main>
		
			<div>
				<slot name="navbar"/>
			</div>

			<div>
				<slot name="categoryComponent"/>
			</div>

			<div>
				<slot name="footer"/>
			</div>

		</main>
	
`;
class Layout extends HTMLElement{
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

window.customElements.define('lay-out', Layout);
