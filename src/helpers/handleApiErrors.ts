import { AxiosError } from 'axios';
import IApiPatternError from '../interface/IApiPatternError';

const handleApiErrors = (error: AxiosError<IApiPatternError>) => {
  if (error.response?.data !== undefined) {
    const message = error.response.data.message;

    return Array.isArray(message) ? message : [message];
  } else {
    return [];
  }
};

export default handleApiErrors;
