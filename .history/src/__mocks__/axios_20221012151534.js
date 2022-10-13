const mockAxios = {
	get: jest.fn(() => Promise.resolve({ data: {} }).then(res)),
}

export { mockAxios }
