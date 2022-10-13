const mockAxios = {
	get: jest.fn(() => Promise.resolve({ data: {} }).then(Response)),
}

export { mockAxios }
