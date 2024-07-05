import { TypeAnimation } from 'react-type-animation';

const TextEffect2 = () => {
  return (
    <TypeAnimation
      sequence={[
        "Consider me the talent you've been searching for..",
        1000,
        'I am looking for an internship.',
        1000,
        "I could be the perfect fit for your team !",
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  );
};

export default TextEffect2;