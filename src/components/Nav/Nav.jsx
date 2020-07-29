import React, { Component } from 'react';
import styles from './Nav.module.scss';
import search from './search-solid.svg';

class Nav extends Component {
    
    render() { 
        return ( 
            <div className={styles.navbar}>
                <h1>OMDb Search</h1>
                <section>
                    <input id='searchbox' type="text" onChange={this.props.handleSearch} placeholder='Search by movie and year'/>
                    <label htmlFor='searchbox'><img src={search} alt="Search"></img></label>
                </section>
            </div>
         );
    }
}
 
export default Nav;