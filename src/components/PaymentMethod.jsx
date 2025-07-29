import React from 'react'

const PaymentMethod = ({handlePaymentMethodChange, selectedPaymentMethod, pmntMethod}) => {
  return (
    <div className="mb-3 form-check">
        <input 
            onChange={handlePaymentMethodChange} 
            type="checkbox" 
            className="form-check-input" 
            id={pmntMethod?.id} 
            value={pmntMethod?.id} 
            checked={selectedPaymentMethod === pmntMethod?.id}
            name='paymentMethod'
        />
        <label className="form-check-label" htmlFor={pmntMethod?.id}>{pmntMethod?.description}</label>
    </div>
  )
}

export default PaymentMethod
