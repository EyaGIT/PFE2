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
    console.log('hetha', data, token);
    const dataArray = [
      
      ['lastName', 'Ggggg'],
      ['password', 'Anass.02'],
      ['email', 'cherni.anabbbbvbssfchjll02@gmail.com'],
      ['birthDate', new Date('2002-05-18')],
      ['gender', 'Male'],
      ['image',{
        "uri": "file:///storage/emulated/0/Pictures/51673050-fb83-4da4-94d4-dc7fac239618.jpg",
        "name": "51673050-fb83-4da4-94d4-dc7fac239618.jpg",
        "type": "image/jpg"
    }]
    ];
    
    const formData = new FormData();
    
    dataArray.forEach(([key, value]) => {
      formData.append(key, value);
    });
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      responseType: 'json',
      
    };
    const boundary = `boundary-${Date.now()}`;
    console.log(data);
    const result = await ApiManager.post('/childSignup',data,config );
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