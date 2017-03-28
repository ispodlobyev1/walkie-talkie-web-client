import React from 'react';
import classnames from 'classnames';

import dropdownClassNames from '../../../assets/css/blocks/dropdowns/dropdown/dropdown.css';

class Dropdown extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: true,
    };

    this.toggle = this.toggle.bind(this);
    this.renderChildren = this.renderChildren.bind(this);
  }

  toggle() {
    const isOpen = !this.state.isOpen;

    this.setState({
      isOpen,
    });
  }

  /**
   * @param {Object} children
   * @param {Number} index
   */
  renderChildren(children, index) {
    return React.cloneElement(children, {
      onClick: this.toggle,
      key: index,
    });
  }

  render() {
    const { className, children, renderItems } = this.props;

    const dropdownClassName = classnames(dropdownClassNames.dropdown, className);

    return (
      <div className={dropdownClassName}>
        {React.Children.map(children, this.renderChildren)}
        <div className={dropdownClassNames.dropdown__items}>
          {renderItems && renderItems()}
        </div>
      </div>
    );
  }
}

Dropdown.defaultProps = {
  className: '',
  children: null,
  renderItems: null,
};

Dropdown.propTypes = {
  className: React.PropTypes.string,
  children: React.PropTypes.object,
  renderItems: React.PropTypes.func,
};

export default Dropdown;