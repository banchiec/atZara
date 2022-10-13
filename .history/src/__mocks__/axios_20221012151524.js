const mockAxios = {
	get: jest.fn(() => Promise.resolve({ data: {} }).then((resp) => Response.data)),
}

export { mockAxios }
