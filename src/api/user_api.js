import {ApiManager} from './ApiManager';
import FormData from "form-data";
export const user_login = async data => {
  try {
    console.log(data)
    const result = await ApiManager('/signinMember', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      data: data,
    });
    return result;
  } catch (error) {
    console.log(error);
    if (error.response && error.response.data) {
      return error.response.data;
    } else {
      // Handle the error when response or response.data is undefined
      return { error: 'An error occurred.' };
    }
  }
};

export const AllInfoUser = async (token) => {
  try {
   
    const result = await ApiManager('/GetAllInfoUser', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
         'Authorization': `Bearer ${token}` 
      }
      
    });
    
    
    return result;
  } catch (error) {
    
    if (error.response && error.response.data) {
      return error.response.data;
    } else {
      // Handle the error when response or response.data is undefined
      return { error: 'An error occurred.' };
    }
  }
};
export const addAmount = async (data,token) => {
  try {
   
    const result = await ApiManager('/addAmount', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
         'Authorization': `Bearer ${token}` 
      },
      data:data
      
    });
    
    
    return result;
  } catch (error) {
    console.log(error)
    if (error.response && error.response.data) {
      return error.response.data;
    } else {
      // Handle the error when response or response.data is undefined
      return { error: 'An error occurred.' };
    }
  }
};
export const verifyEmailExists = async (data) => {
  try {
   
    const result = await ApiManager('/verifyEmailExists', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
         
      },
      data:data
      
    });
    
    
    return result;
  } catch (error) {
    console.log(error)
    if (error.response && error.response.data) {
      return error.response.data;
    } else {
      // Handle the error when response or response.data is undefined
      return { error: 'An error occurred.' };
    }
  }
};

export const childSignup = async (data, token) => {
  try {
    
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      responseType: 'json',
      
    };
    
    const result = await ApiManager.post('/childSignup',data,config );
    
    return result;
  } catch (error) {
    console.log(error);
    if (error.response && error.response.data) {
      return error.response.data;
    } else {
      console.log(error);
      return { error: 'An error occurred.' };
    }
  }
};

export const SignupMember = async (data) => {
  try {
    
    const config = {
      headers: {
        'Content-Type': 'application/json'
      },
      responseType: 'json',
      
    };
    
    const result = await ApiManager.post('/SignupMember',data,config );
    
    return result;
  } catch (error) {
    console.log(error);
    if (error.response && error.response.data) {
      return error.response.data;
    } else {
      console.log(error);
      return { error: 'An error occurred.' };
    }
  }
};

export const createBracelet = async (data) => {
  try {
    console.log(data)
    const result = await ApiManager('/createBracelet', {
      method: 'POST',
      headers: {
        'content-type': 'application/json' 
      },
      data:data
      
    });
    
    
    return result;
  } catch (error) {
    console.log(error)
    if (error.response && error.response.data) {
      return error.response.data;
    } else {
      console.log('lelelel')
      console.log(error);
      // Handle the error when response or response.data is undefined
      return { error: 'An error occurred.' };
    }
  }
};
export const stat = async (data) => {
  try {
    console.log(data)
    const result = await ApiManager('/stati', {
      method: 'POST',
      headers: {
        'content-type': 'application/json' 
      },
      data:data
      
    });
    
    
    return result;
  } catch (error) {
    console.log(error)
    if (error.response && error.response.data) {
      return error.response.data;
    } else {
      console.log('lelelel')
      console.log(error);
      // Handle the error when response or response.data is undefined
      return { error: 'An error occurred.' };
    }
  }
};


export const transfer = async (data,token) => {
  try {
   
    const result = await ApiManager('/transfer', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
         'Authorization': `Bearer ${token}` 
      },
      data:data
      
    });
    
    
    return result;
  } catch (error) {
    console.log(error)
    if (error.response && error.response.data) {
      return error.response.data;
    } else {
      // Handle the error when response or response.data is undefined
      return { error: 'An error occurred.' };
    }
  }
};

export const deletemember1 = async (data) => {
  try {
    
    const config = {
      headers: {
        'Content-Type': 'application/json',
        
      },
      responseType: 'json',
      
    };
    
    const result = await ApiManager.post('/deletechild',data,config );
    
    return result;
  } catch (error) {
    console.log(error);
    if (error.response && error.response.data) {
      return error.response.data;
    } else {
      console.log(error);
      return { error: 'An error occurred.' };
    }
  }
};

export const blockbracelt1 = async (data,token) => {
  try {
   
    const result = await ApiManager('/bloquerbracelet', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
         'Authorization': `Bearer ${token}` 
      },
      data:data
      
    });
    
    
    return result;
  } catch (error) {
    console.log(error)
    if (error.response && error.response.data) {
      return error.response.data;
    } else {
      // Handle the error when response or response.data is undefined
      return { error: 'An error occurred.' };
    }
  }
};
export const getHistory = async (page, limit, accessToken) => {
  const headers = {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
    Pragma: 'no-cache',
  };

  try {
    const response = await ApiManager.get("/checkout/getOperations", {
      params: { page, limit },
      headers: headers,
    });

    return response;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch history data');
  }
};

export const updateLimits = async (data) => {
  const headers = {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
    Pragma: 'no-cache',
  };

  try {
    const response = await ApiManager.post("/checkout/updateLimits", {
      headers: headers,
    });

    return response;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch history data');
  }
};
export const getShopsProduct = async () => {
  const headers = {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
    Pragma: 'no-cache',
  };

  try {
    const response = await ApiManager.get("/checkout/getChainsAndProducts", {
      headers: headers,
    });

    return response;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch history data');
  }
};
export const edituser = async (token, userData) => {
  try {
    const result = await ApiManager('/editUser', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` 
      },
      body: JSON.stringify(userData)
    });
    
    return result;
  } catch (error) {
    if (error.response && error.response.data) {
      return error.response.data;
    } else {
      return { error: 'An error occurred.' };
    }
  }
};

