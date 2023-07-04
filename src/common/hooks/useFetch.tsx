import { useEffect, useState } from "react"

function useFetch(searchValue: string) {
    const [result, setResult] = useState<any>({});
    const [error, setError] = useState(false);

    useEffect(() => {
        try {
            fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`, {
                method: "get",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "Accept": "application/json"
                },
            }).then((response) => {
                if (response.status === 404) {
                    setError(true)
                }
                if (response.status === 200) {
                    setError(false)
                }
                return response.json()
            }).then((data) => {
                setResult(data[0])
            })
        } catch (err) {
            setError(true)
        }
    }, [searchValue])

    return { result, error }
}

export default useFetch;