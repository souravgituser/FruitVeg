import React from 'react'

const BillingForm = ({formData, errorMsg, handleInputChange}) => {
    const {firstName,
    lastName,
    phone,    
    address1,
    address2,
    city,
    country,    
    state,
    zip } = formData;
  return (
    <>
        {errorMsg && (
            <div class="alert alert-danger" role="alert">
                <p className="m-0" style={{fontSize : "1.6rem"}}>{errorMsg}</p>
            </div>
        )}
        <div className="row">
            <div className="col-md-6">
                <div className="mb-4">
                    <input type="text" className="form-control" name='firstName' id="firstName" placeholder="First Name" onChange={handleInputChange} value={firstName}/>
                </div>
            </div>
            <div className="col-md-6">
                <div className="mb-4">
                    <input type="text" className="form-control" name='lastName' id="lastName" placeholder="Last Name" onChange={handleInputChange} value={lastName}/>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <div className="mb-4">
                    <input type="text" className="form-control" name='phone' id="phone" placeholder="Phone" onChange={handleInputChange} value={phone}/>
                </div>
            </div>
            <div className="col-12">
                <div className="mb-4">
                    <input type="text" className="form-control" name='address1' id="address" placeholder="Address1" onChange={handleInputChange} value={address1}/>
                </div>
                <div className="mb-4">
                    <input type="text" className="form-control" name='address2' id="address2" placeholder="Address2" onChange={handleInputChange} value={address2}/>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6">
                <div className="mb-4">
                    <input type="text" className="form-control" name='city' id="city" placeholder="City" onChange={handleInputChange} value={city}/>
                </div>
            </div>
            <div className="col-md-6">
                <div className="mb-4">
                    <input type="text" className="form-control"  name='country' id="country" placeholder="Country" onChange={handleInputChange} value={country}/>
                </div>
            </div>
            <div className="col-md-6">
                <div className="mb-4">
                    <input type="text" className="form-control" name={'state'} id="state" placeholder="state" onChange={handleInputChange} value={state}/>
                </div>
            </div>
            <div className="col-md-6">
                <div className="mb-4">
                    <input type="text" className="form-control" name='zip' id="zip" placeholder="Pin Code" onChange={handleInputChange} value={zip}/>
                </div>
            </div>
        </div>
    </>
  )
}

export default BillingForm
