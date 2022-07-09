import { useQuery, gql } from "@apollo/client";

export const useLinkToken = () => {
  const {
    data: linkTokenData,
    loading: linkTokenLoading,
    error: linkTokenError } = useQuery(LINK_TOKEN_QUERY);
  console.log('Link Token: ', linkTokenData)
  return {
    linkToken: linkTokenData?.createLinkToken?.link_token,
    linkTokenData,
    linkTokenLoading,
    linkTokenError
  }
}

export const LINK_TOKEN_QUERY = gql`
  query LinkToken {
    createLinkToken {
      link_token
      expiration
      request_id
    }
  }
`