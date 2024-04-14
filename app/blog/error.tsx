'use client'

function Error({error}: {error: Error}) {
    return <p>Something somewhere went terribly wrong {error.message}</p>
}

export default Error