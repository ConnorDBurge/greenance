import { useLinkToken } from './use-link-token'
import { usePlaidLink } from './use-plaid-link'

const Link = () => {
    const { linkToken } = useLinkToken()
    const { open, ready } = usePlaidLink(linkToken)
    return (
        <div>
            {ready && (
                <button onClick={() => open()}>Click me dude</button>
            )}
        </div>
    );
}

export default Link;