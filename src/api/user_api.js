import ApiManager from './ApiManager';

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
    console.log('hetha', data, token);
    const result = await ApiManager('/childSignup', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`,
       
        
      },
      
      data:data
    });
    console.log('hhhhhh')
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


export const createBracelet = async (data,token) => {
  try {
    console.log(data)
    const result = await ApiManager('/createBracelet', {
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
      console.log('lelelel')
      console.log(error);
      // Handle the error when response or response.data is undefined
      return { error: 'An error occurred.' };
    }
  }
};