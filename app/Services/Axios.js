// @ts-ignore
export const sandBoxApiTodo = axios.create({
    baseURL: "https://bcw-sandbox.herokuapp.com/api/JordanW/",
    timeout: 10000
  });

  // @ts-ignore
  export const sandBoxApi = axios.create({
      baseURL: "https://bcw-sandbox.herokuapp.com/api/",
      timeout: 10000
  })