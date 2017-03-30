import React from 'react';

import { VERIFICATION_TYPES } from '../../../constants/common';

import VerificationSignIn from '../verification-sign-in/verification-sign-in';
import VerificationSignUp from '../verification-sign-up/verification-sign-up';

import verificationContentClassNames from '../../../assets/css/blocks/verification/verification-content/verification-content.css';

class VerificationContent extends React.PureComponent {
  /**
   * @param {String} type
   * @returns {Object}
   */
  static renderContent(type) {
    switch (type) {
      case VERIFICATION_TYPES.SIGN_IN:
        return <VerificationSignIn />;
      case VERIFICATION_TYPES.SIGN_UP:
        return <VerificationSignUp />;
      default:
        return null;
    }
  }

  render() {
    const { activeTypeItem } = this.props;

    return (
      <div className={verificationContentClassNames['verification-content']}>
        {VerificationContent.renderContent(activeTypeItem)}
      </div>
    );
  }
}

VerificationContent.defaultProps = {
  activeTypeItem: '',
};

VerificationContent.propTypes = {
  activeTypeItem: React.PropTypes.string,
};

export default VerificationContent;
