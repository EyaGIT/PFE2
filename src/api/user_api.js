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