import React, {Component} from 'react';
import PropTypes from 'prop-types';
import scrollToY from 'scroll-to-y';
import ButtonExplore from './ButtonExplore';
import LinkStretched from '../../LinkStretched/index';
import {BUTTON_EXPLORE, BUTTON_ABOUT} from '../../../constants/index';
import './styles.scss';


class Home extends Component {
  scrollToProjects = (section, scrollTo) => {
    if (scrollTo) {
      scrollToY(
        document.getElementById(section).offsetTop,
        500,
        'easeInOutQuint'
      );
    }
  };


  clickAboutButton = () => {
    this.props.toggleAboutSection();
  };


  render() {
    const {data} = this.props;
    const personData = data.personData || {};

    return (
      <div>
        <section id="home" className="home banner text-c-mercury-light">
          <h3 className="home__name font-s-36">
            {personData.first_name + ' ' + personData.last_name}
          </h3>

          <ButtonExplore
            onClick={this.scrollToProjects}
          >{BUTTON_EXPLORE.text}</ButtonExplore>

          <div className="switcher switcher--white">
            <div className="switcher__line line--top"/>
            <LinkStretched
              onClick={this.clickAboutButton}
              cssClasses="switcher__link font-s-12-secondary text-c-dune"
              text={BUTTON_ABOUT.text}
            ></LinkStretched>
            <div className="switcher__line line--bottom"/>
          </div>
        </section>
      </div>
    );
  }
}


Home.propTypes = {
  data: PropTypes.shape({}),
  toggleAboutSection: PropTypes.func
};

Home.defaultProps = {
  data: {},
  toggleAboutSection: () => {
  }
};


export default Home;
