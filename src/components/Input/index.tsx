import React, {
  InputHTMLAttributes,
  useCallback,
  useState,
  useRef,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => {
  const [isFocus, setIsfocus] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputFocus = useCallback(() => {
    setIsfocus(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsfocus(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);
  return (
    <Container isFocus={isFocus} isFilled={isFilled}>
      {Icon && <Icon size={22} />}
      <input
        ref={inputRef}
        {...rest}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
    </Container>
  );
};

export default Input;
