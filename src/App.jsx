import { useState } from "react";

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  // Derived state
  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  const handleReset = () => {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  };

  return (
    <>
      <h1>Tip Calculator</h1>
      <BillInput text="How much was the bill?" bill={bill} onBill={setBill} />
      <SelectPercentage
        // text="How did you like the service?"
        percentage={percentage1}
        onSelect={setPercentage1}
      >
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage
        // text="How did your friend like the service?"
        percentage={percentage2}
        onSelect={setPercentage2}
      >
        How did your friend like the service?
      </SelectPercentage>

      {bill > 0 && (
        <>
          <Output bill={bill}>
            You pay ${bill + tip} (${bill} + ${tip} tip)
          </Output>
          <Reset onReset={handleReset} bill={bill}>
            Reset
          </Reset>
        </>
      )}
    </>
  );
}

// Bill Component
function BillInput({ text, bill, onBill }) {
  return (
    <>
      <div className="flex">
        <label>{text}</label>
        <input
          type="number"
          placeholder="Bill value"
          value={bill}
          onChange={(e) => onBill(Number(e.target.value))}
        />
      </div>
    </>
  );
}

// Service Component
function SelectPercentage({ percentage, onSelect, children }) {
  return (
    <>
      <div className="flex">
        <label>{children}</label>
        <select
          name=""
          id=""
          value={percentage}
          onChange={(e) => onSelect(Number(e.target.value))}
        >
          <option value="0">Dissatisfied (0%)</option>
          <option value="5">It was okay (5%)</option>
          <option value="10">It was good (10%)</option>
          <option value="20">Absolutely amazing! (20%)</option>
        </select>
      </div>
    </>
  );
}

// Total Component
function Output({ onReset, bill, children }) {
  return (
    <>
      <h3>{children}</h3>{" "}
    </>
  );
}

// Button Component
function Reset({ onReset, bill, children }) {
  return (
    <>
      <button onClick={onReset}>{children}</button>{" "}
    </>
  );
}

export default TipCalculator;
