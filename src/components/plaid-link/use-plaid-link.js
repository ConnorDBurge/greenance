import { usePlaidLink as useLink } from 'react-plaid-link';
import { useExchangeToken } from './use-exchange-token';

export const usePlaidLink = (linkToken) => {
    const { exchangeToken } = useExchangeToken()
    const config = {
        onSuccess: (public_token, metadata) => {
            console.log('public_token: ', public_token)
            exchangeToken({ variables: { public_token } })
        },
        onExit: (err, metadata) => { },
        onEvent: (eventName, metadata) => { },
        token: linkToken,
    };
    return useLink(config);
}
