import React from 'react';
import nav from './Skills.module.css';
import img from '../../img/st.png';
import icon1 from '../../img/html.png';
import icon2 from '../../img/css.png';
import icon3 from '../../img/git.png';
import icon4 from '../../img/react.png';
import icon5 from '../../img/node_js.png';
import icon6 from '../../img/redux.png';

const Skills = () => {
  return (
    <div className="container">
      <div className={nav.col4}>
        <div className={nav.col3}>
          <h4 className={nav.subtitle}>Skills</h4>
          <img src={img} alt="star" className={nav.star} />
          <img src={img} alt="star" className={nav.star} />
          <img src={img} alt="star" className={nav.star} />
          <img src={img} alt="star" className={nav.star} />
          <img src={img} alt="star" className={nav.star} />
        </div>
        <div className={nav.col5}>
          <img src={icon1} className={nav.icon} alt=""/>
          <img src={icon2} className={nav.icon} alt=""/>
          <img src={icon3} className={nav.icon} alt=""/>
          <img src={icon4} className={nav.icon} alt=""/>
          <img src={icon5} className={nav.icon} alt=""/>
          <img src={icon6} className={nav.icon} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default Skills;