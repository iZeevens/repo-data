import { useState } from 'react'

function ErrorBoundaryBtn() {
  const [error, setError] = useState<boolean>(false)

  if (error) throw new Error('Error')

  return (
    <>
      <button
        className="btn btn-error"
        onClick={() => setError((error) => !error)}
      >
        Throw Error
      </button>
    </>
  )
}

export default ErrorBoundaryBtn
