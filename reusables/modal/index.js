import React, { useEffect } from 'react';
import { Modal } from 'antd';

const Dialog = ({ closable = true, title = '', actions, viewHeight, children, size = '', visible, onClose, onOpen }) => {
  useEffect(() => {
    if (visible) {
      if (onOpen) {
        onOpen();
      }
    }
  }, [visible, onOpen]);

  // default size, medium
  let width = 1400;

  if (size === 'small') {
    width = 600;
  } else if (size === 'large') {
    width = 1200;
  }

  let height = '600px';

  if (viewHeight === 'small') {
    height = '240px';
  } else if (viewHeight === 'xs') {
    height = '160px';
  }

  return (
    <Modal
      closable={closable}
      title={
        <div
          style={{
            width: '100%',
            display: 'flex',
          }}
        >
          <div>{title}</div>
          <div style={{ display: 'flex', flex: '1 1 0px' }} />
          {actions !== '' && <div style={{ marginRight: '24px' }}>{actions}</div>}
        </div>
      }
      width={width}
      bodyStyle={{ height }}
      onCancel={onClose}
      visible={visible}
      footer={null}
    >
      {children}
    </Modal>
  );
};

export default Dialog;
