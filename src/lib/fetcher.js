

const backend = process.env.REACT_APP_API_URL

export const get = async (path) => {
    // const bodyData = JSON.stringify({query,vars})//
    
    try {
      const resApi = await fetch(`${backend}${path}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })

      
      const dataApi = resApi.json()

      return dataApi
  
  
    } catch (error) {
      console.log("network error")
      return { data: error }
    }
  }