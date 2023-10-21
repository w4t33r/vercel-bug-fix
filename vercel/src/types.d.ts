import { JSON } from 'tslib';
type stripe = {
    id:           string,
    address:        JSON,
    amount_total:   number,
    email:         string,
    name:           string,
    orderNummer:    number,
    paymentDate:   Date,
    payment_status: string,
    payment_type:   string,
    products:       JSON,
    transfer:      boolean,
}

