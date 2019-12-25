import React from 'react';
import form from '../form.json';
import FormText from './FormText.js';

function FormComponent() {
  return (
    <React.Fragment>
      {form.map(data =>
        data.component === 'textForm' ? (
          <FormText />
        ) : (
          <div>
            <label htmlFor={data.htmlFor} className='form__label'>
              {data.label}
            </label>
            <div className='form__image'>
              <input key={data.id} type={data.type} id={data.id} name={data.name} placeholder={data.placeholder} className={data.className} />
              <button htmlFor='file' className='form__image--btn js__profile-trigger'>
                Añadir imagen
              </button>
              <img className='form__image--min js__profile-preview-img' alt='' />
            </div>
          </div>
        )
      )}
    </React.Fragment>
  );
}

export default FormComponent;
