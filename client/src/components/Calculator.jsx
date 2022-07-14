import React, { useContext, useState } from 'react';
import { DarkModeContext } from '../contexts/DarkModeContext';

// Components
import Peep30 from '../assets/collections/open-peeps/30.png';

// !Inspired in: https://www.sitepoint.com/react-tutorial-build-calculator-app/

const Calculator = () => {
  const [calc, setCalc] = useState({
    sign: '', //  selected sign
    num: 0, // entered value
    res: 0, // calculated value
  });

  const { darkMode } = useContext(DarkModeContext);

  const btnValues = [
    ['C', '+-', '%', '/'],
    [7, 8, 9, 'X'],
    [4, 5, 6, '-'],
    [1, 2, 3, '+'],
    [0, '.', '='],
  ];

  // ------------------------------------------ Functions ------------------------------------------

  // Function that takes a number, formats it into the string format and creates the space separators for the thousand mark.
  const toLocaleString = (num) =>
    String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1 ');

  // Function that processes the string of numbers, by first removing the spaces and then converting it to number.
  const removeSpaces = (num) => num.toString().replace(/\s/g, '');

  // Function is triggered only if any of the number buttons (0–9) are pressed.
  // Then it gets the value of the button and adds that to the current num value.
  const numClickHandler = (event) => {
    event.preventDefault();
    const value = event.target.innerHTML;
    if (removeSpaces(calc.num).length < 16) {
      setCalc({
        ...calc,
        num:
          calc.num === 0 && value === '0'
            ? '0'
            : removeSpaces(calc.num) % 1 === 0
              ? toLocaleString(Number(removeSpaces(calc.num + value)))
              : toLocaleString(calc.num + value),
        res: !calc.sign ? 0 : calc.res,
      });
    }
  };

  // Function gets fired only if the decimal point (.) is pressed.
  // It adds the decimal point to the current num value, making it a decimal number.
  // It will also make sure that no multiple decimal points are possible.
  const commaClickHandler = (event) => {
    event.preventDefault();
    const value = event.target.innerHTML;
    setCalc({
      ...calc,
      num: !calc.num.toString().includes('.') ? calc.num + value : calc.num,
    });
  };

  // Function gets fired when the user press either +, –, * or /.
  // The particular value is then set as a current sign value in the calc objec
  const signClickHandler = (event) => {
    event.preventDefault();
    const value = event.target.innerHTML;
    setCalc({
      ...calc,
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    });
  };

  // Function calculates the result when the equals button (=) is pressed.
  // The calculation is based on the current num and res values, as well as the sign selected.
  // The returned value is then set as the new res for the further calculations.
  const equalsClickHandler = () => {
    if (calc.sign && calc.num) {
      const math = (a, b, sign) =>
        sign === '+'
          ? a + b
          : sign === '-'
            ? a - b
            : sign === 'X'
              ? a * b
              : a / b;
      setCalc({
        ...calc,
        res:
          calc.num === '0' && calc.sign === '/'
            ? 'Can&#39;t divide with 0'
            : toLocaleString(
              math(
                Number(removeSpaces(calc.res)),
                Number(removeSpaces(calc.num)),
                calc.sign
              )
            ),
        sign: '',
        num: 0,
      });
    }
  };

  // Function that  first checks if there’s any entered value (num) or calculated value (res). 
  // Then it inverts them by multiplying with -1
  const invertClickHandler = () => {
    setCalc({
      ...calc,
      num: calc.num ? toLocaleString(removeSpaces(calc.num) * -1) : 0,
      res: calc.res ? toLocaleString(removeSpaces(calc.res) * -1) : 0,
      sign: '',
    });
  };

  // Function that checks if there’s any entered value (num) or calculated value (res) and then calculates the percentage.
  const percentClickHandler = () => {
    let num = calc.num ? parseFloat(removeSpaces(calc.num)) : 0;
    let res = calc.res ? parseFloat(removeSpaces(calc.res)) : 0;
    setCalc({
      ...calc,
      num: (num /= Math.pow(100, 1)),
      res: (res /= Math.pow(100, 1)),
      sign: '',
    });
  };

  // Function that defaults all the initial values/states of calc.
  const resetClickHandler = () => {
    setCalc({
      ...calc,
      sign: '',
      num: 0,
      res: 0,
    });
  };

  // ------------------------------------------ Render ------------------------------------------

  return (
    <div className='side-by-side'>
      <div className={darkMode ? 'wrapper dark-wrapper' : 'wrapper light-wrapper'}>
        <div className={darkMode ? 'screen dark-screen' : 'screen light-screen'} mode='single' max={70}>
          {calc.num ? calc.num : calc.res}
        </div>
        <div className='button-box'>
          {
            btnValues.flat().map((btn, i) => {
              return (
                <button
                  key={i}
                  className={btn === '=' ? 'equals' : ''}
                  onClick={
                    btn === 'C'
                      ? resetClickHandler
                      : btn === '+-'
                        ? invertClickHandler
                        : btn === '%'
                          ? percentClickHandler
                          : btn === '='
                            ? equalsClickHandler
                            : btn === '/' || btn === 'X' || btn === '-' || btn === '+'
                              ? signClickHandler
                              : btn === '.'
                                ? commaClickHandler
                                : numClickHandler
                  }>
                  {btn}
                </button>
              );
            })
          }
        </div>
      </div>
      <div>
        <img
          className='activity-img-vert'
          src={Peep30}
          alt='person thinking'
          style={{width: 200, height: 290, marginTop: 16 }}
        />
      </div>
    </div>
  );
};

export default Calculator;
