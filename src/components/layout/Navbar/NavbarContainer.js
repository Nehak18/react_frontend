import React, { Component } from 'react'
import Navbarview from './Navbarview';

 class NavbarContainer extends Component {
     constructor(props){
         super(props)
         this.state={
            prefLang: this.props.i18n.languages[0]
         }
     }
     handleChangeLang = (event) => {
         
         
         this.setState({ prefLang: [event.target.value] })
     }
    render() {
        return (
            <div>
                <Navbarview  {...this.props} 
                 handleChangeLang={this.handleChangeLang} 
                 prefLang = {this.state.prefLang} />
            </div>
        )
    }
}

export default NavbarContainer;