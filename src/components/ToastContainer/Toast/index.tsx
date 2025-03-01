import React, { useEffect } from 'react';
import {
  FiAlertCircle,
  FiXCircle,
  FiCheckCircle,
  FiInfo,
} from 'react-icons/fi';
import { MessageToast, useToast } from '../../../Hooks/ToastContext';
import { Container } from './styles';

interface ToastProps {
  message: MessageToast;
  // eslint-disable-next-line @typescript-eslint/ban-types
  style: object;
}

const icons = {
  info: <FiInfo size={24} />,
  success: <FiCheckCircle size={24} />,
  error: <FiAlertCircle size={24} />,
};

const Toast: React.FC<ToastProps> = ({ message, style }) => {
  const { removerToast } = useToast();
  useEffect(() => {
    const time = setTimeout(() => {
      removerToast(message.id);
    }, 3000);

    return () => {
      clearTimeout(time);
    };
  }, [removerToast, message]);
  return (
    <Container
      type={message.type}
      hasDescription={Number(!!message.message)}
      style={style}
    >
      {icons[message.type || 'info']}

      <div>
        <strong>{message.title}</strong>
        {message.message && <p>{message.message}</p>}
      </div>

      <button type="button" onClick={() => removerToast(message.id)}>
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

export default Toast;
