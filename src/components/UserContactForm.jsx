import React from 'react'

const UserContactForm = ({formData, handleInputChange}) => {
    const {email} = formData;
  return (
    <div className="row">
        <div className="col-12">
            <div className="mb-4">
                <input type="text" name='email' className="form-control" id="email" value={email} onChange={handleInputChange} placeholder="Email"/>
            </div>
        </div>
    </div>
  )
}

export default UserContactForm
