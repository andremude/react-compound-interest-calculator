import React from 'react'
import { useState }  from "react"



const Form = () => {
  const [state, setState] = useState();
  const [ initialInvestment, setInitialInvestment ] = useState();
  const [ period, setPeriod ] = useState();
  const [ interestRate, setInterestRate ] = useState();

  const calculate = () => {
    const result = initialInvestment * Math.pow(1 + interestRate / 100, period);
    setState(result.toFixed(2));
  };

  return (
    <section>
      <div className="form-container">

      <div className="form">
        <div className="form-left">
          <label htmlFor="initialInvestment">
            Initial Investment ($) <strong>*</strong>
            <input
              type="number"
              id="initialInvestment"
              name="initialInvestment"
              value={initialInvestment}
              onChange={ (e) => setInitialInvestment(e.target.value) }
            />
          </label>
          <label htmlFor="period">
            Investment Period (Years) <strong>*</strong>
            <input
              type="number"
              id="period"
              name="period"
              value={period}
              onChange={(e) => setPeriod(e.target.value) }
            />
          </label>
        </div>

        <div className="form-right">
          <label htmlFor="interestRate">
            Annual Interest Rate (%) <strong>*</strong>
            <input
              type="number"
              id="interestRate"
              name="interestRate"
              value={interestRate}
              onChange={ (e) => setInterestRate(e.target.value) }
            />
          </label>
        </div>
      </div>
      <div className="bottom-container">
        <div className="bottom-left">
          <button type="button" className="calculate-btn" onClick={() => calculate()}>
            Calculate
          </button>
        </div>
        <div className="bottom-right">
          <div className='result-container'>
            $ {state}
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Form;
