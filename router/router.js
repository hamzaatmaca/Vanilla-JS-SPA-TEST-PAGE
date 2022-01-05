//STATIC COMPONENTS
import * as Navbar  from '../components/Navbar/Navbar.js';
import * as Footer from '../components/Footer/Footer.js';
import * as Layout from '../components/Layout/Layout.js';
import * as Category from '../components/Category/Category.js';
import * as MediaCategory from '../components/MediaCategory/MediaCategory.js';
//DYNAMIC COMPONENTS
import * as Home from '../components/Home/Home.js';
import * as Register from '../components/Register/Register.js';
import * as Error from '../components/Error/Error.js';
import * as Login from '../components/Login/Login.js';
class Router{

	constructor(){
		this.root = document.getElementById('root');
		this.path = window.location.href.split('#')
		this.url = this.path[this.path.length-1]	
	}

	layout(component){

		this.root.innerHTML= `

		
			<lay-out>
				
				<div slot="navbar"><nav-bar></nav-bar></div>
					
					<div id="mainView" slot="categoryComponent">
						<category-side></category-side>
						<mediacategory-side></mediacategory-side>
						<div id="componentLayout">${component}</div>
					</div>
				
				<div slot="footer"><foo-ter></foo-ter></div>
			
			</lay-out>
		`
	}

	engine(){
		//console.log(this.url)

		if(this.url === this.path[0]){
			this.layout('<home-page></home-page>');
		}
		else{
			switch(this.url){
				case '':
				this.layout('<home-page></home-page>')
				break;

				case 'register':
				this.layout('<register-page></register-page>')
				break;

				case 'login':
				this.layout('<login-page></login-page>')
				break;

				default:
				this.layout('<error-page></error-page>')

			}
		}
	}
	
}

let router = new Router();
router.engine();

export default router