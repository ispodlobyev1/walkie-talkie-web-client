import React from 'react';

import routes from '../constants/routes/routes';

import Verification from '../components/verification/verification';

import verificationClassNames from '../assets/css/containers/user-verification/user-verification.css';

export default class VerificationContainer extends React.Component {

  static propTypes = {
    match: React.PropTypes.object,
    history: React.PropTypes.object,
  };

  static defaultProps = {
    match: {},
    history: {},
  };

  componentWillMount() {
    const { match, history } = this.props;

    if (match.isExact) {
      const { location, replace } = history;

      const redirectToPathName = `${location.pathname}${routes.userVerification.url.signin}`;
      replace(redirectToPathName);
    }
  }

  render() {
    const { match } = this.props;

    return (
      <div className={verificationClassNames['user-verification']}>
        <Verification match={match} className={verificationClassNames['user-verification__content']} />
      </div>
    );
  }
}
