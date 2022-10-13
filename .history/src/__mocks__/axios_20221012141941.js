// eslint-disable-next-line import/no-anonymous-default-export
export const  mockAxios = () =>  {
	get: jest.fn(() => Promise.resolve({ data: {} })),
}

export d