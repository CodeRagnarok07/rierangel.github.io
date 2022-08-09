

const backend = 'http://127.0.0.1:8000/'

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