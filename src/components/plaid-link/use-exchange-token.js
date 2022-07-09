import { useMutation, gql } from '@apollo/client'

export const useExchangeToken = (config) => {
  const [exchangeToken] = useMutation(EXCHANGE_TOKEN_MUTATION, config)
  return { exchangeToken }
}

export const EXCHANGE_TOKEN_MUTATION = gql`
  mutation ExchangeToken($public_token: String!) {
    exchangePublicToken(public_token: $public_token) {
      message
      item_id
      error
    }
  }
`