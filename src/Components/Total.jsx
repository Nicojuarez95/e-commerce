import React from 'react'
import accounting from 'accounting'
import { Button } from '@mui/material'
import { useStateValue } from '../stateProvider';
import { getBasketTotal } from '../reducer';
import { Link as Anchord } from 'react-router-dom';

export default function Total() {
  const [{basket}, dispatch] = useStateValue()

  return (
    <div className="root">
        <h5> Total de productos: {basket?.length}</h5>
        <h5> {accounting.formatMoney(getBasketTotal(basket), "$")}</h5>
        <Anchord to="/pago">
          <Button className='pagar' variant='contained' color='secondary'>Pagar</Button>
        </Anchord>
    </div>
  )
}
