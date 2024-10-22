import SelectToken from '@/components/input/SelectToken'
import { useEffect, useState } from 'react'

const TransferContent = () => {
  const [transferToken, setTransferToken] = useState(null)
  const [transferValue, setTransferValue] = useState(null)
  const [receiveToken, setReceiveToken] = useState(null)
  const [receiveValue, setReceiveValue] = useState(null)

  // transfer token
  const callbackChangeTransferToken = (e) => {
    setTransferToken(e);
    setTransferValue(e.min);
  }

  const callbackChangeTransferTokenValue = (e) => {
    setTransferValue(e.target.value)
  }

  //withdraw token
  const callbackChangeReceiveToken = (e) => {
    setReceiveToken(e);
    setReceiveValue(e.min);
  }

  const callbackChangeReceiveTokenValue = (e) => {
    setReceiveValue(e.target.value)
  }

  useEffect(() => {

  }, [transferToken, transferValue])

  return (
    <div>
      <p className='mb-2 text-sm'>Transfer</p>
      <SelectToken
        {...{
          token: transferToken,
          callbackChangeToken: callbackChangeTransferToken,
          value: transferValue,
          callbackChangeValue: callbackChangeTransferTokenValue
        }}
      />

      <p className='my-2 text-sm'>Receive</p>
      <SelectToken
        {...{
          token: receiveToken,
          callbackChangeToken: callbackChangeReceiveToken,
          value: receiveValue,
          callbackChangeValue: callbackChangeReceiveTokenValue,
          canChangeValue: false
        }}
      />
    </div>
  )
}

export default TransferContent
