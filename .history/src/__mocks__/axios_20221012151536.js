const mockAxios = {
	get: jest.fn(() => Promise.resolve({ data: {} }).then(respon)),
}

export { mockAxios }
