const mockAxios = {
	get: jest.fn(() => Promise.resolve().then(Response)),
}

export { mockAxios }
