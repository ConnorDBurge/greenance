import { useLazyQuery, gql } from '@apollo/client'

const AUTH_INFO_QUERY = gql`
    query AuthInfo {
        authInfo {
            accounts {
                account_id
                balances {
                    available
                    current
                    iso_currency_code
                }
                official_name
            }
        }
    }
`

const Auth = () => {

    const [fetchAuthInfo, { data, loading }] = useLazyQuery(AUTH_INFO_QUERY)

    return (
        <div>
            <button onClick={() => fetchAuthInfo()}>Fetch Auth Info</button>
            {loading && 'Loading Auth Info...'}
            {data && (
                <div>
                    <h2>Auth Info:</h2>
                    {data.authInfo.accounts.map(account => (
                        <p key={account.account_id}>{account.official_name}: ${account.balances.available}.00</p>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Auth;