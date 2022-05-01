import React from 'react'

function Button() {
    return (
        <div className='button--component'>
            <button class="btn add btn-primary">
                <i class="fa fa-envelope-o"><span className='button--span'>Email</span></i>
            </button>
            <button class="btn add btn-primary">
                <i class="fa fa-linkedin-square"><span className='button--span'>Linkedin</span></i>
            </button>
        </div>
    )
}

export default Button