import { Icon } from '@src/ui/components/Icon';
import cx from 'classnames';
import React, { useState } from 'react';

interface ButtonProps {
  children?: JSX.Element | string;
  icon?: string;
  name?: string;
  disabled?: boolean;
  active?: boolean;
  tooltip?: string;
  onClick();
}

export const Button = (props: ButtonProps) => {
  const [hover, setHover] = useState(false);

  return (
    <button
      type='button'
      tabIndex={0}
      onClick={props.onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onTouchStart={() => setHover(true)}
      onTouchEnd={() => setHover(false)}
      onTouchCancel={() => setHover(false)}
      className={cx('igui_button', {
        [`igui_button_name-${props.name}`]: !!props.name,
        'igui_button_state-disabled': props.disabled,
        'igui_button_state-active': props.active,
      })}
    >
      {!!props.children && props.children}
      {props.icon && <Icon icon={props.icon} />}
      {hover && props.tooltip && (
        <span className='igui_button_tooltip'>{props.tooltip}</span>
      )}
    </button>
  );
};
