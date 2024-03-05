import React from 'react'

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyArray = [],
  selectCurrency,
  defaultCurrency,
}) {


  return (
    <div className='text-white flex flex-wrap items-center justify-between bg-blue-950 rounded-lg px-16 py-8 border-white border-2 my-2'>
            <div className='flex flex-col'>
                <label>{label}</label>
                <input type="text"
                className='outline-none text-black px-1 bold rounded-lg m-t-2 w-full'
                placeholder='0'
                value={amount}
                onChange={(e) => onAmountChange(Number(e.target.value))}
                />
            </div>

            <div className='flex flex-col'>

              <label>CURRENCY</label>

              <select className='text-black rounded-lg outline-none w-full'
              value={selectCurrency} onChange={(e) => (onCurrencyChange(e.target.value))}>
                <option value={defaultCurrency}>{defaultCurrency}</option>
                {
                  currencyArray.map((currency)=>{
                    return <option value={currency} key={currency}>{currency}</option>
                  })
                }
              </select>

            </div>

    </div>
  )
}

export default InputBox