import React, { Component } from 'react';
import styles from './Nav.module.scss'

class Nav extends Component {
    
    render() { 
        return ( 
            <div className={styles.navbar}>
                <h1>OMDb Search</h1>
                <input type="text" onChange={this.props.handleSearch} placeholder='Search by movie or year'/>
            </div>
         );
    }
}
 
export default Nav;