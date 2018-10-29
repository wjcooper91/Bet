import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

export default class MyApp extends React.Component {
    render() {
        const client = {
            sandbox:    'AVvX91bMw2KQb1kpBsq9j2D3Erz_9InSo5nmhbwbNFGCCTD-1nO5hbtvSCdRCMxjSLjSuqGBLnxt455U',
            production: 'YOUR-PRODUCTION-APP-ID',
        }   
        return (
            <PaypalExpressBtn client={client} currency={'USD'} total={1.00} />
        );
    }
} 