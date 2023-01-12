import axios from "axios";
import { baseURL, moyskladHttp } from "./config";

interface Params {
  page: number;
  count: number;
}

export const getUsers = async ({ page, count }: Params) => {
  try {
    const url = `${baseURL}/users?page=${page}&count=${count}`;
    const { data } = await axios.get(url);
    return data;
  } catch (error: any) {
    console.log(error.message);
  }
};

export const getPositions = async () => {
  try {
    const url = `${baseURL}/positions`;
    const { data } = await axios.get(url);

    return data;
  } catch (error: any) {
    console.log(error.message);
  }
};

export const postUserAction = async (data: FormData) => {
  const getToken = async () => {
    const { data } = await axios.get(
      `https://frontend-test-assignment-api.abz.agency/api/v1/token`
    );
    return data.token;
  };

  const token = await getToken();

  try {
    // const responce = await axios.post(
    //   `https://frontend-test-assignment-api.abz.agency/api/v1/users`,
    //   {
    //     data: data,
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   }
    // );
    // console.log(responce);

    const res = await axios({
      url: `https://frontend-test-assignment-api.abz.agency/api/v1/users`,
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data:data
    });

    console.log(res);
    
    return res;
  } catch (error: any) {
    console.log(error.message);
  }
};
