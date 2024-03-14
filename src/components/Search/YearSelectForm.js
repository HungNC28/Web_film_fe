import React from "react";

const YearSelectForm = ({ year, setYear }) => {
  const currentYear = new Date().getFullYear();
  const years = [];

  for (let i = currentYear; i >= currentYear - 50; i--) {
    years.push(i);
  }

  return (
    <form>
      <label htmlFor="year">Năm phát hành:</label>
      <select
        value={year}
        onChange={(e) => setYear(e.target.value)}
        id="year"
        name="year"
      >
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </form>
  );
};

export default YearSelectForm;
