const mockAxios = {
	get: jest.fn(() => Promise.resolve({ data: {} }).then(())),
}

export { mockAxios }
