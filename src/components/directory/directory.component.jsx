import React from "react";
import './directory.styles.scss'
import MenuItem from '../menu-item/menu-item.component'
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selectiors";
import { connect } from "react-redux";


const Directory = ({sections}) => {      
  return (
      <div className="directory-menu">
          {
              sections.map(({id, ...otherSectionProps}) => (
                  <MenuItem key = {id} {...otherSectionProps} />
              ))
          }
      </div>
  )
}


const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})


export default connect(mapStateToProps)(Directory);