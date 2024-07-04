import { TypeAnimation } from 'react-type-animation';

const TextEffect2 = () => {
  return (
    <TypeAnimation
      sequence={[
        'I could be the next talent you are looking for.',
        1000,
        'Contact Me Today !',
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  );
};

export default TextEffect2;