import React from 'react';
import classnames from 'classnames';

import { VERIFICATION_TYPES, VERIFICATION_ITEMS } from '../../constants/common';

import VerificationHeader from './verification-header/verification-header';
import VerificationContent from './verification-content/verification-content';

import verificationClassNames from '../../assets/css/blocks/verification/verification.css';

class Verification extends React.PureComponent {
  static propTypes = {
    className: React.PropTypes.string,
    match: React.PropTypes.object,
  }

  static defaultProps = {
    className: '',
    match: {},
  }

  constructor(props) {
    super(props);

    this.state = {
      selectedType: VERIFICATION_TYPES.SIGN_IN,
    };
  }

  render() {
    const { className, match } = this.props;

    const verificationClassName = classnames(verificationClassNames.verification, className);

    return (
      <div className={verificationClassName}>
        <VerificationHeader
          items={VERIFICATION_ITEMS}
          match={match}
        />
        <VerificationContent match={match} />
      </div>
    );
  }
}

export default Verification;
