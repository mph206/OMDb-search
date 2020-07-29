import React, { Component } from 'react';
import styles from './Nav.module.scss';
import search from './search-solid.svg';
import ascending from './sort-numeric-up.svg';
import descending from './sort-numeric-down.svg';


class Nav extends Component {
    
    render() { 
        return ( 
            <div className={styles.navbar}>
                <h1>OMDb Search</h1>
                <section>
                    <input id='searchbox' type="text" onChange={this.props.handleSearch} placeholder='Search by movie and year'/>
                    <label htmlFor='searchbox'><img className={styles.searchIcon} src={search} alt="Search"></img></label>
                    <img onClick={this.props.handleSort} className={styles.sortIcon} src={this.props.sortAscending ? ascending : descending} alt={this.props.sortAscending ? 'Sort by year: ascending' : 'Sort by year: descending'}/>
                </section>
            </div>
         );
    }
}
 
export default Nav;